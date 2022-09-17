function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

for (const div of controls.children) {
    if (div.tagName !== 'INPUT') continue;
    div.value = '1';
    break;
}

boxes.style.paddingTop = '10px';

function createBoxes(amount) {
    const boxesCreated = [];

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = String(30 + 10 * i) + 'px';
        box.style.height = String(30 + 10 * i) + 'px';
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '10px';
        box.style.boxShadow = '5px 5px 3px 2px rgba(0,0,0,0.3)';
        boxesCreated.push(box);
    }

    boxes.append(...boxesCreated);
}

function destroyBoxes() {
    const boxesDestroyed = [...boxes.children];
    for (const box of boxesDestroyed) box.remove();
}

btnCreate.addEventListener('click', () => {
    let amount = 0;

    for (const div of controls.children) {
        if (div.tagName !== 'INPUT') continue;
        amount = Number(div.value);
        break;
    }
    createBoxes(amount);
});

btnDestroy.addEventListener('click', () => {
    destroyBoxes();
});
