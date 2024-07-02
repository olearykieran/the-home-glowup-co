const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
require("dotenv").config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendContactFormEmail = functions.firestore
    .document("contacts/{contactId}")
    .onCreate(async (snap, context) => {
      const newValue = snap.data();

      const mailOptions = {
        from: `Your App <${process.env.EMAIL_USER}>`,
        to: "info@thehomeglowup.com",
        subject: "New Contact Form Submission",
        text: `
        New contact form submission:
        Name: ${newValue.firstName} ${newValue.lastName}
        Email: ${newValue.email}
        Phone: ${newValue.phone}
        Zip Code: ${newValue.zipCode}
        Message: ${newValue.message}
      `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("New contact form email sent successfully");
      } catch (error) {
        console.error("There was an error sending the email:", error);
      }
    });
