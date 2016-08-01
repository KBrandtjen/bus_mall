'use strict';

var imageArray = [];

function picObject (picName, filePath) {
  this.picName = picName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  imageArray.push(this);
}

new picObject('Baby Broom', 'img/sweep.jpg')
new picObject('Octopus Tail USB', 'img/usb.jpg')
new picObject('Wine Glass', 'img/wine_glass.jpg')
new picObject('Watering Can', 'img/water_can.jpg')
new picObject('Tauntaun', 'img/tauntaun.jpg')
new picObject('Sleeping Shark Bag', 'img/shark.jpg')
new picObject('Pizza Scissors', 'img/scissors.jpg')
new picObject('Pet Sweeper', 'img/pet_sweep.jpg')
new picObject('Pen Cap Utensils', 'img/pen.jpg')
new picObject('Dragon Meat', 'img/dragon.jpg')
new picObject('Dog Beak', 'img/dog_duck.jpg')
new picObject('Cthulhu', 'img/cthulhu.jpg')
new picObject('Chair', 'img/chair.jpg')
new picObject('Meatball Bubblegum', 'img/bubblegum.jpg')
new picObject('Breakfast Maker', 'img/breakfast.jpg')
new picObject('Open-Toe Boots', 'img/boots.jpg')
new picObject('Bathroom Caddy', 'img/bathroom.jpg')
new picObject('Banana Slicer', 'img/banana.jpg')
new picObject('R2D2 Bag', 'img/bag.jpg')

console.log(picObject);
