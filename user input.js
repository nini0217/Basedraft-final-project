//user input-mouse ripple//
(function(){
    // save interactive expanding circles//
    const UserInput = {
      circles: [],
      updateAndDraw() {
        this.circles.forEach(c => {
          c.size += 10;
          stroke(0, 64, 128);
          strokeWeight(5);
          noFill();
          circle(c.x, c.y, c.size);
          circle(c.x, c.y, c.size * 0.75);
          circle(c.x, c.y, c.size * 0.5);
        });
        // clean up circles that are too large//
        this.circles = this.circles.filter(c => c.size < max(width, height) * 2);
        // stop animation if no circles left//
        if (this.circles.length === 0) noLoop();
      },
      mousePressed() {
        this.circles.push({ x: mouseX, y: mouseY, size: 0 });
        loop();
      }
    };
  
    // save and replace global setup//
    const _origDraw = window.draw;
    window.draw = function() {
      _origDraw && _origDraw();
      UserInput.updateAndDraw();
    };
  
    // save and replace global mousePressed//
    const _origMouse = window.mousePressed;
    window.mousePressed = function() {
      _origMouse && _origMouse();
      UserInput.mousePressed();
    };
  })();
  