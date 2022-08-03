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

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  return async ({
    name, email, message
  }) => {
    const mailOptions = {
      from: email,
      to: user,
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
