// Set baody as a variable to be able to change its background color
const body = document.querySelector('body');

//  Grab the button and sve as a variable
const changeColorBtn = document.querySelector('.change-button');

// Get span text
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');


// Add functionality to button
changeColorBtn.addEventListener('click', () => {
  changeColor();
});

// Function to choose a random RGB color and set the body's background to that color
// Set color name spans to the respective color value
const changeColor = () => {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${R},${G},${B})`;
  red.style.color = `rgb(${R}, 0, 0)`;
  green.style.color = `rgb(0, ${G}, 0)`;
  blue.style.color = `rgb(0, 0, ${B})`;
}

// Set initial backgorund and font colors to a random RGB value
body.style.backgroundColor = changeColor();