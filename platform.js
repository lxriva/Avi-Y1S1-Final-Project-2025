function Platform(x, y, length) {
    this.x = x;
    this.y = y;
    this.currentX = x;
    this.length = length;
    this.inc = 1;

    this.draw = function () {
        //platform design for playing1
        if (gameState === playing1) {
            stroke(50);
            strokeWeight(3);

            fill(160);
            rect(this.currentX, this.y, this.length, 20);

            stroke(60);
            strokeWeight(3);
            for (let i = 0; i < this.length; i += 10) {
                line(this.currentX + i, this.y, this.currentX + i + 10, this.y + 20);
            }

            noStroke();
        }

        //platform design for playing2
        else if (gameState === playing2) {
            stroke(0);
            strokeWeight(3);

            fill(139, 69, 19);
            rect(this.currentX, this.y, this.length, 20);

            stroke(0);
            strokeWeight(3);
            for (let i = 0; i < this.length; i += 10) {
                line(this.currentX + i, this.y, this.currentX + i + 10, this.y + 20);
            }

            noStroke();
        }
    }

    //animation to move around all platforms in playing1 and playing2
    this.move = function () {
        this.currentX += this.inc;
        if (this.currentX > this.x + 50) {
            this.inc = -1;
        }
        else if (this.currentX < this.x) {
            this.inc = 1;
        }
    }

    this.checkContact = function (playerWorldX, playerY) { //player-platform collision detection
        if (playerWorldX + 10 > this.currentX && playerWorldX - 10 < this.currentX + this.length) {
            var d = this.y - (playerY + 40);
            if (d >= -5 && d < 10) {
                return this.inc;
            }
        }
        return 0;
    };
}
