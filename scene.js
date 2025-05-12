function setupScene() {
    vertexfloorX = 35;
    vertexfloorY = floorY + 50;

    clouds = [{ pos_x: random(10, width), pos_y: random(20, 70), size: random(40, 70) }, //index 0
    { pos_x: random(10, 100), pos_y: random(70, 120), size: random(40, 70) }, //index 1
    { pos_x: random(100, width), pos_y: random(120, 190), size: random(40, 70) }, //index 2
    { pos_x: random(200, 300), pos_y: random(190, 260), size: random(40, 70) }, //index 3
    { pos_x: random(10, width), pos_y: random(70, 120), size: random(40, 70) }, //index 4
    { pos_x: random(400, 500), pos_y: random(120, 190), size: random(40, 70) }, //index 5
    { pos_x: random(500, 600), pos_y: random(190, 260), size: random(40, 70) }]; //index 6

    clouds2 = [{ pos_x: random(10, width), pos_y: random(20, 70), size: random(40, 70) }, //index 0
    { pos_x: random(10, 100), pos_y: random(70, 120), size: random(40, 70) }, //index 1
    { pos_x: random(100, width), pos_y: random(120, 190), size: random(40, 70) }, //index 2
    { pos_x: random(200, 300), pos_y: random(190, 260), size: random(40, 70) }, //index 3
    { pos_x: random(10, width), pos_y: random(70, 120), size: random(40, 70) }, //index 4
    { pos_x: random(400, 500), pos_y: random(120, 190), size: random(40, 70) }, //index 5
    { pos_x: random(500, 600), pos_y: random(190, 260), size: random(40, 70) }]; //index 6

    mountains = [{ pos_x: 500, pos_y: 285, width: 250, height: 290 }, //index 0
    { pos_x: 605, pos_y: 330, width: 150, height: 200 }, //index 1
    { pos_x: 370, pos_y: 400, width: 120, height: 170 }]; //index 2

    trees = [{ pos_x: 970, pos_y: 400, width: 30, height: 91, leafSize: 100 }, //index 0
    { pos_x: 860, pos_y: 400, width: 30, height: 91, leafSize: 100 }, //index 1
    { pos_x: 750, pos_y: 400, width: 30, height: 91, leafSize: 100 }, //index 2
    { pos_x: 50, pos_y: 400, width: 30, height: 91, leafSize: 100 }]; //index3

    canyons = [{ pos_x: 70, pos_y: floorY, width: 80, height: 145 }];

    coins = [{ pos_x: 460, pos_y: floorY - 20, coinSize: 30, isCollected: false }];
    coinCounterX = 925;
    coinCounterY = 567;
    count = 0;

    for (var i = 0; i < 100; i++) {
        stars[i] = new star();
    }

    flagpole = { pos_x: 1800, width: 30, isReached: false };
}

function drawFloor() {
    rect(0, floorY, width, 300);
    fill(34, 139, 34);
}

function drawFloorDesign() {
    noStroke(0);
    beginShape();
    vertex(0, floorY);
    vertex(0, vertexfloorY);
    for (var i = 0; i < 10000; i++) {
        if (i % 2 == 1) {
            vertex(vertexfloorX * i, floorY)
        }
        if (i % 2 == 0) {
            vertex(vertexfloorX * i, vertexfloorY)
        }
    }
    endShape(CLOSE);
}

function animateClouds() {
    for (let i = 0; i <= 6; i++) {
        clouds[i].pos_x += 1;

        if (clouds[i].pos_x >= 2000) {
            clouds[i].pos_x = 0;
            clouds[i].pos_x += 1;
        }
    }
    for (let i = 0; i <= 6; i++) {
        if (clouds[1].pos_x >= 1000) {
            drawClouds2();
            clouds2[i].pos_x += 1;
        }
        if (clouds2[i].pos_x >= 3000) {
            clouds2[i].pos_x = 0;
            clouds2[i].pos_x += 1;
        }
    }
}

function drawClouds() {
    for (let i = 0; i <= 6; i++) {
        drawCloud(clouds[i]);
    }
}

