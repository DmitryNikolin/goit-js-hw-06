const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.querySelector('#ingredients');
const itemsToAdd = [];

// for (const ingredient of ingredients) {
//     const item = document.createElement('li');

//     item.textContent = ingredient;
//     item.classList.add('item');
//     itemsToAdd.push(item);
// }

ingredients.forEach(ingredient => {
    const item = document.createElement('li');

    item.textContent = ingredient;
    item.classList.add('item');
    itemsToAdd.push(item);
});

list.append(...itemsToAdd);
