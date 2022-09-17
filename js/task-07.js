const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
let fontSize = String(Math.round(range.value)) + 'px';
span.style.fontSize = fontSize;

range.addEventListener('input', even => {
    fontSize = String(Math.round(even.currentTarget.value)) + 'px';
    span.style.fontSize = fontSize;
});
