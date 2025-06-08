// danni-g.js — DecorateWheels Module

var DecorateWheels = {
  drawWheel: function(c) {
    var x = c.x;
    var y = c.y;
    var radius = c.radius;
    var cols = c.cols;
    var centerCol = c.centerCol;

    push();
    translate(x, y);
    noFill();

    for (var i = 0; i < cols.length; i++) {
      var col = cols[i];
      var layerR = radius - i * (radius / circleSystem.LAYERS);

      // Draw concentric ring
      stroke(col);
      strokeWeight(2);
      ellipse(0, 0, layerR * 2);

      // Radial dots with rotation
      var numPoints = 36 + i * 6;

      // If rotating: calculate angle offset for this layer
      let rotOffset = 0;
      if (c.layerRotSpeeds && c.layerRotSpeeds[i]) {
        rotOffset = c.layerRotSpeeds[i] * frameCount * 60; // rotation angle in radians
      }

      for (var j = 0; j < numPoints; j++) {
        var ang = (TWO_PI / numPoints) * j + rotOffset;
        var px  = cos(ang) * layerR;
        var py  = sin(ang) * layerR;

        noStroke();
        fill(col);
        ellipse(px, py, radius * 0.05); // radial dot
      }
    }

    // Draw central highlight circle
    stroke(centerCol);
    strokeWeight(radius * 0.05);
    ellipse(0, 0, radius * 0.5);

    pop();
  },

  // Generate random RGB color
  randomColor: function() {
    return color(random(255), random(255), random(255));
  }
};
