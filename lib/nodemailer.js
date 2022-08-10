const nodemailer = require('nodemailer');

module.exports = ({
  host, user, pass
}) => {
  const config = {
    host,
    port: 587,
    secure: false,
    auth: {
      user,
      pass
    }
  };
  const transporter = nodemailer.createTransport(config);

  return async ({
    name, email, message
  }) => {

    const mailOptions = {
      from: user,
      to: user,
      subject: `Form Contact: ${name} <${email}>`,
      text: message
    };

    const { accepted } = await transporter.sendMail(mailOptions);

    if (!accepted.length) {
      throw new Error('Mail sending not accepted');
    }
  };
};
