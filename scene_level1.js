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

    canyons = [{ pos_x: 70, pos_y: floorY, width: 110, height: 145 },
    { pos_x: 1250, pos_y: floorY, width: 110, height: 145 }];

    coins = [{ pos_x: 120, pos_y: 330, coinSize: 30, isCollected: false },
    { pos_x: 1120, pos_y: 183, coinSize: 30, isCollected: false }];
    coinCounterX = 925;
    coinCounterY = 567;
    count = 0;

    for (var i = 0; i < 100; i++) {
        stars[i] = new star();
    }

    flagpole = { pos_x: 2000, width: 25, isReached: false };

    platforms = [];
    platforms.push(createPlatform(70, floorY - 100, 100));
    platforms.push(createPlatform(200, floorY - 200, 100));
    platforms.push(createPlatform(470, floorY - 200, 100));
    platforms.push(createPlatform(800, floorY - 300, 100));
    platforms.push(createPlatform(1070, floorY - 250, 100));
    platforms.push(createPlatform(1400, floorY - 300, 200));
    platforms.push(createPlatform(1300, floorY - 100, 100));
    platforms.push(createPlatform(1500, floorY - 150, 100));
}

function createPlatform(x, y, length) {
    return new Platform(x, y, length);
}

function drawFloor() {
    noStroke(); //saddleBrown #8B4513 floor
    fill(139, 69, 19);
    rect(0, floorY, width, 300);
    fill(34, 139, 34);

}

function drawFloorDesign() {
    noStroke(0);
    beginShape();
    vertex(-200, floorY);
    vertex(-200, vertexfloorY);
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

function drawMoon() {
    fill(255, 255, 255);
    stroke(192, 192, 192);
    strokeWeight(3);
    ellipse(0, 0, 250, 250);
}

function animateClouds() {
    for (let i = 0; i <= 6; i++) {
        clouds[i].pos_x += 1;

        if (clouds[i].pos_x >= 2000) {
            clouds[i].pos_x = 0;
            clouds[i].pos_x += 1;
        }
    }
    //to always have clouds on the screen
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
    //first set of clouds
    for (let i = 0; i <= 6; i++) {
        drawCloud(clouds[i]);
    }
}

function drawClouds2() {
    //second set of clouds
    for (let i = 0; i <= 6; i++) {
        drawCloud(clouds2[i]);
    }
}


function drawCloud(t_cloud2) {
    //fill cloud
    fill(240, 248, 255);

    //actual cloud
    ellipse(t_cloud2.pos_x - 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);
    ellipse(t_cloud2.pos_x + 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);
    ellipse(t_cloud2.pos_x, t_cloud2.pos_y, t_cloud2.size * 1.2, t_cloud2.size * 1.2);

    //anchor point
    fill(255, 0, 0);
    ellipse(t_cloud2.pos_x, t_cloud2.pos_y, 10, 10);
}


function drawStars() {
    //drawing multiple stars
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
        drawMountain2(mountains[i]); //mountains in the scrollable world's second half
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
    //translate 2nd mountain
    push();
    translate(1000, 0)

    //fill mountain 2
    fill(139, 69, 19);

    //actual mountain 2
    var m_x1 = t_mountain.pos_x - t_mountain.width / 2;
    var m_y1 = floorY;
    var m_x2 = t_mountain.pos_x;
    var m_y2 = floorY - t_mountain.height;
    var m_x3 = t_mountain.pos_x + t_mountain.width / 2;
    var m_y3 = floorY;
    triangle(m_x1, m_y1, m_x2, m_y2, m_x3, m_y3);

    //anchor point 2
    fill(255, 0, 0);
    ellipse(t_mountain.pos_x, t_mountain.pos_y, 10, 10);

    pop(); //pop for mountain2
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
    //draw multiple canyons
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
    Falling = false; //reset falling state
    for (i = 0; i < canyons.length; i++) {
        let canyon = canyons[i];
        if (playerWorldX > canyon.pos_x && playerWorldX < canyon.pos_x + canyon.width && playerY == floorY - 40) {
            Falling = true;
            break;
        }

    }
}

function drawCoins() {
    //draw multiple coins for player to be able to collect
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
        let d = dist(playerWorldX, playerY, coin.pos_x, coin.pos_y); //collision detection for coin
        if (d < 40 && !coin.isCollected) {
            coin.isCollected = true;
            count += 1;
            collectSound.play();
        }
    }
}

