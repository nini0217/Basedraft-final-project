// regina-g.js
const circleSystem = {
  circles: [],
  OUTER_SCALE: 0.8, //outline ellipes radius ratio//
  LAYERS: 5, //number of layers//

  // Function to generate a grid of decorative circles//
  generateCircles: function() {
    this.circles = [];
    const baseRadius = min(width, height) / 5;
    const radius     = baseRadius * this.OUTER_SCALE;
    const spacing    = radius * 2;
    const rotationAngle      = radians(15);
    const a          = p5.Vector.fromAngle(rotationAngle).mult(spacing);  // Vector 'a' along skewed axis//
    const b          = p5.Vector.fromAngle(rotationAngle + HALF_PI).mult(spacing);  // Vector 'b' perpendicular to 'a'//
    const offset     = a.copy().mult(0.5);
    const centre     = createVector(width / 2, height / 2);
    const n          = ceil(max(width, height) / spacing) + 2;

    for (let i = -n; i <= n; i++) {
      for (let j = -n; j <= n; j++) {
        let pos = p5.Vector.mult(a, i)
                   .add(p5.Vector.mult(b, j))
                   .add(centre);
        if (j % 2 !== 0) {
          pos.add(offset);
        }


        // Only include circles that are within or just outside canvas bounds//
        if (
          pos.x > -spacing && pos.x < width + spacing &&
          pos.y > -spacing && pos.y < height + spacing
        ) {
          const cols = [];
          for (let k = 0; k < this.LAYERS; k++) {
            cols.push(DecorateWheels.randomColor());
          }
          const centerCol = DecorateWheels.randomColor();  // Generate a central color for the circle core//
          this.circles.push({
            x: pos.x,
            y: pos.y,
            radius: radius,
            cols: cols,
            centerCol: centerCol
          });
        }
      }
    }
    redraw();
  }
};