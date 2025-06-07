// userInput.js
// —— Person D: 用户输入与扩散圆模块 ——

const UserInputManager = {
    circleX: 0,
    circleY: 0,
    circleSize: 0,
    strokeColor: null,
  
    init() {
      // 初始位置置于画布中心
      this.circleX = width / 2;
      this.circleY = height / 2;
      this.circleSize = 0;
      this.strokeColor = color(0, 64, 128);
    },
  
    update() {
      // 每帧增加大小
      this.circleSize += 10;
    },
  
    render() {
      noFill();
      stroke(this.strokeColor);
      // 三重同心圆
      circle(this.circleX, this.circleY, this.circleSize);
      circle(this.circleX, this.circleY, this.circleSize * 0.75);
      circle(this.circleX, this.circleY, this.circleSize * 0.5);
    },
  
    handleMousePressed() {
      // 点击时重置位置与大小
      this.circleX = mouseX;
      this.circleY = mouseY;
      this.circleSize = 0;
    }
  };
  
  // p5 事件回调
  function mousePressed() {
    UserInputManager.handleMousePressed();
  }
  