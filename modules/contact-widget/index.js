const mailer = require('../../lib/nodemailer');

const sendMail = mailer({
  host: process.env.MAIL_HOST,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS
});

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      }
    }
  },
  apiRoutes (self) {
    return {
      post: {
        async sendMail(req, res) {
          const {
            name, email, message, captcha, captchaRes
          } = req.body;

          if (captcha !== captchaRes) {
            throw self.apos.error('invalid', 'badcaptcha');
          }

          if (!name || !email || !message) {
            throw self.apos.error('invalid');
          }

          try {
            await sendMail({
              name,
              email,
              message
            });

            return 'success';
          } catch (err) {
            console.log(err);
          }
        }
      }
    };
  },
  methods (self) {
    return {
      load (req, widgets) {
        req.data.captcha = Array(2).fill().map(() => Math.floor(Math.random() * 20));
      }
    };
  }
};
