'use strict';

var imageArray = [];
var totalClicks = 0;

function picObject (picName, filePath) {
  this.picName = picName;
  this.filePath = filePath;
  this.clicks = 0;
  this.views = 0;
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

var randomNumberArray = [];
var previouslyShown = [];
//generating three random numbers
function randomNumberGenerator () {
  randomNumberArray = [];
  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));

  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));
  while (randomNumberArray[0] === randomNumberArray[1]){
    randomNumberArray[1] = (Math.floor(Math.random() * imageArray.length));
  }
  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));
  while (randomNumberArray[1] === randomNumberArray[2]){
    randomNumberArray[2] = (Math.floor(Math.random() * imageArray.length));
  }

  while (randomNumberArray[0] === previouslyShown[0] ||
        randomNumberArray[0] === previouslyShown[1] ||
        randomNumberArray[0] === previouslyShown[2] ||
        randomNumberArray[1] === previouslyShown[0] ||
        randomNumberArray[1] === previouslyShown[1] ||
        randomNumberArray[1] === previouslyShown[2] ||
        randomNumberArray[2] === previouslyShown[0] ||
        randomNumberArray[2] === previouslyShown[1] ||
        randomNumberArray[2] === previouslyShown[2]) {
    randomNumberArray[0] = (Math.floor(Math.random() * imageArray.length));
    randomNumberArray[1] = (Math.floor(Math.random() * imageArray.length));
    randomNumberArray[2] = (Math.floor(Math.random() * imageArray.length));
  }
}
//randomNumberGenerator();

//display three images
function displayThreeImages() {
// call 3 random numbers function
  randomNumberGenerator ();

  var getLeftPhoto = document.getElementById('leftPhoto');
  getLeftPhoto.src = imageArray[randomNumberArray[0]].filePath;
  getLeftPhoto.alt = imageArray[randomNumberArray[0]].picName;
  imageArray[randomNumberArray[0]].views += 1;
//console.log(imageArray[randomNumberArray[0]].picName + ' has ' + imageArray[randomNumberArray[0]].views += 1);
  var getCenterPhoto = document.getElementById('centerPhoto');
  getCenterPhoto.src = imageArray[randomNumberArray[1]].filePath;
  getCenterPhoto.alt = imageArray[randomNumberArray[1]].picName;
  imageArray[randomNumberArray[1]].views += 1;

  var getRightPhoto = document.getElementById('rightPhoto');
  getRightPhoto.src = imageArray[randomNumberArray[2]].filePath;
  getRightPhoto.alt = imageArray[randomNumberArray[2]].picName;
  imageArray[randomNumberArray[2]].views += 1;
}
//tally views
function tallyViews() {}

function handleClick(event) {

  if (event.target.id === 'photoSection') {
    alert('please click on photo');
    return;
  }

  for (var i = 0; i < imageArray.length; i++) {
    if(event.target.alt === imageArray[i].picName) {
      imageArray[i].clicks += 1;
      console.log(imageArray[i].picName + ' has ' + imageArray[i].clicks);
    }
  }

  totalClicks += 1;
  console.log('There have been ' + totalClicks + ' total clicks');

  if (totalClicks > 5) {
    photoSection.removeEventListener('click', handleClick);
    console.log('max number of clicks reached');
    resultsButton.hidden = false;
    return;
  }

  previouslyShown = randomNumberArray;
  displayThreeImages();
}

function handleResultsButton() {
  alert ('this is where you draw the chart');
}

//exectuing code below
displayThreeImages();

var photoSection = document.getElementById('photoSection');
photoSection.addEventListener('click', handleClick);

var resultsButton = document.getElementById('resultsButton');
resultsButton.addEventListener('click', handleResultsButton);


// var getLeftPhoto = document.getElementById('leftPhoto');
// var getCenterPhoto = document.getElementById('centerPhoto');
// var getRightPhoto = document.getElementById('rightPhoto');
// var clickSection = document.getElementById('photoSection');
//
// function randomNumberGenerator () {
//   var randLeftNumber = Math.floor(Math.random() * imageArray.length);
//   console.log(randLeftNumber);
//   var randCenterNumber = Math.floor(Math.random() * imageArray.length);
//   console.log(randCenterNumber);
//   var randRightNumber = Math.floor(Math.random() * imageArray.length);
//   console.log(randRightNumber);
// };
//
// randomNumberGenerator();
//
// randomNumberArray.push(randLeftNumber, randCenterNumber, randRightNumber);
//
//
// getLeftPhoto.src = imageArray[randomNumberArray[0]].filePath;
// getCenterPhoto.src = imageArray[randonNumberArray[1]].filePath;
// getRightPhoto.src = imageArray[randonNumberArray[2]].filePath;
//
// randomNumberArray.push(randomNumber, randomNumber1, randomNumber2);



//While for previously shown

// while (randomNumberArray[0] === previouslyShown[0] ||
//       randomNumberArray[0] === previouslyShown[1] ||
//       randomNumberArray[0] === previouslyShown[2] ||
//       randomNumberArray[1] === previouslyShown[0] ||
//       randomNumberArray[1] === previouslyShown[1] ||
//       randomNumberArray[1] === previouslyShown[2] ||
//       randomNumberArray[2] === previouslyShown[0] ||
//       randomNumberArray[2] === previouslyShown[1] ||
//       randomNumberArray[2] === previouslyShown[2]) {
//   randomNumberArray[0] = (Math.floor(Math.random() * imageArray.length));
//   randomNumberArray[1] = (Math.floor(Math.random() * imageArray.length));
//   randomNumberArray[2] = (Math.floor(Math.random() * imageArray.length));
// }
