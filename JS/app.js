'use strict';

// var imageArray = [];
var totalClicks = 0;
var picNameArray = [];
var clickArray = [];
var busMallChart;

function PicObject (picName, filePath) {
  this.picName = picName;
  this.filePath = filePath;
  this.clicks = 0;
  this.views = 0;
  imageArray.push(this);
}

function newObjects () {
  new PicObject('Baby Broom', 'img/sweep.jpg');
  new PicObject('Octopus Tail USB', 'img/usb.jpg');
  new PicObject('Wine Glass', 'img/wine_glass.jpg');
  new PicObject('Watering Can', 'img/water_can.jpg');
  new PicObject('Tauntaun', 'img/tauntaun.jpg');
  new PicObject('Sleeping Shark Bag', 'img/shark.jpg');
  new PicObject('Pizza Scissors', 'img/scissors.jpg');
  new PicObject('Pet Sweeper', 'img/pet_sweep.jpg');
  new PicObject('Pen Cap Utensils', 'img/pen.jpg');
  new PicObject('Dragon Meat', 'img/dragon.jpg');
  new PicObject('Dog Beak', 'img/dog_duck.jpg');
  new PicObject('Cthulhu', 'img/cthulhu.jpg');
  new PicObject('Chair', 'img/chair.jpg');
  new PicObject('Meatball Bubblegum', 'img/bubblegum.jpg');
  new PicObject('Breakfast Maker', 'img/breakfast.jpg');
  new PicObject('Open-Toe Boots', 'img/boots.jpg');
  new PicObject('Bathroom Caddy', 'img/bathroom.jpg');
  new PicObject('Banana Slicer', 'img/banana.jpg');
  new PicObject('R2D2 Bag', 'img/bag.jpg');
  new PicObject('Unicorn Meat', 'img/unicorn.jpg');
}

var randomNumberArray = [];
var previouslyShown = [];
console.log(previouslyShown);
//generating three random numbers
function randomNumberGenerator () {
  randomNumberArray = [];
  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));

  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));
  while (randomNumberArray[0] === randomNumberArray[1]){
    randomNumberArray[1] = (Math.floor(Math.random() * imageArray.length));
  }
  randomNumberArray.push(Math.floor(Math.random() * imageArray.length));
  while (randomNumberArray[1] === randomNumberArray[2] || (randomNumberArray[0] === randomNumberArray[2])){
    randomNumberArray[2] = (Math.floor(Math.random() * imageArray.length));
  }
  //cannot equal any previous numbers or same number in sequence
  while (randomNumberArray[0] === previouslyShown[0] ||
        randomNumberArray[0] === previouslyShown[1] ||
        randomNumberArray[0] === previouslyShown[2] ||
        randomNumberArray[1] === previouslyShown[0] ||
        randomNumberArray[1] === previouslyShown[1] ||
        randomNumberArray[1] === previouslyShown[2] ||
        randomNumberArray[2] === previouslyShown[0] ||
        randomNumberArray[2] === previouslyShown[1] ||
        randomNumberArray[2] === previouslyShown[2] ||
        randomNumberArray[0] === randomNumberArray[1] ||
        randomNumberArray[1] === randomNumberArray[2] ||
        randomNumberArray[0] === randomNumberArray[2]) {
    randomNumberArray[0] = (Math.floor(Math.random() * imageArray.length));
    randomNumberArray[1] = (Math.floor(Math.random() * imageArray.length));
    randomNumberArray[2] = (Math.floor(Math.random() * imageArray.length));
  }
  //console.log(randomNumberArray + 'are the current indexes');
}


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
//function tallyViews() {}

function handleClick(event) {

  if (event.target.id === 'photoSection') {
    alert('please click on photo');
    return;
  }

  for (var i = 0; i < imageArray.length; i++) {
    if(event.target.alt === imageArray[i].picName) {
      imageArray[i].clicks += 1;
      localStorage.setItem('storeImageArray',JSON.stringify(imageArray));
      console.log(imageArray[i].picName + ' has ' + imageArray[i].clicks);
    }
  }

  totalClicks += 1;
  console.log('There have been ' + totalClicks + ' total clicks');

  if (totalClicks > 24) {
    photoSection.removeEventListener('click', handleClick);
    console.log('max number of clicks reached');
    resultsButton.hidden = false;
    for (var j = 0; j < imageArray.length; j++) {
      picNameArray.push(imageArray[j].picName);
      clickArray.push(imageArray[j].clicks);
    }
    return;
  }

  previouslyShown = randomNumberArray;
  displayThreeImages();
}

function handleResultsButton() {
  drawChart();
}

//exectuing code below

// If
if (localStorage.storeImageArray) {
  var imageArray = JSON.parse(localStorage.getItem('storeImageArray'));
  console.log('There is stuff in local storage');
}
else {
  var imageArray = [];
  newObjects();
  console.log('local storage is empty');
}
displayThreeImages();

var photoSection = document.getElementById('photoSection');
photoSection.addEventListener('click', handleClick);

var resultsButton = document.getElementById('resultsButton');
resultsButton.addEventListener('click', handleResultsButton);

var data = {
  labels: picNameArray, // titles array we declared earlier
  datasets: [
    {
      data: clickArray, // votes array we declared earlier
      backgroundColor: [
        'navy',
        '#C73E1D',
        '#2E86AB',
        '#A23B72',
        '#F18F01',
        '#3B1F2B',
        '#8E4A49',
        '#7DAA92',
        '#F71735',
        '#8E4A49',
        '#FEB95F',
        '#FBBFCA',
        '#698F3F',
        '#4B1D3F',
        '#0E7C7B',
        '#A39BA8',
        '#272D2D',
        '#89043D',
        '#847577',
        '#248232'
      ],
      hoverBackgroundColor: [
        'grey'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('chart').getContext('2d');
  busMallChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsiveness: false
    }
  });
};
