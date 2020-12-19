class bin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.binObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.binObject);
        this.width=width;
        this.height=height;
    }

    display()
    {
        fill("red");
        noStroke();
        rectMode(CENTER);
        rect(this.binObject.position.x,this.binObject.position.y,this.width,this.height);

    }
}