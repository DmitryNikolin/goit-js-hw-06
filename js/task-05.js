let inputedName = 'Anonymous';
const inputString = document.querySelector('#name-input');
const spanString = document.querySelector('#name-output');

inputString.addEventListener('input', event => {
    inputedName = event.currentTarget.value;
    spanString.textContent = inputedName === '' ? 'Anonymous' : inputedName;
});
