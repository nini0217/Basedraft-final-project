// canvasManager.js
// —— Person A: Canvas Manager 模块 —— 

const CanvasManager = {
  setupCanvas() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  },
  resizeCanvas() {
    resizeCanvas(windowWidth, windowHeight);
  },
  clearBackground() {
    background('#000000');
  }
};

// p5.js 回调，调用其它两位同学的模块
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
  CircleManager.circles.forEach(c => DecorateWheels.drawWheel(c));
}
