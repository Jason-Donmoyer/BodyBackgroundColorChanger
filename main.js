// Set baody as a variable to be able to change its background color
const body = document.querySelector('body');

//  Grab the button and sve as a variable
const changeColorBtn = document.querySelector('.btn');

let colArr = [
  'red',
  'blue',
  'cyan'
]


// Add functionality to button
changeColorBtn.addEventListener('click', () => {
  changeColor();
});

// Function to choose a random RGB color and set the body's background to that color
const changeColor = () => {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${R},${G},${B})`;
}

// Set initial backgorund color to a random RGB value
body.style.backgroundColor = changeColor();