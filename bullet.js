function Bullet(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.age = 0;
    this.radius = 3;

    this.draw = function () {
        //bullet design
        fill("red");
        stroke(0);
        strokeWeight(1);
        rect(this.x, this.y - 24, this.radius * 10, 3);
    }

    //animation of bullet
    this.move = function () {
        this.x += this.speed;
        this.age++;
    }
}

function drawBullets() {
    //actually drawing the bullets
    for (var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].draw();
    }
}