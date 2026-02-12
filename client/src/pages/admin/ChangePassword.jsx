import { useState } from 'react';
import { changePassword } from '../../services/authService';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import toast from 'react-hot-toast';
import { LockKeyhole } from 'lucide-react';

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.currentPassword || !form.newPassword) {
      toast.error('Please fill all required fields');
      return;
    }

    if (form.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setSaving(true);
    try {
      await changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });
      toast.success('Password updated successfully');
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update password');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <LockKeyhole className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Change Password</h1>
          <p className="text-gray-600">Update your account password.</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 p-6"
      >
        <Input
          label="Current password"
          name="currentPassword"
          type="password"
          value={form.currentPassword}
          onChange={handleChange('currentPassword')}
          required
        />
        <Input
          label="New password"
          name="newPassword"
          type="password"
          value={form.newPassword}
          onChange={handleChange('newPassword')}
          required
        />
        <Input
          label="Confirm new password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
        />
        <Button type="submit" className="w-full" disabled={saving}>
          {saving ? 'Updating...' : 'Update Password'}
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
