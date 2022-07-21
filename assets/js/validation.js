function makeLowercase() {
  const getEmail = document.getElementById('email').value;
  document.querySelector('.form-element').className = 'form-element';
  if (getEmail !== '@') {
    const asignText = getEmail.toLowerCase();
    document.getElementById('email').value = asignText;
  }
}
document.querySelector('#email').addEventListener('input', makeLowercase);
document.querySelector('.form-element').className = 'form-element';
function checkForm() {
  const email = document.querySelector('#email').value;
  const lowEmail = email.toLowerCase();
  if (email === lowEmail) {
    document.querySelector('.form-element').className = 'form-element success';
    return true;
  }
  document.querySelector('small').innerHTML = 'Please type your email address in lowercase. ';
  document.querySelector('.form-element').className = 'form-element error';
  return false;
}

document.querySelector('#btn-submit').addEventListener('click', checkForm);