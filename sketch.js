var floorY;

var vertexfloorX;
var vertexfloorY;

var clouds;
var mountains;
var trees;
var canyons;
var coins;
var coinCounterX;
var coinCounterY;
var count;

var scrollPos;
var playerWorldX;

var playerX;
var playerY;

var Left;
var Right;
var frontFacing;

var Jumping;
var jumpHeight;
var gravity;
var jumpVelocity;
var Falling;
var isplayerVisible;
var inCanyon;

var stars = [];

var embers = [];

var flagpole;

var lives;
var gameOver;

var jumpSound;
var fallSound;
var collectSound;
var flagSound;
var hitByEnemySound;
var themeSound;

var badGuyOne;

var emitter;

var platforms;
var onPlatform;
var fallingFromPlatform;

var enemies;
var hitByEnemy;
var bulletHitEnemy;
var bulletRemoved;

var titleScreen = "TITLE";
var controlScreen = "CONTROLS";
var playing1 = "PLAYING LEVEL 1";
var playing2 = "PLAYING LEVEL 2";
var gameState;
var title;
var titleClouds;

var bullets;
var canFire = true;
var fireCooldown = 10;
var fireTimer = 0;
var fireKeyHeld = false;

function preload() {
    //images
    title = loadImage("assets/title.png");
    badGuyOne = loadImage("assets/badGuyOne.png");
    gameOverWin = loadImage("assets/gameOverWin.png");
    gameOverLose = loadImage("assets/gameOverLose.png");
    levelOneComplete = loadImage("assets/levelOneComplete.png");

    //sound effects
    soundFormats("mp3", "wav");

    jumpSound = loadSound("assets/jump.mp3");
    fallSound = loadSound("assets/fall.mp3");
    collectSound = loadSound("assets/collect.wav");
    flagSound = loadSound("assets/flag.wav");
    hitByEnemySound = loadSound("assets/hitByEnemy.mp3");
    laserSound = loadSound("assets/laser.mp3");
    killEnemySound = loadSound("assets/killEnemy.mp3")

    sound.setVolume(1);
}

function setup() {
    createCanvas(1024, 576);
    gameState = titleScreen;
    lives = 3;
    bullets = [];

    setupTitleScreen();

    if (gameState === playing1) {
        init1();
    }
}

function setup2() {
    gameState = playing2;
    lives = 3;
}

function init1() {
    gameState = playing1;

    floorY = 450;

    setupScene();

    scrollPos = 0;
    playerWorldX = playerX;

    playerX = 230;
    playerY = floorY - 40;

    Left = false;
    Right = false;
    frontFacing = true;

    Jumping = false;
    jumpHeight = 100;
    gravity = 1;
    jumpVelocity = 0;
    Falling = false;
    isplayerVisible = true;

    gameOver = false;

    emitter = new Emitter(650, floorY - 10, 0, -1, 10, color(200, 0, 0));
    emitter.startEmitter(200, 100);

    onPlatform = false;
    fallingFromPlatform = false;

    hitByEnemy = false;
    inCanyon = false;
    isBurning = false;

    enemies = [];
    enemies.push(createEnemy(400, playerY, 100));
    enemies.push(createEnemy(800, playerY, 100));
    enemies.push(createEnemy(1000, playerY, 100));
    enemies.push(createEnemy(1600, playerY, 100));
    enemies.push(createEnemy(1450, playerY - 300, 100));

    count = 0;

    bullets = [];
}

function init2() {
    gameState = playing2;
    gameOver = false;

    setupScene2();

    playerX = 230;
    playerY = floorY - 40;
    playerWorldX = playerX;
    scrollPos = 0;

    Left = false;
    Right = false;
    frontFacing = true;
    Jumping = false;
    jumpHeight = 100;
    gravity = 1;
    jumpVelocity = 0;
    Falling = false;
    isplayerVisible = true;

    onPlatform = false;
    fallingFromPlatform = false;

    hitByEnemy = false;
    inCanyon = false;
    playerIsBurning = false;

    enemies = [];
    enemies.push(createEnemy(370, floorY - 140, 100));
    enemies.push(createEnemy(600, floorY - 40, 100));
    enemies.push(createEnemy(800, floorY - 40, 100));
    enemies.push(createEnemy(1000, floorY - 40, 100));
    enemies.push(createEnemy(1450, floorY - 340, 100));
    enemies.push(createEnemy(1700, floorY - 40, 100));
    enemies.push(createEnemy(1990, floorY - 160, 100));
    enemies.push(createEnemy(1850, floorY - 360, 100));
    enemies.push(createEnemy(2430, floorY - 40, 100));
    enemies.push(createEnemy(2630, floorY - 40, 100));

    emitter = new Emitter(650, floorY - 10, 0, -1, 10, color(200, 0, 0));
    emitter.startEmitter(200, 100);

    count = 0;

    bullets = [];
}

