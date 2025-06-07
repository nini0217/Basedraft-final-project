//draw circle//
const circleSystem = {
    circles: [],  
    OUTER_SCALE: 0.8,  // scaling ratio of the outer ring//
    LAYERS: 5,         // layers of rings//
  
    generateCircles() {
      this.circles = [];
      const baseRadius = min(width, height) / 5;
      const radius     = baseRadius * this.OUTER_SCALE;
      const spacing    = radius * 2;            // tangent spacing//
      const theta      = radians(15);
      const a          = p5.Vector.fromAngle(theta).mult(spacing);
      const b          = p5.Vector.fromAngle(theta + HALF_PI).mult(spacing);
      const halfA      = a.copy().mult(0.5);     // offset for even-numbered rows//
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
                                  () => DecorateWheels.randomColor());
            let centerCol = DecorateWheels.randomColor();
            this.circles.push({ x: pos.x, y: pos.y, radius, cols, centerCol });
          }
        }
      }
      redraw();
    }
  };
  