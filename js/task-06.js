const inputString = document.querySelector('#validation-input');
const inputStringLength = Number(inputString.dataset.length);

inputString.addEventListener('blur', event => {
    const currentLength = event.currentTarget.value.length;
    const currentClassList = event.currentTarget.classList;
    const validInputLength = currentClassList.contains('valid');
    const invalidInputLength = currentClassList.contains('invalid');

    if (currentLength === inputStringLength) {
        if (invalidInputLength) currentClassList.remove('invalid');
        if (!validInputLength) currentClassList.add('valid');
    } else {
        if (validInputLength) currentClassList.remove('valid');
        if (!invalidInputLength) currentClassList.add('invalid');
    }
});
