let asignText = '';
const email = document.querySelector('#email');
const emailContainer = email.parentNode;
function makeLowercase() {
  emailContainer.className = 'form-element';
  document.querySelector('small').innerHTML = '';
  const getEmail = email.value;
  if (getEmail !== '@') {
    asignText = getEmail.toLowerCase();
  }
}
document.querySelector('#email').addEventListener('input', makeLowercase);
function checkForm(e) {
  const getEmail = email.value;
  if (getEmail !== asignText) {
    e.preventDefault();
    emailContainer.className = 'form-element error';
    document.querySelector('small').innerHTML = 'Please type your email address in lowercase. ';
    email.value = asignText;
    return false;
  }
  emailContainer.className = 'form-element';
  document.querySelector('.form-element').className = 'form-element success';
  return true;
}

document.querySelector('#formulaire').addEventListener('submit', checkForm);