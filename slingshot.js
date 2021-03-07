class Slingshot {
    constructor(bodyA, pointB) {
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 50
        }

        this.pointB = pointB;

        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        if(this.sling.bodyA) {
            var bodyApos = this.sling.bodyA.position;
            var pointBpos = this.pointB;

            strokeWeight(5);
            line(bodyApos.x, bodyApos.y, pointBpos.x, pointBpos.y);
        }
    }
}