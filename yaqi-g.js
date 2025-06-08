// yaqi-g.js
const CanvasManager = {
  setupCanvas: function() {
    createCanvas(windowWidth, windowHeight);
   // noLoop();
  },
  resizeCanvas: function() {
    resizeCanvas(windowWidth, windowHeight);
  },
  clearBackground: function() {
    background('#000000');
  }
};

function setup() {
  CanvasManager.setupCanvas();
  circleSystem.generateCircles();
}

function windowResized() {
  CanvasManager.resizeCanvas();
  circleSystem.generateCircles();
}

function draw() {
  CanvasManager.clearBackground();
  for (let i = 0; i < circleSystem.circles.length; i++) {
    const c = circleSystem.circles[i];
    DecorateWheels.drawWheel(c);
  }
}