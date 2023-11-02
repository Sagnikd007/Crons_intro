const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Instead of using nodemailer pkg I have used sgmail to send emails to a large no.of recepients efficiently
//SendGrid, Mailgun, or Amazon SES, as they are designed for bulk email delivery and have built-in features for managing email campaigns.
const recipients = [
  'recipient1@example.com',
  'recipient2@example.com',
  // Add all your recipients here
];

const msg = {
  to: recipients,
  from: 'your_email@example.com',
  subject: 'Your Email Subject',
  text: 'Your email message.',
  // You can use HTML for the email content if needed.
};

sgMail.send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
