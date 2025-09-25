const regForm = document.querySelector('.login-form');
regForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const emailValue = form.elements.email.value;
  const passValue = form.elements.password.value;

  if (emailValue === '' || passValue === '') {
    alert('All form fields must be filled in');
  }
  const objForm = {
    email: emailValue.trim(),
    password: passValue.trim(),
  };

  console.log(objForm);
  form.reset();
});
