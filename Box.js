class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255;
     
    }

    display(){
      if(this.body.speed<3){
        super.display();
        //console.log(this.body.speed);
       }
      
       else{
         World.remove(world, this.body);
        //  push();
        //  this.visibility-=5;
        //  tint(255, this.visibility);
        //  rectMode(CENTER);
        //  rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //  pop();
        }
     }
  
  };
  