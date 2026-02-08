import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import PageHeader from '../../components/common/PageHeader';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Textarea from '../../components/common/Textarea';
import Button from '../../components/common/Button';
import { LOAN_TYPES, INDIAN_STATES } from '../../constants/data';
import { createLead } from '../../services/leadService';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(1, 'Please select a state'),
  pincode: z.string().regex(/^[0-9]{6}$/, 'Pincode must be 6 digits'),
  loanType: z.string().min(1, 'Please select a loan type'),
  message: z.string().optional(),
});

const ApplyNow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await createLead(data);
      toast.success('Application submitted successfully! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader 
        title="Apply for Car Loan" 
        subtitle="Fill out the form below and we'll get back to you within 24-48 hours"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Loan Type */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Loan Information</h2>
            <Select
              label="Type of Loan"
              name="loanType"
              id="loanType"
              options={LOAN_TYPES}
              required
              register={register}
              error={errors.loanType}
              placeholder="Select loan type"
            />
          </div>

          {/* Personal Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="firstName"
                id="firstName"
                required
                register={register}
                error={errors.firstName}
                placeholder="Enter first name"
              />
              <Input
                label="Last Name"
                name="lastName"
                id="lastName"
                required
                register={register}
                error={errors.lastName}
                placeholder="Enter last name"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                required
                register={register}
                error={errors.email}
                placeholder="your.email@example.com"
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                id="phone"
                required
                register={register}
                error={errors.phone}
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Address Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="City"
                name="city"
                id="city"
                required
                register={register}
                error={errors.city}
                placeholder="Enter city"
              />
              <Select
                label="State"
                name="state"
                id="state"
                options={INDIAN_STATES}
                required
                register={register}
                error={errors.state}
                placeholder="Select state"
              />
              <Input
                label="Pincode"
                name="pincode"
                id="pincode"
                required
                register={register}
                error={errors.pincode}
                placeholder="6-digit pincode"
                className="md:col-span-2"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Additional Information (Optional)</h2>
            <Textarea
              label="Message"
              name="message"
              id="message"
              register={register}
              error={errors.message}
              placeholder="Any additional details you'd like to share..."
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full md:w-auto md:px-12"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
