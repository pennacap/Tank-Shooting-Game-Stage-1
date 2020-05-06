class Rectangle {
    constructor(x, y, width, height, angle) {
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        Matter.Body.setAngle(this.body, angle);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
    }   
}