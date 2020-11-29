class Bob{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'restitution':1,
            'friction':0.2,
            'density':1.2   
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world, this.body);
    }
    
    display(){
    var bobPos=this.body.position;
    push();
    translate(bobPos.x, bobPos.y);
    rectMode(CENTER);
    fill(255,0,255);
    strokeWeight(3);
    ellipseMode(CENTER);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}