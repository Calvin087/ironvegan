const nodemailer = require("nodemailer");
const template = require("./mailerTemplate");

// Method that contains an object with all the info needed for the configuration to send an email
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASSWORD,
  },
});

// Send email
module.exports.sendActivationEmail = (email, token, name) => {
  transporter.sendMail({
    from: `"VegEspaña" <${process.env.NM_USER}>`,
    to: email,
    subject: `${name}, confirm your account 🥑`,
    html: template.generateEmail(token),
  });
};

// Send Recommendation
module.exports.sendRecommendation = (body) => {
  let emailBody = JSON.stringify(body, null, 2);

  transporter.sendMail({
    from: `"VegEspaña" <${process.env.NM_USER}>`,
    to: `"VegEspaña" <${process.env.NM_USER}>`,
    subject: `New Recommendation`,
    html: emailBody,
  });
};
