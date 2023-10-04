let animationInterval;
let isAnimating = false;
let currentPosition = 0; 
let direction = 1; 
const step = 5; 
const container = document.getElementById("container");
const movingImage = document.getElementById("movingImage");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", toggleAnimation);
stopButton.addEventListener("click", stopAnimation);

function toggleAnimation() {
  if (!isAnimating) {
    startButton.disabled = true;
    stopButton.disabled = false;
    isAnimating = true;

    animationInterval = setInterval(function () {
      currentPosition += step * direction;

      if (currentPosition >= container.clientWidth) {
        direction = -1; 
        movingImage.style.transform = "scaleX(-1)"; 
      } else if (currentPosition <= -movingImage.clientWidth) {
        direction = 1; 
        movingImage.style.transform = "scaleX(1)"; 
      }

      movingImage.style.left = currentPosition + "px";
    }, 50);
  } else {
    stopAnimation();
  }
}

function stopAnimation() {
  startButton.disabled = false;
  stopButton.disabled = true;
  isAnimating = false;
  clearInterval(animationInterval);
}
