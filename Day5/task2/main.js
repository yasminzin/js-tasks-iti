var prev = document.getElementById("prev");
var next = document.getElementById("next");
var play = document.getElementById("play");
var stop = document.getElementById("stop");

var images = document.images;

var playInterval = 1;

var i = 0;

// make display of all images >> none
// increase i which is 0 and image[0] is already displayed
// i becomes 1
// check if 1 is greater than or equal images.length (6) >> if yes return it to the first image (i=0)
// display image of i
// SAME STEPS in previous function but check if i is negative
function forImagesNext() {
  for (var j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }
  i++;
  if (i >= images.length) {
    i = 0;
  }
  console.log(`Image Number : ${i}`);
  images[i].style.display = "block";
}

function forImagePrevious() {
  for (var j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  console.log(`Image Number : ${i}`);
  images[i].style.display = "block";
}

function previousFunc() {
  forImagePrevious();
}

function nextFunc() {
  forImagesNext();
}

function playFunc() {
  if (playInterval == 1) {
    playInterval = setInterval(() => {
      forImagesNext();
    }, 3000);
  }
}

function stopFunc() {
  if (playInterval) {
    clearInterval(playInterval);
    playInterval = 1;
  }
}