function drawFlagpole() {
    fill(139, 69, 19);
    rect(flagpole.pos_x, floorY - 200, 30, 200);
    fill(255, 0, 0);
    if (flagpole.isReached == false) {
        //flag up drawing
        rect(flagpole.pos_x, floorY - 200, 100, 40);
    }
    else {
        //flag down drawing
        rect(flagpole.pos_x, floorY, 100, 40);
    }
}

function checkIfFlagpoleIsReached() {
    if (playerWorldX > flagpole.pos_x && playerWorldX < flagpole.pos_x + flagpole.width && playerY == floorY - 40) { //flagpole collision detection
        flagpole.isReached = true;
        flagSound.play();
        gameOver = true;
    }
}

function checkIfPlayerIsDead() {
    if ((inCanyon || hitByEnemy || playerIsBurning) && (gameState === playing1 || gameState === playing2)) {
        //-1 life when player dies
        lives--;

        bulletRemoved = true; //reset bullet state to prevent unintended rapid fire

        //reset death-related flags
        hitByEnemy = false;
        playerIsBurning = false;

        if (lives > 0) {
            bullets = []; //clear bullets on screen when player dies
            if (gameState === playing1) {
                init1();
            } else if (gameState === playing2) {
                init2();
            }
        } else {
            gameOver = true;
            bullets = []; //also clear bullets on screen when gameOver
            drawGameOver();
        }
    }
}

function drawLifeTokens() {
    fill(130);
    for (var i = 0; i < lives; i++) {
        let x = 40 * i + 900;
        let y = 10;
        let size = 30;

        //draw base red square for X-Men logo
        stroke(0, 0, 0);
        strokeWeight(4);
        fill(255, 0, 0);
        rect(x, y, size, size);

        //draw black X on top
        stroke(0, 0, 0);
        strokeWeight(4);
        line(x, y, x + size, y + size);
        line(x + size, y, x, y + size);
        noStroke();
    }
}

function drawGameOver() {
    background(135, 206, 235); //skyblue #87CEEB background

    //title floor drawings (gameOver screen looks like the titleScreen)
    drawtitleFloor();
    drawtitleFloorDesign();

    //title sun drawing
    drawtitleSun();

    //title clouds drawing and animation
    noStroke();
    animatetitleClouds();
    drawtitleClouds();


    if (lives > 0) {
        if (gameState === playing2 && flagpole.isReached) {
            //gameOverWin image
            imageMode(CENTER);
            let gameOverWinWidth = width;
            let gameOverWinHeight = height * 0.5;
            image(gameOverWin, width / 2, height / 3, gameOverWinWidth, gameOverWinHeight);

            fill(255);
            textAlign(CENTER, CENTER);
            textSize(25);
            text("PRESS ENTER TO RETURN TO TITLE", width / 2, height / 2 + 100);
        }

        else if (gameState === playing1 && flagpole.isReached) {
            //levelOneComplete image
            imageMode(CENTER);
            let levelOneCompleteWidth = width;
            let levelOneCompleteHeight = height * 0.5;
            image(levelOneComplete, width / 2, height / 3, levelOneCompleteWidth, levelOneCompleteHeight);

            fill(255);
            textAlign(CENTER, CENTER);
            textSize(25);
            text("PRESS ENTER TO START LEVEL 2", width / 2, height / 2 + 100);
        }
    }

    else {
        //gameOverLose image
        imageMode(CENTER);
        let gameOverLoseWidth = width;
        let gameOverLoseHeight = height * 0.5;
        image(gameOverLose, width / 2, height / 3, gameOverLoseWidth, gameOverLoseHeight);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(25);
        text("PRESS ENTER TO TRY AGAIN", width / 2, height / 2 + 100);
    }
}

