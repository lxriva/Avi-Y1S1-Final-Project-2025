function Particle(pos, velocity, size, colour) {

    this.pos = pos;
    this.velocity = velocity;
    this.size = size;
    this.colour = colour;
    this.age = 0; //used to track the lifetime of particles

    this.drawParticle = function () {
        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    this.updateParticle = function () {
        this.pos = this.pos.add(this.velocity);
        this.age++;
    }
}

function Emitter(xPos, yPos, xSpeed, ySpeed, size, colour) {

    this.pos = createVector(xPos, yPos);
    this.velocity = createVector(xSpeed, ySpeed);
    this.size = size;
    this.colour = colour;
    this.particles = []; //to store many particles

    this.startParticles = 0;
    this.lifetime = 0;

    this.startEmitter = function (startParticles, lifetime) {
        this.startParticles = startParticles;
        this.lifetime = lifetime;
        //start emmitter with inital particles
        for (var i = 0; i < this.startParticles; i++) {
            var p = this.createNewParticle();
            this.particles.push(p);
        }
    }


    this.createNewParticle = function () {
        var xPos = random(this.pos.x - 10, this.pos.x + 10);
        var yPos = random(this.pos.y - 10, this.pos.y + 10);
        var pos = createVector(xPos, yPos);

        var xVel = random(this.velocity.x - 1, this.velocity.x + 1);
        var yVel = random(this.velocity.y - 1, this.velocity.y + 1);
        var velocity = createVector(xVel, yVel);

        //establishing this.color
        var r = random(200, 255);
        var g = random(100, 125);
        var b = random(0, 0);
        var colour = color(r, g, b);

        var p = new Particle(pos, velocity, this.size, colour);
        return p;
    }

    this.drawAndUpdateParticles = function () { //updating new particles
        var deadParticleCount = 0;
        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].drawParticle();
            this.particles[i].updateParticle();

            if (this.particles[i].age > random(0, this.lifetime)) {
                this.particles.splice(i, 1); //remove the particle
                deadParticleCount++;
            }
        }

        for (var i = 0; i < deadParticleCount; i++) { //new particles to replace dead ones
            var p = this.createNewParticle();
            this.particles.push(p);
        }
    }
}
