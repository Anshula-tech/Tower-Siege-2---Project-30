 
  class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("rgb(229, 204, 255)");
      //fill('rgb(76, 0, 153)')
      rect(pos.x, pos.y, this.width, this.height);
    }
  };