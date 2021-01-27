class Drop{
    constructor(x,y){
        var options={
            'restitution':0.1,
            'friction':0.0001
        }
        
        this.r = 7;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(rgb(21,1,221));
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

    update(){
        if(this.body.position.y> displayHeight){
             Matter.Body.setPosition(this.body,{x:random(0, 400), y:random(0, 400)})
        }
       
    }
}