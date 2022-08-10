const emailRegex = /^\S+@\S+\.[a-zA-Z]{2,}$/;

export default () => {
  apos.util.widgetPlayers.contact = {
    selector: '[data-contact]',
    player(el) {
      const form = el.querySelector('.contact-widget__form');

      const inputs = form.querySelectorAll('.contact-widget__input');

      inputs.forEach((input) => {
        input.addEventListener('input', () => {
          if (input.nextElementSibling) {
            input.nextElementSibling.textContent = '';
          }
          input.classList.remove('error');
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formEntries = Object.fromEntries(formData);

        const errors = validate(formEntries);

        if (Object.entries(errors).length) {
          return showErrorMessages(form, errors);
        }

        try {
          const captchaEl = el.querySelector('[data-captcha]');

          const res = await apos.http.post('/api/v1/contact-widget/send-mail', {
            body: {
              ...formEntries,
              captchaRes: captchaEl.dataset.captcha
            }
          });

          console.log('Call res bitch: ');
          console.log(res);
        } catch (err) {
          console.log('in catch bitch: ', err);
          console.log(err.body);
          console.log(err.name);
          console.log(err.data);
        }
      });
    }
  };
};

function validate(fields) {
  return Object.entries(fields).reduce((acc, [ field, value ]) => {
    if (!value.length) {
      return {
        ...acc,
        [field]: 'Ce champ doit être rempli'
      };
    }

    if (field === 'email' && !emailRegex.test(value)) {
      return {
        ...acc,
        [field]: 'Cet email n\'est pas valide'
      };
    }

    return acc;
  }, {});
}

function showErrorMessages(form, errors) {
  for (const prop in errors) {
    const input = form.querySelector(`[name="${prop}"]`);

    input.classList.add('error');

    if (input.nextElementSibling) {
      input.nextElementSibling.textContent = errors[prop];
    }
  }
}
