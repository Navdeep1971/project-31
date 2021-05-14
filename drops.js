class drops 
{
    constructor(x, y)
    {
    var options={
        isStatic:true,
        restitution :0,
        friction :0.1,
        }
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(this.x, this.y, options)
    World.add(world, this.body);
}
display()
{
    var dropsPos=this.body.position;
    if(this.drops.position.y > height)
    {
        Matter.Body.setPosition(this.rain, {x : RandomSource(0, 400), y : random(0, 400)});
    }
    var maxDrops = 100;

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }
}
}