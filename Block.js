class Block{
    constructor(x, y, width, height) {
        var options = {

            
            friction :0.04,
            //isStatic:true

        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display(){
        console.log(this.body.speed);
        if(this.body.speed <7){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        tint(255,this.visibility);
        rect(this.body.position.x,this.body.position.y,20,40);
    
        pop();

      }
    }
} 