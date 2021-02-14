class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:1.2,
            friction:0.04
        }

        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
        World.add(world, this.image);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}