class Bax {
    constructor(x, y, width, height) {
      var options = {
          'restitution':2,
          'friction':4.2,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("violet");
      fill(200,0,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };