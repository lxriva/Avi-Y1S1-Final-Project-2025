function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.inc = 4;

    this.update = function () {
        this.currentX += this.inc;
        if (this.currentX > this.x + this.range) {
            this.inc = -4;
        }
        else if (this.currentX < this.x) {
            this.inc = 4;
        }
    }

    this.draw = function () {
        this.update();
        image(badGuyOne, this.currentX, this.y - 2, 80, 90)
    }

    this.checkContact = function (playerWorldX, playerY) {
        //define enemy hitbox
        let enemyWidth = 80;
        let enemyHeight = 90;

        //establishing enemy hitbox
        let enemyLeft = this.currentX - enemyWidth / 2;
        let enemyRight = this.currentX + enemyWidth / 2;
        let enemyTop = this.y - enemyHeight;
        let enemyBottom = this.y;

        //establishing player hitbox
        let playerWidth = 40;
        let playerHeight = 80;
        let playerLeft = playerWorldX - playerWidth / 2;
        let playerRight = playerWorldX + playerWidth / 2;
        let playerTop = playerY - playerHeight;
        let playerBottom = playerY;

        //player-enemy collision detection
        if (playerRight > enemyLeft &&
            playerLeft < enemyRight &&
            playerBottom > enemyTop &&
            playerTop < enemyBottom) {

            //loop to make sure that player-enemy collision is also detected for falling onto enemies
            if (Jumping && jumpVelocity > 0 &&
                Math.abs(playerBottom - enemyTop) < 20) {
                return false;
            }
            return true;
        }
        return false;
    }
}