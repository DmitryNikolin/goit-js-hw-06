const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
let fontSize = String(Math.round(range.value)) + 'px';
span.style.fontSize = fontSize;

range.addEventListener('input', event => {
    fontSize = String(Math.round(event.currentTarget.value)) + 'px';
    span.style.fontSize = fontSize;
});
