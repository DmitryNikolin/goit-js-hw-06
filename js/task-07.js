const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
let fontSize = String(Math.round(parseFloat(range.value))) + 'px';
span.style.fontSize = fontSize;

range.addEventListener('input', even => {
  fontSize = String(Math.round(parseFloat(even.currentTarget.value))) + 'px';
  span.style.fontSize = fontSize;
});