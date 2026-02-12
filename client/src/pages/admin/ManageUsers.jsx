import { useCallback, useEffect, useState } from 'react';
import { createAdmin, getAdmins } from '../../services/adminService';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Skeleton from '../../components/common/Skeleton';
import toast from 'react-hot-toast';
import { Shield, UserPlus } from 'lucide-react';

const ManageUsers = () => {
  const { admin } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const fetchUsers = useCallback(async () => {
    try {
      const data = await getAdmins({ includeInactive: true });
      setUsers(data.admins || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      toast.error('Please fill all required fields');
      return;
    }

    setSaving(true);
    try {
      await createAdmin({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role,
      });
      toast.success('User created successfully');
      setForm({ name: '', email: '', password: '', role: 'admin' });
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create user');
    } finally {
      setSaving(false);
    }
  };

  if (admin?.role !== 'super_admin') {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5" />
            <div>
              <h2 className="text-lg font-semibold">Access restricted</h2>
              <p className="text-sm">Only super admins can manage users.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserPlus className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Manage Users</h1>
            <p className="text-gray-600">Create and review admin accounts.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-6">
        <form
          onSubmit={handleCreate}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Create New User</h2>
          <Input
            label="Full name"
            name="name"
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Enter full name"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="name@company.com"
            required
          />
          <Input
            label="Temporary password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            placeholder="Minimum 6 characters"
            required
          />
          <Select
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange('role')}
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'manager', label: 'Manager' },
              { value: 'agent', label: 'Agent' },
              { value: 'super_admin', label: 'Super Admin' },
            ]}
            required
          />
          <Button type="submit" className="w-full" disabled={saving}>
            {saving ? 'Creating...' : 'Create User'}
          </Button>
        </form>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">User Directory</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2 pr-4">Role</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan="5" className="py-4 text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
                {users.map((user) => (
                  <tr key={user._id} className="border-b last:border-none">
                    <td className="py-3 pr-4 font-medium text-gray-900">{user.name}</td>
                    <td className="py-3 pr-4 text-gray-600">{user.email}</td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {user.role === 'super_admin' ? 'Super Admin' : 'Admin'}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          user.isActive
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
