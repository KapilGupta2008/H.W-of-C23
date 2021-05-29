class Redzone
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:false
        }
        this.Redzone=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.Redzone);
    }
    display()
    {
      var red =this.Redzone.position;
      var angle= this.Redzone.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }

}