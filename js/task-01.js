const categories = document.querySelectorAll('.item');

console.log(' ');
console.log(`Number of categories: ${categories.length}`);
console.log(' ');

// for (const category of categories) {
//   const group = [...category.children];

categories.forEach(category => {
    const group = [...category.children];

    // for (const element of group) {
    //   if (element.tagName === 'H2') {
    //     console.log(`Category: ${element.textContent}`);
    //     break;
    //   }
    // }

    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Elements: ${element.textContent}`);
        }
    });

    // for (const element of group) {
    //     if (element.tagName === 'UL') {
    //         console.log(`Elements: ${element.children.length}`);
    //         break;
    //     }
    // }

    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
    // }
});