function drawClouds2() {
    for (let i = 0; i <= 6; i++) {
        drawCloud(clouds2[i]);
    }
}


function drawCloud(t_cloud2) {
    //fill cloud
    fill(240, 248, 255);

    //actual cloud
    ellipse(t_cloud2.pos_x, t_cloud2.pos_y, t_cloud2.size * 1.2, t_cloud2.size * 1.2);
    ellipse(t_cloud2.pos_x - 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);
    ellipse(t_cloud2.pos_x + 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);

    //anchor point
    fill(255, 0, 0);
    ellipse(t_cloud2.pos_x, t_cloud2.pos_y, 10, 10);

}


function drawStars() {
    stroke(255);
    for (var i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].display();
    }
}

function star() {
    this.x = random(0, 2000);
    this.y = random(0, floorY);

    this.display = function () {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 3, 3);
    };
    this.move = function () {
        this.x = this.x + random(-0.18, 0.18);
        this.y = this.y + random(0, 0);
    }

}

function drawMountains() {
    for (let i = 0; i <= 2; i++) {
        drawMountain(mountains[i]);
        drawMountain2(mountains[i]);
    }
}

function drawMountain(t_mountain) {
    //fill mountain
    fill(139, 69, 19);

    //actual mountain
    var m_x1 = t_mountain.pos_x - t_mountain.width / 2;
    var m_y1 = floorY;
    var m_x2 = t_mountain.pos_x;
    var m_y2 = floorY - t_mountain.height;
    var m_x3 = t_mountain.pos_x + t_mountain.width / 2;
    var m_y3 = floorY;
    triangle(m_x1, m_y1, m_x2, m_y2, m_x3, m_y3);

    //anchor point
    fill(255, 0, 0);
    ellipse(t_mountain.pos_x, t_mountain.pos_y, 10, 10);
}

function drawMountain2(t_mountain) {
    //translate
    push();
    translate(1000, 0)
    //fill mountain
    fill(139, 69, 19);

    //actual mountain
    var m_x1 = t_mountain.pos_x - t_mountain.width / 2;
    var m_y1 = floorY;
    var m_x2 = t_mountain.pos_x;
    var m_y2 = floorY - t_mountain.height;
    var m_x3 = t_mountain.pos_x + t_mountain.width / 2;
    var m_y3 = floorY;
    triangle(m_x1, m_y1, m_x2, m_y2, m_x3, m_y3);

    pop();

    //anchor point 2
    fill(255, 0, 0);
    ellipse(t_mountain.pos_x, t_mountain.pos_y, 10, 10);
}

function drawTrees() {
    for (let i = 0; i <= 3; i++) {
        drawTree(trees[i]);
    }

}

function drawTree(t_tree) {
    //fill tree bark
    fill(139, 69, 19);

    //actual tree bark
    var t_x = t_tree.pos_x - t_tree.width / 2;
    var t_y = floorY - t_tree.height;
    rect(t_x, t_y, t_tree.width, t_tree.height);

    //fill tree leaves
    fill(34, 139, 34)

    //actual tree leaves
    ellipse(t_tree.pos_x, floorY - t_tree.height, t_tree.leafSize, t_tree.leafSize)

    //anchor point for tree
    fill(255, 0, 0);
    ellipse(t_tree.pos_x, t_tree.pos_y, 10, 10);
}

function drawCanyons() {
    for (let i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
    }
}

function drawCanyon(t_canyon) {
    //fill canyon
    fill(0, 0, 0);

    //actual canyon
    rect(t_canyon.pos_x, t_canyon.pos_y, t_canyon.width, t_canyon.height);

    //canyon anchor point
    fill(255, 0, 0);
    ellipse(t_canyon.pos_x, t_canyon.pos_y, 10, 10);
}

function checkCanyonCollision() {
    Falling = false; //Reset falling state
    for (i = 0; i < canyons.length; i++) {
        let canyon = canyons[i];
        if (playerWorldX > canyon.pos_x && playerWorldX < canyon.pos_x + canyon.width && playerY == floorY - 40) {
            Falling = true;
            break;
        }

    }
}

