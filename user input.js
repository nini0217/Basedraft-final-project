/* userInput.js —— Person D: 无侵入式集成用户输入 —— */

(function(){
  // 存储用户交互的 expanding circles
  const UserInput = {
    circles: [],

    // 随机 RGB 颜色生成器
    randomColor() {
      return color(random(255), random(255), random(255));
    },

    updateAndDraw() {
      // 每帧更新并绘制
      this.circles.forEach(c => {
        c.size += 10;

        // 三层涟漪：依次用各自颜色绘制
        const sizes = [c.size, c.size * 0.75, c.size * 0.5];
        sizes.forEach((s, i) => {
          stroke(c.colors[i]);
          strokeWeight(5);
          noFill();
          circle(c.x, c.y, s);
        });
      });

      // 仅在 circle 完全移出画布后才移除
      this.circles = this.circles.filter(c => {
        const r = c.size / 2;
        const offLeft   = c.x + r < 0;
        const offRight  = c.x - r > width;
        const offTop    = c.y + r < 0;
        const offBottom = c.y - r > height;
        return !(offLeft || offRight || offTop || offBottom);
      });

      // 当没有任何圈时，停止 draw 循环
      if (this.circles.length === 0) {
        noLoop();
      }
    },

    mousePressed() {
      // 按下时添加新圈，并生成三种随机颜色
      const newColors = [
        this.randomColor(),
        this.randomColor(),
        this.randomColor()
      ];
      this.circles.push({ x: mouseX, y: mouseY, size: 0, colors: newColors });
      loop();
    }
  };

  // 保存并扩展全局 draw
  const _origDraw = window.draw;
  window.draw = function() {
    _origDraw && _origDraw();
    UserInput.updateAndDraw();
  };

  // 保存并扩展全局 mousePressed
  const _origMouse = window.mousePressed;
  window.mousePressed = function() {
    _origMouse && _origMouse();
    UserInput.mousePressed();
  };
})();
