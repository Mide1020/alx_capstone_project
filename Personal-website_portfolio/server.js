const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Nodemailer with your email service provider settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aderinsolamisimi20@gmail.com',
    pass: 'Adumaradam25',
  },
});

app.get('/send-email', (req, res) => {
  // Compose the email
  const mailOptions = {
    from: 'aderinsolamisimi20@gmail.com',
    to: 'akinrefonayomide1@gmail.com',
    subject: 'Email Notification',
    text: 'This is a notification email.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
