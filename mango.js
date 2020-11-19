class Mango {
    constructor(x, y,r) {
      var options = {
          restitution:0,
          friction:0,
          isStatic:true,
          density:1.2
      }
      this.r=r
     this.x=x
     this.y=y
      this.body = Bodies.circle(this.x,this.y,this.r, options);
     
      this.image=loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      
      image(this.image,0, 0, 50, 50);
      pop();
    }
  };