function drawCoins() {
    for (let coin of coins) {
        if (!coin.isCollected) {
            drawCoin(coin);
        }
    }
}

function drawCoin(coin) {
    //fill main body of X-Coin
    fill(255, 215, 0); //Gold #FFD700 fill for coin
    stroke(218, 165, 32) //Goldenrod #DAA520 stroke for coin
    strokeWeight(4)

    //actual main body of X-coin
    ellipse(coin.pos_x, coin.pos_y, coin.coinSize, coin.coinSize);

    //fill and stroke for X lines on X-Coin
    fill(218, 165, 32);

    //actual X lines on X-Coin
    line(coin.pos_x + 10, coin.pos_y - 11, coin.pos_x - 10, coin.pos_y + 11);
    line(coin.pos_x - 10, coin.pos_y - 11, coin.pos_x + 10, coin.pos_y + 11);

    //anchor point for X-Coin
    fill(255, 0, 0);
    noStroke();
    ellipse(coin.pos_x, coin.pos_y, 10, 10);
}

function checkXCoinCollection() {
    for (let coin of coins) {
        let d = dist(playerWorldX, playerY, coin.pos_x, coin.pos_y);
        if (d < 40 && !coin.isCollected) {
            coin.isCollected = true;
            count += 1;
            collectSound.play();
        }
    }
}

function drawFlagpole() { //need to refine design
    fill(125);
    rect(flagpole.pos_x, floorY - 400, 30, 400);
    fill(100);
    if (flagpole.isReached == false) {
        //flag up
        rect(flagpole.pos_x, floorY - 400, 100, 50);
    }
    else {
        //flag down
        rect(flagpole.pos_x, floorY - 50, 100, 50);
    }
}

function checkIfFlagpoleIsReached() {
    if (playerWorldX > flagpole.pos_x && playerWorldX < flagpole.pos_x + flagpole.width && playerY == floorY - 40) {
        flagpole.isReached = true;
        gameOver = true;
        drawGameOver;
    }
}

function checkIfPlayerIsDead() {
    if (inCanyon) {
        lives = lives - 1;
    }
    if (lives > 0) {
        init();
    }
    else {
        gameOver = true;
        drawGameOver();
    }
}

function drawLifeTokens() {
    fill(750);
    for (var i = 0; i < lives; i++) {
        rect(40 * i + 900, 10, 30, 30);
    }
}

function drawGameOver() {
    if (gameOver) {
        if (lives > 0) {
            fill(750);
            textSize(100);
            text("GAME OVER! YOU WIN!", 200, height / 2);
        }
        else {
            fill(750);
            textSize(100);
            text("OH NO! YOU LOSE!", 200, height / 2);
        }
    }
}

function Particle(pos, velocity, size, colour) {
    this.pos = pos;
    this.velocity = velocity;
    this.size = size;
    this.colour = colour;
    this.age = 0; //to track lifetime

    this.drawParticle = function () {
        fill(this.colour);
        ellipae(this.pos.x, this.pos.y, this.size);
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

        //start emitter with initial particles
        for (var i = 0; i < startParticles; i++) {
            var xPos = random(this.pos.x - 10, this.pos.x + 10);
            var yPos = random(this.pos.y - 10, this.pos.y + 10);
            var pos = createVector(xPos, yPos);

            var xVel = random(this.velocity.x - 1, this.velocity.x + 1);
            var yVel = random(this.velocity.y - 1, this.velocity.y + 1);
            var velocity = createVector(xVel, yVel);

            var p = new Particle(this.pos, this.velocty, this.size, this.colour);
            this.particles.push(p);
        }
    }
    this.drawAndUpdateParticles = function () {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].drawParticle();
            this.particles[i].updateParticle();
        }
    }
}

function drawFire() {
    var d = dist(playerWorldX, floorY, emitter.pos.x, emitter.pos.y);
    if (d < width) {
        emitter.drawAndUpdateParticles();
    }
}

function checkIfPlayerIsBurning() { //work in progress
    if (playerWorldX > emitter.pos.x - 10 && playerWorldX < emitter.pos_x + 10 && playerY == floorY) {
        playerIsBurning = true;
        lives = lives - 1;
    }
}