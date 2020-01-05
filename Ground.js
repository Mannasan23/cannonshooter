class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
  };

  display(){
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
  }
}
