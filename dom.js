// DOm
// 1. getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
// 2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading);
// 3. getElementByClassName
// const heading = document.getElementsByClassName('heading');
// console.log(heading);
// 4. querySelector
// const heading = document.querySelector('#heading');
// const heading = document.querySelector('.heading');
// console.log(heading);
// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// Traverse DOM
// 1. parentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);


// 2. ChildNodes
// const parent = document.querySelector('.parent');
// const result = parent.childNodes;
// console.log(result);

// 3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);

// 3. previousElementSibling
// const subHeading = document.querySelector('h2');
// console.log(subHeading.previousElementSibling);

// Manipulation
// const heading = document.querySelector('.heading');
// heading.innerHTML = 'My dream is move on canada!';
// heading.style.color = 'red';
// heading.style.fontSize = '25px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// creat element
// const heading = document.createElement('h1');
// heading.innerHTML = 'I love to learn new culture';
// heading.classList.add('addedclass');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'This is h3 tag';
// // parent.appendChild(subHeading);
// heading.insertAdjacentElement('beforebegin', subHeading)

// console.log(heading);

// const heading = document.querySelector('#heading');
// const button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//     button.style.color = 'red';
//     button.style.background = 'Green';
//     heading.style.fontSize = '50px';
// });


// const buttonBulb = document.querySelector('#buldSwitch');
// const bulb = document.querySelector('#bulb');

// buttonBulb.addEventListener('click', function() {
//     if(bulb.src.match('off')) {
//         bulb.src = './pic_bulbon.gif';
//         buttonBulb.innerHTML = 'Turn OFF';
//     }else {
//         bulb.src = './pic_bulboff.gif';
//         buttonBulb.innerHTML = 'Turn ON';
//     }
// })

// const root = document.querySelector('#root');
// const button = document.querySelector('button');


// function createItem(item) {
//     // card
//     const card = document.createElement('div');
//     card.classList.add('card');

//     // photo
//     const photo = document.createElement('img');
//     photo.src = item.thumbnailUrl;

//     // title
//     const title = document.createElement('h4');
//     title.innerHTML = item.title;

//     card.appendChild(photo);
//     card.appendChild(title);
//     root.appendChild(card);
// }

// function displayImages(items) {
//     items.forEach((item) => {
//         createItem(item);
//     });
//     // console.log(items);
// } 

// button.addEventListener('click', function() {
//     fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//     .then(res => res.json())
//     .then((items) => {
//         displayImages(items);
//     });
// });


const root = document.querySelector('#root');
const button = document.querySelector('button');

function createItem(item) {
    // card
    const card = document.createElement('div');
    card.classList.add('card');

    // photo
    const photo = document.createElement('img')
    photo.src = item.thumbnailUrl;

    // title
    const title = document.createElement('h4');
    title.innerHTML = item.title;

    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

function displayItems(items) {
    items.forEach((item) => {
        createItem(item);
    });
}

button.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then((items) => {
        displayItems(items);
    });
});