function Particle(pos, velocity, size, colour) {
    this.pos = pos;
    this.velocity = velocity;
    this.size = size;
    this.colour = colour;
    this.age = 0; //to track lifetime of particles

    this.drawParticle = function () { //initial drawing of positions
        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    this.updateParticle = function () { //update particle positions
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
        emitter.drawAndUpdateParticles(); //use emitter system to draw fire
    }
}

function checkIfPlayerIsBurning() {
    if (playerWorldX > emitter.pos.x - 10 && playerWorldX < emitter.pos.x + 10 && playerY >= floorY - 50) {
        playerIsBurning = true;
        checkIfPlayerIsDead(); //when player burns, player loses a life
    }
}

function drawPlatforms() {
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw(); //draw platforms
        platforms[i].move(); //animate movement of platforms
    }
}

function checkIfCharacterIsOnAnyPlatform() {
    onPlatform = false;

    for (var i = 0; i < platforms.length; i++) {
        var isContact = platforms[i].checkContact(playerWorldX, playerY); //check platform contact for several platforms
        if (isContact) {
            onPlatform = true;
            if (playerY < platforms[i].y) {
                playerY = platforms[i].y - 40;
                Jumping = false;
                jumpVelocity = 0;
                fallingFromPlatform = false;
            }
            return;
        }
    }

    if (!onPlatform && !Jumping && playerY < floorY - 40) {
        fallingFromPlatform = true;
        playerY += gravity;
    }
}

function createEnemy(x, y, range) {
    return new Enemy(x, y, range);
}

function drawEnemies() {
    stroke(0);
    strokeWeight(1);
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
}

function checkIfGameCharHitByEnemy() {
    for (var i = 0; i < enemies.length; i++) {
        var isContact = enemies[i].checkContact(playerWorldX, playerY); //enemy-player collision detection
        if (isContact) {
            hitByEnemy = true;
            hitByEnemySound.play();
            checkIfPlayerIsDead();
            break;
        }
    }
}

////////////////////////////////////////////////////////////CODE FOR CONTROL SCREEN//////////////////////////////////////////////////////
function drawControlScreen() {
    //control screen text displaying controls of game
    background(0);
    text("CONTROLS", width / 2, height / 4);
    textSize(18);
    text("W - Jump", width / 2, height / 3);
    text("A - Move Left", width / 2, height / 3 + 30);
    text("D - Move Right", width / 2, height / 3 + 60);
    text("Left Arrow - Shoot Left", width / 2, height / 3 + 90);
    text("Right Arrow - Shoot Right", width / 2, height / 3 + 120);
    textSize(20);
    text("Press ENTER to Start", width / 2, height - 50);
}

/////////////////////////////////////////////////////////////CODE FOR TITLE SCREEN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setupTitleScreen() {
    floorY = 430;
    vertexfloorX = 100;
    vertexfloorY = 470;
    lives = 3;

    titleClouds = [{ pos_x: random(10, width), pos_y: random(20, 70), size: random(40, 70) },
    { pos_x: random(10, 100), pos_y: random(70, 120), size: random(40, 70) },
    { pos_x: random(100, width), pos_y: random(120, 190), size: random(40, 70) },
    { pos_x: random(200, 300), pos_y: random(190, 260), size: random(40, 70) },
    { pos_x: random(10, width), pos_y: random(70, 120), size: random(40, 70) },
    { pos_x: random(400, 500), pos_y: random(120, 190), size: random(40, 70) },
    { pos_x: random(500, 600), pos_y: random(190, 260), size: random(40, 70) }];

    titleClouds2 = [{ pos_x: random(10, width), pos_y: random(20, 70), size: random(40, 70) },
    { pos_x: random(10, 100), pos_y: random(70, 120), size: random(40, 70) },
    { pos_x: random(100, width), pos_y: random(120, 190), size: random(40, 70) },
    { pos_x: random(200, 300), pos_y: random(190, 260), size: random(40, 70) },
    { pos_x: random(10, width), pos_y: random(70, 120), size: random(40, 70) },
    { pos_x: random(400, 500), pos_y: random(120, 190), size: random(40, 70) },
    { pos_x: random(500, 600), pos_y: random(190, 260), size: random(40, 70) }];
}

