const form = document.getElementById('form-contact');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msg = document.querySelector('.show-msg');

function validationEmail(e) {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    msg.style.display = 'block';
    msg.innerHTML = 'The email must be in lowercase';
  } else {
    const data = {
      name: inputName.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('contactData', JSON.stringify(data));
  }
}
form.addEventListener('submit', validationEmail);

const getData = JSON.parse(localStorage.getItem('contactData')) || {};
window.addEventListener('load', () => {
  if (Object.keys(getData).length) {
    inputName.value = getData.name;
    email.value = getData.email;
    message.value = getData.message;
  } else {
    inputName.value = '';
    email.value = '';
    message.value = '';
  }
});
