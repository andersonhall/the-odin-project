const error = document.querySelector('.error');

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password-confirmation');

const form = document.querySelector('#form');

const inputs = [email, country, zip, password, password2];

inputs.forEach(input => {
  input.addEventListener('input', e => {
    checkValidity();
  });
});

const checkValidity = () => {
  error.innerHTML = '';
  if (!email.validity.valid) {
    error.innerHTML += `
      <p class='error-msg'>Please provide a valid email address.</p>
    `;
  }
  if (!country.validity.valid) {
    error.innerHTML += `
      <p class='error-msg'>Please enter at least 2 characters for country.</p>
    `;
  }
  if (!zip.validity.valid) {
    error.innerHTML += `
      <p class='error-msg'>Please enter a 5 digit number for Zip Code.</p>
    `;
  }
  if (!password.validity.valid) {
    error.innerHTML += `
      <p class='error-msg'>Password must be at least 7 characters long.</p>
    `;
  }
  if (password.value !== password2.value && password.value.length > 6) {
    error.innerHTML += `
    <p class='error-msg'>Passwords must match.</p>
  `;
  }
};

form.addEventListener('submit', e => {
  if (error.innerHTML !== '') {
    e.preventDefault();
  }
});
