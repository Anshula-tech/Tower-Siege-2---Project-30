class Player extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.Visiblity = 255;
    }
    display(){
      super.display();
      rect(this.body.position.x, this.body.position.y, this.width, this.height)  
    }
  }
