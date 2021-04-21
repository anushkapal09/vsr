class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':0,
            'density':0.1,
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        push()
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.y,this.width,this.height)
        pop()
    }
}