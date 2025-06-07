// danni - group code.js

const DecorateWheels = {
    // Draw a single wheel
    drawWheel({ x, y, radius, cols, centerCol }) {
      push();
      translate(x, y);
      noFill();
  
      cols.forEach((col, i) => {
        const layerR = radius - i * (radius / CircleManager.LAYERS);
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
  
      // central cricle
      stroke(centerCol);
      strokeWeight(radius * 0.05);
      ellipse(0, 0, radius * 0.5);
  
      pop();
    },
  
    // random color
    randomColor() {
      return color(random(255), random(255), random(255));
    }
  };
  