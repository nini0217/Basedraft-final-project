// danni-g.js
const DecorateWheels = {
  drawWheel: function(c) {
    const x = c.x;
    const y = c.y;
    const radius = c.radius;
    const cols = c.cols;
    const centerCol = c.centerCol;

    push();
    translate(x, y);
    noFill();

    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
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
    }

    // central circle
    stroke(centerCol);
    strokeWeight(radius * 0.05);
    ellipse(0, 0, radius * 0.5);

    pop();
  },

  randomColor: function() {
    return color(random(255), random(255), random(255));
  }
};