const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);
console.log(' ');

for (const category of categories) {
    const group = [...category.children];

    for (const element of group) {
        if (element.tagName === 'H2') {
            console.log(`Category: ${element.textContent}`);
            break;
        }
    }

    for (const element of group) {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
            break;
        }
    }
    console.log(' ');
}
