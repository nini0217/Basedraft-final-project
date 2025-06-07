/* userInput.js —— Person D: 无侵入式集成用户输入 —— */

(function(){
    // 存储用户交互的 expanding circles
    const UserInput = {
      circles: [],
      updateAndDraw() {
        this.circles.forEach(c => {
          c.size += 10;
          stroke(0, 64, 128);
          strokeWeight(5);
          noFill();
          circle(c.x, c.y, c.size);
          circle(c.x, c.y, c.size * 0.75);
          circle(c.x, c.y, c.size * 0.5);
        });
        // 清理超出画布的
        this.circles = this.circles.filter(c => c.size < max(width, height) * 2);
        // 没有内容时停止动画
        if (this.circles.length === 0) noLoop();
      },
      mousePressed() {
        this.circles.push({ x: mouseX, y: mouseY, size: 0 });
        loop();
      }
    };
  
    // 保存并替换全局 draw
    const _origDraw = window.draw;
    window.draw = function() {
      _origDraw && _origDraw();
      UserInput.updateAndDraw();
    };
  
    // 保存并替换全局 mousePressed
    const _origMouse = window.mousePressed;
    window.mousePressed = function() {
      _origMouse && _origMouse();
      UserInput.mousePressed();
    };
  })();
  