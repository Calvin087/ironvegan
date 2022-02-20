const nodemailer = require("nodemailer");
const template = require("./mailerTemplate");

// Method that contains an object with all the info needed for the configuration to send an email
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASSWORD
  }
})

// Send email
module.exports.sendActivationEmail = (email, token) => {
  transporter.sendMail({
    from: `Activation account <${process.env.NM_USER}>`,
    to: email,
    subject: "You are one step away from creating your account.",
    html: template.generateEmail(token)
  })
}
