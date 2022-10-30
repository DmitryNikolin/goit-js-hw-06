const loginForm = document.querySelector('.login-form');

const doneSubmit = event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '') {
        if (password.value === '') {
            alert('Error! Fields Email and Password not filled!');
        } else {
            alert('Error! Field Email not filled!');
        }
    } else {
        if (password.value === '') {
            alert('Error! Field Password not filled!');
        } else {
            // console.log(`e-mail: ${email.value}, password: ${password.value}`);
            const loginFields = {
                email: email.value,
                password: password.value,
            };
            console.log(loginFields);
        }
    }
    event.currentTarget.reset();
};

loginForm.addEventListener('submit', doneSubmit);
