let counterValue = 0;
const inc = document.querySelector('[data-action="increment"]');
const dec = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

inc.addEventListener('click', () => {
    counterValue += Number(inc.textContent);
    span.textContent = String(counterValue);
});

dec.addEventListener('click', () => {
    counterValue += Number(dec.textContent);
    span.textContent = String(counterValue);
});
