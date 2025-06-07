// canvasManager.js —— Canvas 管理模块
var CanvasManager = {
  setupCanvas: function() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  },
  resizeCanvas: function() {
    resizeCanvas(windowWidth, windowHeight);
  },
  clearBackground: function() {
    background('#000000');
  }
};

// p5.js 回调
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
  // 用 for 替代 forEach
  for (var i = 0; i < circleSystem.circles.length; i++) {
    var c = circleSystem.circles[i];
    DecorateWheels.drawWheel(c);
  }
}