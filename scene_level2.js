function setupScene2() {
	floorY = 450;
	vertexfloorX = 35;
	vertexfloorY = floorY + 50;

	scrollPos = 0;

	canyons = [{ pos_x: 260, pos_y: floorY, width: 300, height: 145 },
	{ pos_x: 1200, pos_y: floorY, width: 400, height: 145 }];

	coins = [{ pos_x: 775, pos_y: 320, coinSize: 30, isCollected: false },
	{ pos_x: 1120, pos_y: 183, coinSize: 30, isCollected: false },
	{ pos_x: 2055, pos_y: 430, coinSize: 30, isCollected: false }];

	coinCounterX = 925;
	coinCounterY = 567;
	count = 0;

	platforms = [];
	platforms.push(createPlatform(70, floorY - 100, 100));
	platforms.push(createPlatform(200, floorY - 200, 100));
	platforms.push(createPlatform(340, floorY - 100, 160));
	platforms.push(createPlatform(480, floorY - 250, 160));
	platforms.push(createPlatform(725, floorY - 100, 100));
	platforms.push(createPlatform(1000, floorY - 200, 100));
	platforms.push(createPlatform(1400, floorY - 300, 200));
	platforms.push(createPlatform(1300, floorY - 100, 200));
	platforms.push(createPlatform(1500, floorY - 150, 200));
	platforms.push(createPlatform(1940, floorY - 120, 200));
	platforms.push(createPlatform(1800, floorY - 320, 200));
	platforms.push(createPlatform(2280, floorY - 120, 150));
	platforms.push(createPlatform(2700, floorY - 230, 150));

	flagpole = { pos_x: 2800, width: 25, isReached: false };

	for (var i = 0; i < 100; i++) {
		embers[i] = new ember();
	}
}

function drawRockFloor() {
	noStroke();
	fill(139, 69, 19); //saddleBrown #8B4513 floor
	rect(-500, floorY, 5 * width, 300);

	//intricate floor design for playing2
	strokeWeight(4);
	fill(160, 82, 45);
	stroke(0);
	beginShape();
	vertex(-500, floorY);
	vertex(0, 569);
	vertex(100, 490);
	vertex(175, 550);
	vertex(237, 520);
	vertex(275, 570);
	vertex(369, 530);
	vertex(507, 570);
	vertex(600, 520);
	vertex(750, 560);
	vertex(790, 570);
	vertex(900, 520);
	vertex(1024, 550);
	vertex(1060, 500);
	vertex(1100, 490);
	vertex(1175, 550);
	vertex(1237, 520);
	vertex(1275, 570);
	vertex(1369, 530);
	vertex(1507, 570);
	vertex(1600, 520);
	vertex(1750, 560);
	vertex(1790, 570);
	vertex(1900, 520);
	vertex(2048, 550);
	vertex(2070, 520);
	vertex(2100, 500);
	vertex(2175, 550);
	vertex(2237, 520);
	vertex(2275, 570);
	vertex(2369, 530);
	vertex(2507, 570);
	vertex(2600, 520);
	vertex(2750, 560);
	vertex(2790, 570);
	vertex(2900, 520);
	vertex(3072, 598);
	vertex(3072, floorY);
	endShape(CLOSE);
}

function drawRockCeiling() {
	//intricate canyon ceiling design
	strokeWeight(4);
	fill(160, 82, 45);
	stroke(0);
	beginShape();
	vertex(-500, 0);
	vertex(-500, 150);
	vertex(75, 50);
	vertex(150, 50);
	vertex(175, 90);
	vertex(190, 95);
	vertex(200, 50);
	vertex(275, 50);
	vertex(315, 140);
	vertex(335, 120);
	vertex(355, 55);
	vertex(375, 90);
	vertex(389, 68);
	vertex(390, 50);
	vertex(445, 50);
	vertex(455, 98);
	vertex(460, 98);
	vertex(465, 110);
	vertex(485, 50);
	vertex(535, 190);
	vertex(555, 210);
	vertex(595, 50);
	vertex(655, 50);
	vertex(700, 70);
	vertex(770, 130);
	vertex(790, 90);
	vertex(800, 50);
	vertex(925, 50);
	vertex(1024, 200);
	vertex(1024, 130);
	vertex(1050, 150);
	vertex(1075, 50);
	vertex(1150, 50);
	vertex(1175, 90);
	vertex(1190, 95);
	vertex(1200, 50);
	vertex(1275, 50);
	vertex(1315, 140);
	vertex(1335, 120);
	vertex(1355, 55);
	vertex(1375, 90);
	vertex(1389, 68);
	vertex(1390, 50);
	vertex(1445, 50);
	vertex(1455, 98);
	vertex(1460, 98);
	vertex(1465, 110);
	vertex(1485, 50);
	vertex(1535, 190);
	vertex(1555, 210);
	vertex(1595, 50);
	vertex(1655, 50);
	vertex(1700, 70);
	vertex(1770, 130);
	vertex(1790, 90);
	vertex(1800, 50);
	vertex(1925, 50);
	vertex(2048, 200);
	vertex(2050, 150);
	vertex(2075, 50);
	vertex(2150, 50);
	vertex(2175, 90);
	vertex(2190, 95);
	vertex(2200, 50);
	vertex(2275, 50);
	vertex(2315, 140);
	vertex(2335, 120);
	vertex(2355, 55);
	vertex(2375, 90);
	vertex(2389, 68);
	vertex(2390, 50);
	vertex(2445, 50);
	vertex(2455, 98);
	vertex(2460, 98);
	vertex(2465, 110);
	vertex(2485, 50);
	vertex(2535, 190);
	vertex(2555, 210);
	vertex(2595, 50);
	vertex(2655, 50);
	vertex(2700, 70);
	vertex(2770, 130);
	vertex(2790, 90);
	vertex(2800, 50);
	vertex(2925, 50);
	vertex(3072, 200);
	vertex(3072, 0);
	endShape(CLOSE);
}

function drawEmbers() {
	//draw small embers for level design
	stroke(120, 120, 0);
	for (var i = 0; i < embers.length; i++) {
		embers[i].move();
		embers[i].display();
	}
}

function ember() {
	this.x = random(0, 3000);
	this.y = random(70, floorY);

	this.display = function () {
		strokeWeight(0.1)
		stroke(255);
		fill(255, 255, 0);
		ellipse(this.x, this.y, 4, 4);
	}

	this.move = function () {
		this.x = this.x + random(-100, 100);
		this.y = this.y + random(0, 0);
	}
}

function checkIfPlayerIsDead() {
	//re-establishing playerIsDead for playing2
	if (inCanyon || hitByEnemy || playerIsBurning) {
		lives = lives - 1;
		hitByEnemy = false;
		playerIsBurning = false;

		if (lives > 0) {
			if (gameState === playing1) {
				init1();
			}
			else if (gameState === playing2) {
				init2();
			}
		}
		else {
			gameOver = true;
			drawGameOver();
		}
	}
}