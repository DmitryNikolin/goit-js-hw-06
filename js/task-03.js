const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const list = document.querySelector('.gallery');
let markup = '';

// for (const img of images) {
//     markup = images
//         .map(
//             img =>
//                 `<li class="gallery__item"><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`
//         )
//         .join('');
// }

images.forEach(img => {
    markup = images
        .map(
            img =>
                `<li class="gallery__item"><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`
        )
        .join('');
});

// set display

list.insertAdjacentHTML('afterbegin', markup);
list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.listStyle = 'none';
list.style.textDecoration = 'none';
list.style.padding = '0';

// set img properties

const imageProperties = document.querySelectorAll('.gallery__img');

imageProperties.forEach(img => {
    img.style.width = 'calc(100vw / 3 - 20px)';
    img.style.height = 'calc(calc(100vw / 3 - 20px) * 108 / 192)';
    img.style.objectFit = 'cover';
    img.style.boxShadow = '7px 7px 2px 2px rgba(0,0,0,0.3)';
    img.style.outline = '2px dashed yellow';
    img.style.border = '2px dotted blue';
});
