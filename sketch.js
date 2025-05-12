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

var flagpole;

var lives;
var gameOver;

var jumpSound;
var fallSound;
var collectSound;
var flagSound;

var emitter;

function preload() {
    soundFormats("mp3", "wav");

    jumpSound = loadSound("assets/jump.mp3");
    fallSound = loadSound("assets/fall.mp3");
    collectSound = loadSound("assets/collect.wav");
    flagSound = loadSound("assets/flagpole.wav");
    sound.setVolume(0.05);
}

function setup() {
    createCanvas(1024, 576);

    lives = 3;

    init();
}

function init() {
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
    inCanyon = false;

    gameOver = false;

    emitter = new Emitter(650, floorY - 10, 0, -1, 10, color(200, 0, 0));
    emitter.startEmitter(200, 100);
    isBurning = false;
}

function draw() {
    //MidnightBlue #191970 sky
    background(25, 25, 112);

    //ground
    noStroke(); //SaddleBrown #8B4513 floor
    fill(139, 69, 19);
    drawFloor();

    //push for scroll
    push();
    translate(scrollPos, 0);

    //floor design
    drawFloorDesign();

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

    //pop for scroll
    pop();

    //life tokens
    drawLifeTokens();

    //player
    var anchorY = playerY + 40
    drawCharacter(playerX, anchorY);


    fill(255, 0, 0);
    ellipse(playerX, anchorY, 5, 5);


    if (!inCanyon) {
        //movement of character using the WASD keys
        if (keyIsDown(65)) { //'A' key for left
            playerX -= 5;
            scrollPos += 5;
        }
        if (keyIsDown(68)) { //'D' key for right
            playerX += 5;
            scrollPos -= 5;
        }
        if (keyIsDown(87)) { //'W' key for up
            playerY -= 5;
        }

        //jumping logic
        if (keyIsDown(87) && !Jumping) { // 'W' key for jump
            Jumping = true;
            jumpSound.play();
            jumpVelocity = -10; // Set initial jump velocity
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
        if (Jumping) {
            playerY += jumpVelocity; // Move up
            jumpVelocity += gravity;  // Apply gravity
        }

        //checking if character has landed
        if (playerY >= floorY - 40) {
            playerY = floorY - 40;
            Jumping = false; // Stop jumping
            jumpVelocity = 0; // Reset jump velocity
        }
        else {
            drawCharacter();
        }

        //update real position of playerX for collision detection
        playerWorldX = playerX - scrollPos;

        //check if player is within collectable range
        checkXCoinCollection();

        //Check if player is in a canyon
        checkCanyonCollision()

        //Check if player reached flagpole
        checkIfFlagpoleIsReached();

        //check if plyer is burning
        checkIfPlayerIsBurning(); //work in progress

        //Falling logic
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

    //title card: X-Men: Stuck in Javascript!

    //A helpful mouse pointer (to be commented out before submission)
    /*push();
    fill(255);
    noStroke();
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();*/

}

