// circleSystem 模块
var circleSystem = {
  circles: [],
  OUTER_SCALE: 0.8,  // outer ring 缩放比例
  LAYERS: 5,         // 同心圆层数

  generateCircles: function() {
    this.circles = [];
    var baseRadius = min(width, height) / 5;
    var radius     = baseRadius * this.OUTER_SCALE;
    var spacing    = radius * 2;
    var theta      = radians(15);
    var a          = p5.Vector.fromAngle(theta).mult(spacing);
    var b          = p5.Vector.fromAngle(theta + HALF_PI).mult(spacing);
    var offset     = a.copy().mult(0.5);
    var centre     = createVector(width/2, height/2);
    var n          = ceil(max(width, height) / spacing) + 2;

    for (var i = -n; i <= n; i++) {
      for (var j = -n; j <= n; j++) {
        var pos = p5.Vector.mult(a, i)
                   .add(p5.Vector.mult(b, j))
                   .add(centre);
        if (j % 2 !== 0) {
          pos.add(offset);
        }

        if (
          pos.x > -spacing && pos.x < width + spacing &&
          pos.y > -spacing && pos.y < height + spacing
        ) {
          // 用经典 for 循环生成 cols 数组
          var cols = [];
          for (var k = 0; k < this.LAYERS; k++) {
            cols.push(DecorateWheels.randomColor());
          }
          var centerCol = DecorateWheels.randomColor();
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