function draw() {
    //handle the fire cooldown timer
    if (!canFire) {
        fireTimer--;
        if (fireTimer <= 0) {
            canFire = true; //ee-enable firing after cooldown
        }
    }

    //title screen
    if (gameState === titleScreen) {
        drawTitleScreen();
    }

    //control screen
    else if (gameState === controlScreen) {
        drawControlScreen();
    }

    //level 1
    else if (gameState === playing1) {
        //draw GameOver if playerIsDead
        if (gameOver) {
            drawGameOver();
            return;
        }

        //MidnightBlue #191970 sky
        background(25, 25, 112);

        //ground
        drawFloor();

        //push for scroll
        push();
        translate(scrollPos, 0);

        //floor design
        drawFloorDesign();

        //moon
        drawMoon();

        //clouds
        noStroke();
        animateClouds();
        drawClouds();

        //stars
        drawStars();

        //mountains
        noStroke();
        drawMountains();

        //trees
        drawTrees();

        //canyons
        drawCanyons();

        //X-coins
        drawCoins();

        //particles
        emitter.drawAndUpdateParticles();

        //fire
        drawFire();

        //flagpole
        drawFlagpole();

        //platforms
        drawPlatforms();

        //enemies
        drawEnemies();

        //pop for scroll
        pop();

        //life tokens
        drawLifeTokens();

        //player
        var anchorY = playerY + 40
        drawCharacter(playerX, anchorY);
        keyPressed();
        fill(255, 0, 0);
        ellipse(playerX, anchorY, 5, 5);

        //bullets
        drawBullets();
        moveBullets();


        if (!inCanyon) {
            //movement of character using the WASD keys
            if (keyIsDown(65)) { //'A' key for left
                playerX -= 5;
                scrollPos += 8;
            }
            if (keyIsDown(68)) { //'D' key for right
                playerX += 5;
                scrollPos -= 8;
            }
            if (keyIsDown(87)) { //'W' key for up
                playerY -= 5;
            }

            //jumping logic
            if (keyIsDown(87) && !Jumping) { // 'W' key for jump
                Jumping = true;
                jumpSound.play();
                jumpVelocity = -10; //set initial jump velocity
            }

            //sideways jumping
            if (keyIsDown(65) && keyIsDown(87) && !Jumping) { //left-up jump
                Jumping = true;
                jumpVelocity = -10;
                playerX -= 5;
                playerY -= 5;
            }
            if (keyIsDown(68) && keyIsDown(87) && !Jumping) { //right-up jump
                Jumping = true;
                jumpVelocity = -10;
                playerX += 5;
                playerY -= 5;
            }

            //gravity for jumping
            if (Jumping || fallingFromPlatform) {
                playerY += jumpVelocity; //move up
                jumpVelocity += gravity;  //apply gravity
            }

            //checking if character has landed on platform or ground
            if (playerY >= floorY - 40) {
                playerY = floorY - 40;
                Jumping = false; //stop jumping
                fallingFromPlatform = false; //stop jumping from the platform
                jumpVelocity = 0; //reset jump velocity
            }
            else {
                drawCharacter();
            }

            //check if player is on platform
            checkIfCharacterIsOnAnyPlatform();

            //update real position of playerX for collision detection
            playerWorldX = playerX - scrollPos;

            //check if player is within collectable range
            checkXCoinCollection();

            //check if player is in a canyon
            checkCanyonCollision()

            //check if player reached flagpole
            checkIfFlagpoleIsReached();

            //check if player is burning
            checkIfPlayerIsBurning(); //work in progress

            //check if player has been hit by enemy
            checkIfGameCharHitByEnemy();

            checkIfAnyBulletsHitEnemies();

            removeFarBullets();

            //falling logic
            if (Falling) {
                playerY += 125; //fallingVelocity 
                inCanyon = true;
                fallSound.play();
            }
            else {
                drawCharacter();
            }

            //X-Coin Counter
            fill(255, 255, 255);
            textSize(20);
            text("X-Coins: ", coinCounterX, coinCounterY);
            //counter variable
            text(count, coinCounterX + 80, coinCounterY);

        }
        else if (inCanyon) {
            checkIfPlayerIsDead();
        }
        else if (inCanyon && lives <= 0) {
            gameOver = true;
        }
    }

    //level 2
    else if (gameState === playing2) {
        //draw GameOver if playerIsDead
        if (gameOver) {
            drawGameOver();
            return;
        }

        //darkRed #8B0000 sky
        background(139, 0, 0);

        //push for scroll
        push();
        translate(scrollPos, 0);

        //rock ceiling
        drawRockCeiling();

        //rock floor
        drawRockFloor();

        //canyons
        drawCanyons();

        //embers
        drawEmbers();

        //X-coins
        drawCoins();

        //flagpole
        drawFlagpole();

        //platforms
        drawPlatforms();

        //enemies
        drawEnemies();

        //pop for scroll
        pop();

        //life tokens
        drawLifeTokens();

        //player
        var anchorY = playerY + 40
        drawCharacter(playerX, anchorY);
        keyPressed();
        fill(255, 0, 0);
        ellipse(playerX, anchorY, 5, 5);

        //bullets
        drawBullets();
        moveBullets();


        if (!inCanyon) {
            //movement of character using the WASD keys
            if (keyIsDown(65)) { //'A' key for left
                playerX -= 5;
                scrollPos += 12;
            }
            if (keyIsDown(68)) { //'D' key for right
                playerX += 5;
                scrollPos -= 12;
            }
            if (keyIsDown(87)) { //'W' key for up
                playerY -= 5;
            }

            //jumping logic
            if (keyIsDown(87) && !Jumping) { // 'W' key for jump
                Jumping = true;
                jumpSound.play();
                jumpVelocity = -10; //set initial jump velocity
            }

            //sideways jumping
            if (keyIsDown(65) && keyIsDown(87) && !Jumping) { //left-up jump
                Jumping = true;
                jumpVelocity = -10;
                playerX -= 5;
                playerY -= 5;
            }
            if (keyIsDown(68) && keyIsDown(87) && !Jumping) { //right-up jump
                Jumping = true;
                jumpVelocity = -10;
                playerX += 5;
                playerY -= 5;
            }

            //gravity for jumping
            if (Jumping || fallingFromPlatform) {
                playerY += jumpVelocity; //move up
                jumpVelocity += gravity;  //apply gravity
            }

            //checking if character has landed on platform or ground
            if (playerY >= floorY - 40) {
                playerY = floorY - 40;
                Jumping = false; //stop jumping
                fallingFromPlatform = false; //stop jumping from the platform
                jumpVelocity = 0; //reset jump velocity
            }
            else {
                drawCharacter();
            }

            //check if player is on platform
            checkIfCharacterIsOnAnyPlatform();

            //update real position of playerX for collision detection
            playerWorldX = playerX - scrollPos;

            //check if player is within collectable range
            checkXCoinCollection();

            //check if player is in a canyon
            checkCanyonCollision()

            //check if player reached flagpole
            checkIfFlagpoleIsReached();

            //check if player is burning
            checkIfPlayerIsBurning(); //work in progress

            //check if player has been hit by enemy
            checkIfGameCharHitByEnemy();

            checkIfAnyBulletsHitEnemies();

            removeFarBullets();

            //falling logic
            if (Falling) {
                playerY += 125; //fallingVelocity 
                inCanyon = true;
                fallSound.play();
            }
            else {
                drawCharacter();
            }

            //X-Coin Counter
            fill(255, 255, 255);
            textSize(20);
            text("X-Coins: ", coinCounterX, coinCounterY);
            //counter variable
            text(count, coinCounterX + 80, coinCounterY);

        }
        else if (inCanyon) {
            checkIfPlayerIsDead();
        }
        else if (inCanyon && lives <= 0) {
            gameOver = true;
        }
    }
}

