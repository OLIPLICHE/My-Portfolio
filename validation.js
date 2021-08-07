const form = document.getElementById('form-contact');
const email = document.getElementById('email');
const msg = document.querySelector('.show-msg');

function validationEmail(e) {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    msg.style.display = 'block';
    msg.innerHTML = 'The email must be in lowercase';
  }
}
form.addEventListener('submit', validationEmail);
