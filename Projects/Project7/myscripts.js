// JavaScript Document
function preloadImages() {
  var img1 = new Image();
  img1.src = "Images/logo.jpg";
  var img2 = new Image();
  img2.src = "Images/logo2.jpg";
}

function logoRollover() {
  document.getElementById('logo').src = 'Images/logo2.jpg';
}

function logoRollout() {
  document.getElementById('logo').src = 'Images/logo.jpg';
}