function keyPressed() {
    //control screen handling
    if (gameState === titleScreen && keyCode === ENTER) {
        gameState = controlScreen;
        setupControlScreen();
    }

    else if (gameState === controlScreen && keyCode === ENTER) {
        gameState = playing1;
        lives = 3;
        init1();
    }

    //handle game-over situation with ENTER key
    else if (gameOver === true && keyCode === ENTER) {
        if (lives <= 0) {
            lives = 3;
            gameState = titleScreen;
            setupTitleScreen();
        } else if (gameState === playing2 && flagpole.isReached) {
            lives = 3;
            gameState = titleScreen;
            setupTitleScreen();
        } else if (gameState === playing1 && flagpole.isReached) {
            flagpole.isReached = false;
            setup2();
            init2();
        } else {
            if (gameState === playing1) {
                init1();
            } else if (gameState === playing2) {
                init2();
            }
        }
        gameOver = false;
    }

    //handle bullet firing
    if ((gameState === playing1 || gameState === playing2) && !gameOver) {
        if (canFire && !fireKeyHeld) {
            if (keyCode === LEFT_ARROW) {
                laserSound.play();
                bullets.push(new Bullet(playerX, playerY, -5));
                canFire = false;
                fireKeyHeld = true;
                fireTimer = fireCooldown;
            } else if (keyCode === RIGHT_ARROW) {
                laserSound.play();
                bullets.push(new Bullet(playerX, playerY, 5));
                canFire = false;
                fireKeyHeld = true;
                fireTimer = fireCooldown;
            }
        }
    }
}

function keyReleased() {
    //to stop firing
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        fireKeyHeld = false;
    }
}
