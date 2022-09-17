let inputName = 'Anonymous';
const inputString = document.querySelector('#name-input');
const spanString = document.querySelector('#name-output');

inputString.addEventListener('input', event => {
    inputName = event.currentTarget.value;
    spanString.textContent = inputName === '' ? 'Anonymous' : inputName;
});
