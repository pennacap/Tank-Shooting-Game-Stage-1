class Circe {
    constructor(x, y, radius) {
        this.body = Bodies.circle(x, y, radius, {isStatic: true});
        World.add(world, this.body);
        this.radius = radius        
    }
    display(){
        var pos = this.body.position;
        push();
        fill(0);
        circle(pos.x, pos.y, this.radius);
        pop();
    }
}