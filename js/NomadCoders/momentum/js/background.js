const images = ['forest1.jpg', 'forest2.png', 'forest3.jpg']

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${choosenImage}`;
document.body.appendChild(bgImage);