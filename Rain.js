class drop {
    constructor(x,y){

      var option = {
        isStatic:false,
        friction:0.1
      }

      this.rain=Bodies.circle(x,y,5,option);
      this.radius = 5;
      World.add(world,this.rain);
    }

    update(){

        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});

        }

    }

    display(){

      var pos = this.rain.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);

    }
    
  }
  