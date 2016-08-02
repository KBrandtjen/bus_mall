'use strict';

var imageArray = [];

function picObject (picName, filePath) {
  this.picName = picName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  imageArray.push(this);
  //console.log(this);
}

new picObject('Baby Broom', 'img/sweep.jpg');//eslint-disable-line
new picObject('Octopus Tail USB', 'img/usb.jpg');//eslint-disable-line
new picObject('Wine Glass', 'img/wine_glass.jpg');//eslint-disable-line
new picObject('Watering Can', 'img/water_can.jpg');//eslint-disable-line
new picObject('Tauntaun', 'img/tauntaun.jpg');//eslint-disable-line
new picObject('Sleeping Shark Bag', 'img/shark.jpg');//eslint-disable-line
new picObject('Pizza Scissors', 'img/scissors.jpg');//eslint-disable-line
new picObject('Pet Sweeper', 'img/pet_sweep.jpg');//eslint-disable-line
new picObject('Pen Cap Utensils', 'img/pen.jpg');//eslint-disable-line
new picObject('Dragon Meat', 'img/dragon.jpg');//eslint-disable-line
new picObject('Dog Beak', 'img/dog_duck.jpg');//eslint-disable-line
new picObject('Cthulhu', 'img/cthulhu.jpg');//eslint-disable-line
new picObject('Chair', 'img/chair.jpg');//eslint-disable-line
new picObject('Meatball Bubblegum', 'img/bubblegum.jpg');//eslint-disable-line
new picObject('Breakfast Maker', 'img/breakfast.jpg');//eslint-disable-line
new picObject('Open-Toe Boots', 'img/boots.jpg');//eslint-disable-line
new picObject('Bathroom Caddy', 'img/bathroom.jpg');//eslint-disable-line
new picObject('Banana Slicer', 'img/banana.jpg');//eslint-disable-line
new picObject('R2D2 Bag', 'img/bag.jpg');//eslint-disable-line
new picObject('Unicorn Meat', 'img/unicorn.jpg');//eslint-disable-line


var getLeftPhoto = document.getElementById('leftPhoto');
var getCenterPhoto = document.getElementById('centerPhoto');
var getRightPhoto = document.getElementById('rightPhoto');


var randomLeft = function () {
  var leftNumber = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
  getLeftPhoto.src = imageArray[leftNumber].filePath;
  console.log(leftNumber);
};

// var randomCenter = function () {
//   var centerNumber = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
//   getCenterPhoto.src = imageArray[centerNumber].filePath;
//   console.log(centerNumber);
// };
//
// var randomRight = function() {
//   var rightNumber = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
//   getRightPhoto.src = imageArray[rightNumber].filePath;
//   console.log(rightNumber);
// };

randomLeft();
// randomCenter();
// randomRight();
