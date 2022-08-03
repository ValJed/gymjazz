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
  routes (self) {
    return {
      post: {
        async sendMail(req, res) {
          const {
            name, email, message
          } = req.body;

          if (!name || !email || !message) {
            throw self.apos.error('invalid');
          }

          try {
            const { success } = await sendMail({
              name,
              email,
              message
            });

            if (!success) {
              throw self.apos.error('invalid');
            }

            return 'success';
          } catch (err) {
            console.log(err);
          }
        }
      }
    };
  }
};
