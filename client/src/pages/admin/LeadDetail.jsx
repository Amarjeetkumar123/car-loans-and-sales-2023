import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLead, updateLead } from '../../services/leadService';
import { getAdmins } from '../../services/adminService';
import { LEAD_STATUSES } from '../../constants/data';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Button from '../../components/common/Button';
import toast from 'react-hot-toast';

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');
  const [nextFollowUpAt, setNextFollowUpAt] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [admins, setAdmins] = useState([]);
  const [saving, setSaving] = useState(false);

  const fetchAdmins = useCallback(async () => {
    try {
      const data = await getAdmins();
      setAdmins(data.admins || []);
    } catch (error) {
      console.error('Failed to fetch admins:', error);
    }
  }, []);

  const fetchLead = useCallback(async () => {
    try {
      const data = await getLead(id);
      setLead(data.lead);
      setStatus(data.lead.status || 'New');
      setNextFollowUpAt(
        data.lead.nextFollowUpAt
          ? new Date(data.lead.nextFollowUpAt).toISOString().slice(0, 10)
          : ''
      );
      setAssignedTo(data.lead.assignedTo?._id || '');
    } catch (error) {
      toast.error('Failed to load lead details');
      console.error('Lead details error:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchLead();
    fetchAdmins();
  }, [fetchLead, fetchAdmins]);

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await updateLead(id, {
        status,
        assignedTo: assignedTo || undefined,
        note: note.trim() ? note : undefined,
        nextFollowUpAt: nextFollowUpAt || null,
      });
      toast.success('Lead updated successfully');
      setNote('');
      fetchLead();
    } catch (error) {
      toast.error('Failed to update lead');
      console.error('Update lead error:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="p-8">
        <p className="text-gray-600">Lead not found.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lead Details</h1>
        <Button variant="outline" onClick={() => navigate('/admin/leads')}>
          Back to Leads
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {lead.firstName} {lead.lastName}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone:</strong> {lead.phone}</p>
            <p><strong>City:</strong> {lead.city}</p>
            <p><strong>State:</strong> {lead.state}</p>
            <p><strong>Pincode:</strong> {lead.pincode}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Loan Information</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Loan Type:</strong> {lead.loanType}</p>
            <p><strong>Status:</strong> {lead.status}</p>
            <p><strong>Submitted:</strong> {new Date(lead.createdAt).toLocaleString()}</p>
            <p><strong>Last Contacted:</strong> {lead.lastContactedAt ? new Date(lead.lastContactedAt).toLocaleString() : '—'}</p>
            <p><strong>Next Follow-up:</strong> {lead.nextFollowUpAt ? new Date(lead.nextFollowUpAt).toLocaleDateString() : '—'}</p>
            {lead.message && (
              <p><strong>Message:</strong> {lead.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Update Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="input-field"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {LEAD_STATUSES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          <select
            className="input-field"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option value="">Unassigned</option>
            {admins.map((admin) => (
              <option key={admin._id} value={admin._id}>
                {admin.name} ({admin.email})
              </option>
            ))}
          </select>
          <input
            type="date"
            className="input-field"
            value={nextFollowUpAt}
            onChange={(e) => setNextFollowUpAt(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Add note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button onClick={handleUpdate} disabled={saving}>
            {saving ? 'Saving...' : 'Update'}
          </Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Notes</h2>
        {lead.notes?.length ? (
          <ul className="space-y-3">
            {lead.notes.map((n, index) => (
              <li key={index} className="border-b pb-2">
                <p className="text-gray-700">{n.text}</p>
                <p className="text-xs text-gray-500">
                  {new Date(n.addedAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No notes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default LeadDetail;
