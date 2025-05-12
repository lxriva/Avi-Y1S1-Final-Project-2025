function drawCharacter(x, y) {
	stroke(0);
	strokeWeight(1);

	//left jumping movement
	if (keyIsDown(65) && keyIsDown(87) || keyIsDown(65) && keyIsDown(87) && onPlatform) {
		//head
		fill(0, 0, 200); //blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		//visor
		fill(255, 215, 0); //gold fill
		rect(x - 10, y - 64, 7, 6);

		//hair
		fill(135, 42, 42); //reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 4, y - 64);
		vertex(x, y - 62);
		vertex(x + 10, y - 62);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		//circle at end of left side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x - 1, y - 61, 9, 9);

		//body left side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		//bent left arm (bent backwards to the right while jumping)
		fill(0, 0, 200);
		beginShape();
		vertex(x + 5, y - 50);
		vertex(x + 5, y - 38);
		vertex(x + 11.5, y - 25.6);
		vertex(x + 3.3, y - 20.1);
		vertex(x - 4.9, y - 32.5);
		vertex(x - 3.2, y - 27);
		vertex(x - 5, y - 50);
		endShape(CLOSE);

		//bent left glove
		fill(255, 215, 0); //gold fill
		beginShape();
		vertex(x + 7.4, y - 31.3);
		vertex(x + 11.5, y - 25.6);
		vertex(x + 3.3, y - 20.1);
		vertex(x - 0.7, y - 25.8);
		endShape(CLOSE);

		//belt
		fill(255, 215, 0); //gold fill
		rect(x - 5, y - 25, 10, 6);

		//left leg
		fill(0, 0, 200);
		rect(x - 5, y - 20, 10, 20);

		//left boot
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	//left movement
	else if (keyIsDown(65) || keyIsDown(65) && onPlatform) {
		//head
		fill(0, 0, 200); //blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		//visor
		fill(255, 215, 0); //gold fill
		rect(x - 10, y - 64, 7, 6);

		//hair
		fill(135, 42, 42); //reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 4, y - 64);
		vertex(x, y - 62);
		vertex(x + 10, y - 62);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		//circle at end of left side of visor
		fill(255, 215, 0); //gold fill
		ellipse(x - 1, y - 61, 9, 9);

		//body left side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		//left arm and glove
		rect(x - 5, y - 10 - 40, 10, 25); //arm
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 8 - 40, 10, 7); //glove

		//belt
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 15 - 40, 10, 6);

		//left leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		//left boot
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	//right jumping movement	
	else if (keyIsDown(68) && keyIsDown(87) || keyIsDown(68) && keyIsDown(87) && onPlatform) {
		// had
		fill(0, 0, 200); //blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		//visor
		fill(255, 215, 0); //gold fill
		rect(x + 4, y - 64, 7, 6);

		//hair
		fill(135, 42, 42); //reddish-Brown fill
		beginShape();
		vertex(x + 10, y - 70);
		vertex(x + 10, y - 64);
		vertex(x + 4, y - 64);
		vertex(x, y - 62);
		vertex(x - 10, y - 62);
		vertex(x - 10, y - 70);
		endShape(CLOSE);

		//circle at end of right side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x + 1, y - 61, 9, 9);

		//body right side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		//bent right arm (bent backwards to the left while jumping)
		fill(0, 0, 200);
		beginShape();
		vertex(x - 5, y - 50);
		vertex(x - 5, y - 38);
		vertex(x - 11.5, y - 25.6);
		vertex(x - 3.3, y - 20.1);
		vertex(x + 3.2, y - 32.5);
		vertex(x + 5, y - 27);
		vertex(x + 5, y - 50);
		endShape(CLOSE);

		//bent right glove
		fill(255, 215, 0); //gold fill
		beginShape();
		vertex(x - 7.4, y - 31.3);
		vertex(x - 11.5, y - 25.6);
		vertex(x - 3.3, y - 20.1);
		vertex(x + 0.7, y - 25.8);
		endShape(CLOSE);

		//belt
		fill(255, 215, 0); //gold fill
		rect(x - 5, y - 25, 10, 6);

		//right leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		//right boot
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	//right movement
	else if (keyIsDown(68) || keyIsDown(68) && onPlatform) {
		//head
		fill(0, 0, 200); //blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		//visor
		fill(255, 215, 0); //gold fill
		rect(x + 4, y - 64, 7, 6);

		//hair
		fill(135, 42, 42); //reddish-Brown fill
		beginShape();
		vertex(x + 10, y - 70);
		vertex(x + 10, y - 64);
		vertex(x + 4, y - 64);
		vertex(x, y - 62);
		vertex(x - 10, y - 62);
		vertex(x - 10, y - 70);
		endShape(CLOSE);

		//circle at end of right side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x + 1, y - 61, 9, 9);

		//body right side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		//right arm and glove
		rect(x - 5, y - 10 - 40, 10, 25); //arm
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 8 - 40, 10, 7); //glove

		//belt
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 15 - 40, 10, 6);

		//right leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		//right boot
		fill(255, 215, 0); //gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	else if (keyIsDown(87) || keyIsDown(87) && onPlatform) {
		//head
		fill(255, 220, 177); //skin colour
		rect(x - 10, y - 30 - 40, 20, 20); //head positioned above body

		//hair
		fill(135, 42, 42); //reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 6, y - 66);
		vertex(x - 6, y - 64);
		vertex(x - 4, y - 64);
		vertex(x - 4, y - 66);
		vertex(x + 4, y - 66);
		vertex(x + 4, y - 64);
		vertex(x + 6, y - 64);
		vertex(x + 6, y - 66);
		vertex(x + 8, y - 66);
		vertex(x + 8, y - 64);
		vertex(x + 10, y - 64);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		//visor
		fill(255, 215, 0); //gold fill
		rect(x - 10, y - 24 - 40, 20, 7);

		//visor beam
		fill(255, 0, 0); //red fill
		rect(x - 9, y - 22 - 40, 18, 3);

		//partial mask
		fill(0, 0, 200);
		rect(x - 10, y - 18 - 40, 3, 8); //left side
		rect(x + 7, y - 18 - 40, 3, 8); //right side

		//body
		fill(0, 0, 200); //blue shirt
		rect(x - 10, y - 50, 20, 30); //body

		//diagonal strap
		fill(255, 215, 0); //gold fill
		beginShape();
		vertex(x - 10, y - 10 - 40);
		vertex(x - 10, y - 7 - 40);
		vertex(x + 4, y - 1 - 40);
		vertex(x + 4, y - 4 - 40);
		endShape(CLOSE);

		//vertical strap
		rect(x + 4, y - 10 - 40, 3, 25);

		//X-logo badge on chest
		fill(255, 0, 0); //red fill
		ellipse(x + 6, y - 2 - 40, 5, 5); //base ellipse
		line(x + 4, y - 4 - 40, x + 7, y - 1 - 40); //X-line 1
		line(x + 4, y - 1 - 40, x + 7, y - 4 - 40); //X-line 2

		//belt
		push();
		translate(0, -3);
		fill(255, 215, 0); //gold fill
		rect(x - 10, y + 15 - 40, 7, 11);
		rect(x + 3, y + 15 - 40, 7, 11);
		pop();

		//X-logo on belt
		fill(255, 0, 0); //red fill
		rect(x - 3, y + 15 - 40, 6, 8); //base rectangle
		line(x - 3, y + 15 - 40, x + 6, y + 23 - 40); //X-line 1
		line(x - 6, y + 23 - 40, x + 3, y + 15 - 40); //X-line 2

		//left arm
		fill(0, 0, 200); //blue shirt color
		rect(x - 20, y - 10 - 40, 10, 22);

		//left glove
		fill(255, 215, 0); //gold fill
		rect(x - 20, y + 8 - 40, 10, 4);

		//right arm
		fill(0, 0, 200); //blue shirt color
		rect(x + 10, y - 10 - 40, 10, 22);

		//right glove
		fill(255, 215, 0); //gold fill
		rect(x + 10, y + 8 - 40, 10, 4);

		//left leg
		fill(0, 0, 200);
		rect(x - 10, y + 20 - 40, 10, 17);

		//left boot
		fill(255, 215, 0); //gold fill
		rect(x - 10, y + 34 - 40, 10, 3);

		//right leg
		fill(0, 0, 200);
		rect(x, y + 20 - 40, 10, 17);

		//right boot
		fill(255, 215, 0); //gold fill
		rect(x, y + 34 - 40, 10, 3);
		noStroke();

	}

	else {
		//head
		fill(255, 220, 177); // Skin colour
		rect(x - 10, y - 30 - 40, 20, 20); // Head positioned above body

		//hair
		fill(135, 42, 42); // Reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 8, y - 64);
		vertex(x - 8, y - 66);
		vertex(x - 6, y - 66);
		vertex(x - 6, y - 64);
		vertex(x - 4, y - 64);
		vertex(x - 4, y - 66);
		vertex(x + 8, y - 66);
		vertex(x + 8, y - 64);
		vertex(x + 10, y - 64);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		//visor
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y - 24 - 40, 20, 6);

		//visor beam
		fill(255, 0, 0); //red fill
		rect(x - 9, y - 22 - 40, 18, 2);

		//partial mask
		fill(0, 0, 200);
		rect(x - 10, y - 18 - 40, 3, 8); //left side
		rect(x + 7, y - 18 - 40, 3, 8); //right side

		//body
		fill(0, 0, 200); //blue shirt
		rect(x - 10, y - 50, 20, 30); //body

		//diagonal strap
		fill(255, 215, 0); //gold fill
		beginShape();
		vertex(x - 10, y - 10 - 40);
		vertex(x - 10, y - 7 - 40);
		vertex(x + 4, y - 1 - 40);
		vertex(x + 4, y - 4 - 40);
		endShape(CLOSE);

		//vertical strap
		rect(x + 4, y - 10 - 40, 3, 25);

		//X-logo badge on chest
		fill(255, 0, 0); // Red fill
		ellipse(x + 6, y - 2 - 40, 5, 5); //base ellipse
		line(x + 4, y - 4 - 40, x + 7, y - 1 - 40); //X-line 1
		line(x + 4, y - 1 - 40, x + 7, y - 4 - 40); //X-line 2

		//belt
		fill(255, 215, 0); //gold fill
		rect(x - 10, y + 15 - 40, 7, 11);
		rect(x + 3, y + 15 - 40, 7, 11);

		//X-logo on belt
		fill(255, 0, 0); //red fill
		rect(x - 3, y + 15 - 40, 6, 8); //base rectangle
		line(x - 3, y + 15 - 40, x + 6, y + 23 - 40); //X-line 1
		line(x - 6, y + 23 - 40, x + 3, y + 15 - 40); //X-line 2

		//left arm
		fill(0, 0, 200); //blue shirt color
		rect(x - 20, y - 10 - 40, 10, 25);

		//left glove
		fill(255, 215, 0); //gold fill
		rect(x - 20, y + 8 - 40, 10, 7);

		//right arm
		fill(0, 0, 200); //blue shirt color
		rect(x + 10, y - 10 - 40, 10, 25);

		//right glove
		fill(255, 215, 0); //gold fill
		rect(x + 10, y + 8 - 40, 10, 7);

		//left leg
		fill(0, 0, 200);
		rect(x - 10, y + 20 - 40, 10, 20);

		//left boot
		fill(255, 215, 0); //gold fill
		rect(x - 10, y + 34 - 40, 10, 6);

		//right leg
		fill(0, 0, 200);
		rect(x, y + 20 - 40, 10, 20);

		//right boot
		fill(255, 215, 0); //gold fill
		rect(x, y + 34 - 40, 10, 6);

		noStroke();
	}
}