// renderManager.js
// —— Person C: Rendering 模块 —— 

const RenderManager = {
    // 画单个“轮子”
    drawWheel({ x, y, radius, cols, centerCol }) {
      push();
      translate(x, y);
      noFill();
  
      cols.forEach((col, i) => {
        const layerR = radius - i * (radius / circleSystem.LAYERS);
        stroke(col);
        strokeWeight(2);
        ellipse(0, 0, layerR * 2);
  
        const numPoints = 36 + i * 6;
        for (let j = 0; j < numPoints; j++) {
          const ang = (TWO_PI / numPoints) * j;
          const px  = cos(ang) * layerR;
          const py  = sin(ang) * layerR;
          noStroke();
          fill(col);
          ellipse(px, py, radius * 0.05);
        }
      });
  
      // 中心小圈
      stroke(centerCol);
      strokeWeight(radius * 0.05);
      ellipse(0, 0, radius * 0.5);
  
      pop();
    },
  
    // 随机 RGB 颜色
    randomColor() {
      return color(random(255), random(255), random(255));
    }
  };
  