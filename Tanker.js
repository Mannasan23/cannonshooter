class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("crimson");
      rect(0, 0, this.width, this.height);
      pop();
      tanker.setImage("canonBall.png")
    };
}
