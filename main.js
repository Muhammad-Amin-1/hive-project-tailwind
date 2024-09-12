let phrases = [
    { text: 'шийла урбеч ца малахь дик вац хьо тахан!', image: './images/урбеч.png' },
    { text: 'бамбл', image: './images/бамбл 350мл-3.jpeg' },
    { text: 'айс кофе', image: './images/айс кофе .png' },
    { text: 'латте', image: './images/айс-латте-2.png' },
    { text: 'американо', image: './images/news-2.png' },
    { text: 'капучино', image: './images/news-1.png' },
]

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let title = document.querySelector('.title');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(title, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
})










// const btn = document.querySelector('.btn');
// const menu = document.querySelector('.menu');

// btn.addEventListener('click', ()=> {
//     menu.classList.toggle('menu--list')
// })
