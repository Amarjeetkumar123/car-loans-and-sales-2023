const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const emailTemplates = {
  leadConfirmation: (data) => ({
    subject: 'Application Received - Car Loans & Sales',
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc3545;">Thank You for Your Application!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your application for <strong>${data.loanType}</strong>.</p>
        <p>Our team will review your application and get back to you within 24-48 hours.</p>
        <p>If you have any questions, feel free to contact us at:</p>
        <ul>
          <li>Phone: +91 9686-870-536</li>
          <li>Email: info@carloansandsales.com</li>
        </ul>
        <p>Best regards,<br/>Car Loans & Sales Team</p>
      </div>
    `,
    textBody: `Thank You for Your Application!\n\nDear ${data.name},\n\nWe have received your application for ${data.loanType}.\n\nOur team will review your application and get back to you within 24-48 hours.`,
  }),

  adminNotification: (data) => ({
    subject: 'New Lead Submitted - Car Loans & Sales',
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc3545;">New Lead Submitted</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Loan Type:</strong> ${data.loanType}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p>Login to your dashboard to view full details and take action.</p>
      </div>
    `,
    textBody: `New Lead Submitted\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nLoan Type: ${data.loanType}\nCity: ${data.city}`,
  }),

  statusUpdate: (data) => ({
    subject: `Application Status Update - ${data.status}`,
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc3545;">Application Status Update</h2>
        <p>Dear ${data.name},</p>
        <p>Your application status has been updated to: <strong>${data.status}</strong></p>
        ${data.message ? `<p>${data.message}</p>` : ''}
        <p>Best regards,<br/>Car Loans & Sales Team</p>
      </div>
    `,
    textBody: `Application Status Update\n\nDear ${data.name},\n\nYour application status has been updated to: ${data.status}\n\n${data.message || ''}`,
  }),
};

const sendEmail = async ({ to, subject, template, data }) => {
  try {
    // Get template
    const emailTemplate = emailTemplates[template];
    
    if (!emailTemplate) {
      throw new Error(`Email template '${template}' not found`);
    }

    const { subject: templateSubject, htmlBody, textBody } = emailTemplate(data);

    // Send email via Postmark
    const result = await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: to,
      Subject: subject || templateSubject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: 'outbound',
    });

    console.log('✅ Email sent successfully:', result.MessageID);
    return result;
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    // Don't throw error - just log it so application continues
    return null;
  }
};

module.exports = {
  sendEmail,
};
