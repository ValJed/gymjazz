const nodemailer = require('nodemailer');

module.exports = ({
  host, user, pass
}) => {
  console.log('MAIL FINSOOOOOOO =>', host, user, pass);
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
      from: `${name} <${email}>`,
      to: 'valentin.jeudy@gmail.com',
      subject: 'contact form',
      text: message
    };

    try {
      const { accepted } = await transporter.sendMail(mailOptions);

      if (accepted.length) {
        return {
          success: true
        };
      }

      return {
        success: false
      };
    } catch (err) {
      console.error(err);
      return {
        success: false
      };
    }
  };
};
