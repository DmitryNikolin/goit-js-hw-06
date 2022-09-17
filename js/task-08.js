const loginForm = document.querySelector('.login-form');

const doneSubmit = event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '') {
        if (password.value === '') {
            alert('Ошибка! Поля Email и Password не заполнены!');
        } else {
            alert('Ошибка! Поле Email не заполнено!');
        }
    } else {
        if (password.value === '') {
            alert('Ошибка! Поле Password не заполнено!');
        }
    }

    console.log(`e-mail: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
};

loginForm.addEventListener('submit', doneSubmit);
