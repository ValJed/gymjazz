const emailRegex = /^\S+@\S+\.[a-zA-Z]{2,}$/;

export default () => {
  apos.util.widgetPlayers.contact = {
    selector: '[data-contact]',
    player(el) {
      const form = el.querySelector('.contact-widget__form');
      const inputs = form.querySelectorAll('.contact-widget__input');
      const captchaInput = form.querySelector('[name="captcha"]');
      const messageEl = form.querySelector('.contact-widget__message');

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
          await apos.http.post('/api/v1/contact-widget/send-mail', {
            body: {
              ...formEntries,
              captchaRes: el.dataset.captcha
            }
          });

          messageEl.textContent = 'Message envoyé !';
          inputs.forEach((input) => {
            input.value = '';
          });
        } catch (err) {
          messageEl.classList.add('error');

          if (err.message === 'badcaptcha') {
            captchaInput.value = '';
            captchaInput.classList.add('error');
            captchaInput.focus();

            messageEl.textContent = 'Mauvais captcha !';
          } else {
            messageEl.textContent = 'Erreur lors de l\'envoi..';
          }
        } finally {
          setTimeout(() => {
            messageEl.textContent = '';
            messageEl.classList.remove('error');
          }, 3000);
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
