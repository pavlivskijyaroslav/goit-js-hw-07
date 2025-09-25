const write = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

write.addEventListener('input', () => {
  const value = write.value.trim();
  if (value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
});
