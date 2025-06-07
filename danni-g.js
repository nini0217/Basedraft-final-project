// danni - group code.js
var DecorateWheels = {
  drawWheel: function(c) {
    // 拆解参数
    var x = c.x;
    var y = c.y;
    var radius = c.radius;
    var cols = c.cols;
    var centerCol = c.centerCol;

    push();
    translate(x, y);
    noFill();

    // 用 for 循环替代 forEach
    for (var i = 0; i < cols.length; i++) {
      var col = cols[i];
      var layerR = radius - i * (radius / circleSystem.LAYERS);
      stroke(col);
      strokeWeight(2);
      ellipse(0, 0, layerR * 2);

      var numPoints = 36 + i * 6;
      for (var j = 0; j < numPoints; j++) {
        var ang = (TWO_PI / numPoints) * j;
        var px  = cos(ang) * layerR;
        var py  = sin(ang) * layerR;
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

  // 随机颜色
  randomColor: function() {
    return color(random(255), random(255), random(255));
  }
};