function drawTitleScreen() {
    background(135, 206, 235); // Sky blue background

    drawtitleFloor();
    drawtitleFloorDesign();
    drawtitleSun();
    noStroke();
    animatetitleClouds();
    drawtitleClouds();

    //title image
    imageMode(CENTER);
    let titleWidth = width;
    let titleHeight = height * 0.5;
    image(title, width / 2, height / 3, titleWidth, titleHeight);

    //press ENTER text
    fill(255);
    textSize(28);
    textAlign(CENTER);
    text("Press ENTER to Continue", width / 2, height * 0.6);
}


function drawtitleFloor() {
    noStroke(); //SaddleBrown #8B4513 floor
    fill(139, 69, 19);
    rect(0, floorY, width, 300);
    fill(34, 139, 34);
}

function drawtitleFloorDesign() {
    noStroke();
    fill(34, 139, 34);  //ensure the floor design has the same color
    beginShape();
    vertex(0, floorY);
    vertex(0, vertexfloorY);
    for (var i = 0; i < 10000; i++) {
        //drawing spikes for grass design in alternating manner
        if (i % 2 == 1) {
            vertex(vertexfloorX * i / 3, floorY)
        }
        if (i % 2 == 0) {
            vertex(vertexfloorX * i / 3, vertexfloorY + 10)
        }
    }
    endShape(CLOSE);
}

function drawtitleSun() {
    fill(255, 255, 0);
    stroke(255, 215, 0);
    strokeWeight(3);
    ellipse(0, 0, 250, 250);
}

function animatetitleClouds() {
    //move first set of clouds
    for (let i = 0; i <= 6; i++) {
        titleClouds[i].pos_x += 1;
        if (titleClouds[i].pos_x >= width) {
            titleClouds[i].pos_x = 0;
        }
    }

    //move second set of clouds
    for (let i = 0; i <= 6; i++) {
        titleClouds2[i].pos_x += 1;
        if (titleClouds2[i].pos_x >= width) {
            titleClouds2[i].pos_x = 0;
        }
    }
}

function drawtitleClouds() {
    for (let i = 0; i <= 6; i++) {
        drawtitleCloud(titleClouds[i]);
    }
}

function drawtitleClouds2() {
    for (let i = 0; i <= 6; i++) {
        drawtitleCloud(titleClouds2[i]);
    }
}

function drawtitleCloud(t_cloud2) {
    fill(240, 248, 255);
    ellipse(t_cloud2.pos_x - 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);
    ellipse(t_cloud2.pos_x + 30, t_cloud2.pos_y, t_cloud2.size, t_cloud2.size);
    ellipse(t_cloud2.pos_x, t_cloud2.pos_y, t_cloud2.size * 1.2, t_cloud2.size * 1.2);
}


/////////////////////////////////////////////////////BULLET CODE/////////////////////////////////////////////////////////////////////////////////
function drawBullets() {
    if (!gameOver && lives > 0) {
        for (var i = bullets.length - 1; i >= 0; i--) {
            bullets[i].draw()
        }
    }

    else {
        bullets = []; //reset bullets
    }
}

function moveBullets() {
    for (var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();

        var bulletWorldX = bullets[i].x - scrollPos;
        var removeConditions =
            bulletWorldX < -100 ||
            (gameState === playing1 && bulletWorldX > 2100) ||
            (gameState === playing2 && bulletWorldX > 3100);

        if (removeConditions) {
            bullets.splice(i, 1);
        }
    }
}

function checkIfAnyBulletsHitEnemies() {
    for (var j = bullets.length - 1; j >= 0; j--) {
        let bullet = bullets[j];
        let bulletWorldX = bullet.x - scrollPos;

        for (var i = enemies.length - 1; i >= 0; i--) {
            let enemy = enemies[i];
            //bullet-enemy collision detection
            if (
                bulletWorldX > enemy.currentX - 20 &&
                bulletWorldX < enemy.currentX + 20 &&
                Math.abs(bullet.y - enemy.y) < 40
            ) {
                killEnemySound.play();
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                break;
            }
        }
    }
}

function removeFarBullets() { //remove bullets that are too far - 500 pixels
    for (var j = bullets.length - 1; j >= 0; j--) {
        var bullet = bullets[j]
        if (bullet.age > 500) {
            bullets.splice(j, 1);
        }
    }
}
