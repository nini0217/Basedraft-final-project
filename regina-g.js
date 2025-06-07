// circleManager.js
// —— Person B: Circle Generation 模块 —— 

const CircleManager = {
    circles: [],  
    OUTER_SCALE: 0.8,  // 最外层圆环缩小比例
    LAYERS: 5,         // 圆环层数
  
    generateCircles() {
      this.circles = [];
      const baseRadius = min(width, height) / 5;
      const radius     = baseRadius * this.OUTER_SCALE;
      const spacing    = radius * 2;            // 相切间距
      const theta      = radians(15);
      const a          = p5.Vector.fromAngle(theta).mult(spacing);
      const b          = p5.Vector.fromAngle(theta + HALF_PI).mult(spacing);
      const halfA      = a.copy().mult(0.5);     // 偶数行偏移
      const center     = createVector(width/2, height/2);
      const n          = ceil(max(width, height)/spacing) + 2;
  
      for (let i = -n; i <= n; i++) {
        for (let j = -n; j <= n; j++) {
          let pos = p5.Vector.mult(a, i)
                     .add(p5.Vector.mult(b, j))
                     .add(center);
          if (j % 2 !== 0) pos.add(halfA);
  
          if (
            pos.x > -spacing && pos.x < width + spacing &&
            pos.y > -spacing && pos.y < height + spacing
          ) {
            let cols = Array.from({length: this.LAYERS},
                                  () => RenderManager.randomColor());
            let centerCol = RenderManager.randomColor();
            this.circles.push({ x: pos.x, y: pos.y, radius, cols, centerCol });
          }
        }
      }
      redraw();
    }
  };
  