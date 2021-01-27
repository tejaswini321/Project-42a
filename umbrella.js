class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image = loadImage("Walking_frame/walking_1.png");
        this.image.scale = 3;
        this.r = 250;
        this.body = Bodies.circle(x,y,this.r,options);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image,200,490,this.r,this.r);
    }
}