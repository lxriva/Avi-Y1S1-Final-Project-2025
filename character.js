function drawCharacter(x, y) {
	stroke(0);
	strokeWeight(1);

	// Left jumping movement
	if ((keyIsDown(65) && keyIsDown(87))) {
		// Head
		fill(0, 0, 200); // Blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y - 64, 7, 6);

		// Hair
		fill(135, 42, 42); // Reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 4, y - 64);
		vertex(x, y - 62);
		vertex(x + 10, y - 62);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		// Circle at end of left side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x - 1, y - 61, 9, 9);

		// Body left side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		// Bent left arm (bent backwards to the right while jumping)
		fill(0, 0, 200);
		beginShape();
		vertex(x + 5, y - 50); //
		vertex(x + 5, y - 38); //
		vertex(x + 11.5, y - 25.6); //
		vertex(x + 3.3, y - 20.1); //
		vertex(x - 4.9, y - 32.5);
		vertex(x - 3.2, y - 27);
		vertex(x - 5, y - 50);
		endShape(CLOSE);

		// Bent left glove
		fill(255, 215, 0); // Gold fill
		beginShape();
		vertex(x + 7.4, y - 31.3);
		vertex(x + 11.5, y - 25.6);
		vertex(x + 3.3, y - 20.1);
		vertex(x - 0.7, y - 25.8);
		endShape(CLOSE);

		// Belt
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y - 25, 10, 6);

		// Left leg
		fill(0, 0, 200);
		rect(x - 5, y - 20, 10, 20);

		// Left boot
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	// Left movement
	else if (keyIsDown(65)) {
		// Head
		fill(0, 0, 200); // Blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y - 64, 7, 6);

		// Hair
		fill(135, 42, 42); // Reddish-Brown fill
		beginShape();
		vertex(x - 10, y - 70);
		vertex(x - 10, y - 64);
		vertex(x - 4, y - 64);
		vertex(x, y - 62);
		vertex(x + 10, y - 62);
		vertex(x + 10, y - 70);
		endShape(CLOSE);

		// Circle at end of left side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x - 1, y - 61, 9, 9);

		// Body left side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		// Left arm and glove
		rect(x - 5, y - 10 - 40, 10, 25); // arm
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 8 - 40, 10, 7); // glove

		// Belt
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 15 - 40, 10, 6);

		//Left leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		// Left boot
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	// Right jumping movement	
	else if ((keyIsDown(68) && keyIsDown(87))) {
		// Head
		fill(0, 0, 200); // Blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x + 4, y - 64, 7, 6);

		// Hair
		fill(135, 42, 42); // Reddish-Brown fill
		beginShape();
		vertex(x + 10, y - 70);
		vertex(x + 10, y - 64);
		vertex(x + 4, y - 64);
		vertex(x, y - 62);
		vertex(x - 10, y - 62);
		vertex(x - 10, y - 70);
		endShape(CLOSE);

		// Circle at end of right side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x + 1, y - 61, 9, 9);

		// Body right side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		// Bent right arm (bent backwards to the left while jumping)
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

		// Bent right glove
		fill(255, 215, 0); // Gold fill
		beginShape();
		vertex(x - 7.4, y - 31.3);
		vertex(x - 11.5, y - 25.6);
		vertex(x - 3.3, y - 20.1);
		vertex(x + 0.7, y - 25.8);
		endShape(CLOSE);

		// Belt
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y - 25, 10, 6);

		// Right leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		// Right boot
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	// Right movement
	else if (keyIsDown(68)) {
		// Head
		fill(0, 0, 200); // Blue fill for side of head
		rect(x - 10, y - 70, 20, 20);

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x + 4, y - 64, 7, 6);

		// Hair
		fill(135, 42, 42); // Reddish-Brown fill
		beginShape();
		vertex(x + 10, y - 70);
		vertex(x + 10, y - 64);
		vertex(x + 4, y - 64);
		vertex(x, y - 62);
		vertex(x - 10, y - 62);
		vertex(x - 10, y - 70);
		endShape(CLOSE);

		// Circle at end of right side of visor
		fill(255, 215, 0); // Gold fill
		ellipse(x + 1, y - 61, 9, 9);

		// Body right side
		fill(0, 0, 200);
		rect(x - 5, y - 50, 10, 30);

		// Right arm and glove
		rect(x - 5, y - 10 - 40, 10, 25); // arm
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 8 - 40, 10, 7); // glove

		// Belt
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 15 - 40, 10, 6);

		// Right leg
		fill(0, 0, 200);
		rect(x - 5, y + 20 - 40, 10, 20);

		// Right boot
		fill(255, 215, 0); // Gold fill
		rect(x - 5, y + 34 - 40, 10, 6);

		noStroke();
	}

	else if (keyIsDown(87)) {
		// Head
		fill(255, 220, 177); // Skin colour
		rect(x - 10, y - 30 - 40, 20, 20); // Head positioned above body

		// Hair
		fill(135, 42, 42); // Reddish-Brown fill
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

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y - 24 - 40, 20, 7);

		// Visor beam
		fill(255, 0, 0); // Red fill
		rect(x - 9, y - 22 - 40, 18, 3);

		// Partial mask
		fill(0, 0, 200);
		rect(x - 10, y - 18 - 40, 3, 8); // Left side
		rect(x + 7, y - 18 - 40, 3, 8); // Right side

		// Body
		fill(0, 0, 200); // Blue shirt
		rect(x - 10, y - 50, 20, 30); // Body

		// Diagonal strap
		fill(255, 215, 0); // Gold fill
		beginShape();
		vertex(x - 10, y - 10 - 40);
		vertex(x - 10, y - 7 - 40);
		vertex(x + 4, y - 1 - 40);
		vertex(x + 4, y - 4 - 40);
		endShape(CLOSE);

		// Vertical strap
		rect(x + 4, y - 10 - 40, 3, 25);

		// X-logo badge on chest
		fill(255, 0, 0); // Red fill
		ellipse(x + 6, y - 2 - 40, 5, 5); // Base ellipse
		line(x + 4, y - 4 - 40, x + 7, y - 1 - 40); // X-line 1
		line(x + 4, y - 1 - 40, x + 7, y - 4 - 40); // X-line 2

		// Belt
		push();
		translate(0, -3);
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y + 15 - 40, 7, 11);
		rect(x + 3, y + 15 - 40, 7, 11);
		pop();

		// X-logo on belt
		fill(255, 0, 0); // Red fill
		rect(x - 3, y + 15 - 40, 6, 8); // Base rectangle
		line(x - 3, y + 15 - 40, x + 6, y + 23 - 40); // X-line 1
		line(x - 6, y + 23 - 40, x + 3, y + 15 - 40); // X-line 2

		// Left arm
		fill(0, 0, 200); // Blue shirt color
		rect(x - 20, y - 10 - 40, 10, 22);

		// Left glove
		fill(255, 215, 0); // Gold fill
		rect(x - 20, y + 8 - 40, 10, 4);

		// Right arm
		fill(0, 0, 200); // Blue shirt color
		rect(x + 10, y - 10 - 40, 10, 22);

		// Right glove
		fill(255, 215, 0); // Gold fill
		rect(x + 10, y + 8 - 40, 10, 4);

		// Left leg
		fill(0, 0, 200);
		rect(x - 10, y + 20 - 40, 10, 17);

		// Left boot
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y + 34 - 40, 10, 3);

		// Right leg
		fill(0, 0, 200);
		rect(x, y + 20 - 40, 10, 17);

		// Right boot
		fill(255, 215, 0); // Gold fill
		rect(x, y + 34 - 40, 10, 3);
		noStroke();

	}

	else {
		// Head
		fill(255, 220, 177); // Skin colour
		rect(x - 10, y - 30 - 40, 20, 20); // Head positioned above body

		// Hair
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

		// Visor
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y - 24 - 40, 20, 6);

		// Visor beam
		fill(255, 0, 0); // Red fill
		rect(x - 9, y - 22 - 40, 18, 2);

		// Partial mask
		fill(0, 0, 200);
		rect(x - 10, y - 18 - 40, 3, 8); // Left side
		rect(x + 7, y - 18 - 40, 3, 8); // Right side

		// Body
		fill(0, 0, 200); // Blue shirt
		rect(x - 10, y - 50, 20, 30); // Body

		// Diagonal strap
		fill(255, 215, 0); // Gold fill
		beginShape();
		vertex(x - 10, y - 10 - 40);
		vertex(x - 10, y - 7 - 40);
		vertex(x + 4, y - 1 - 40);
		vertex(x + 4, y - 4 - 40);
		endShape(CLOSE);

		// Vertical strap
		rect(x + 4, y - 10 - 40, 3, 25);

		// X-logo badge on chest
		fill(255, 0, 0); // Red fill
		ellipse(x + 6, y - 2 - 40, 5, 5); // Base ellipse
		line(x + 4, y - 4 - 40, x + 7, y - 1 - 40); // X-line 1
		line(x + 4, y - 1 - 40, x + 7, y - 4 - 40); // X-line 2

		// Belt
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y + 15 - 40, 7, 11);
		rect(x + 3, y + 15 - 40, 7, 11);

		// X-logo on belt
		fill(255, 0, 0); // Red fill
		rect(x - 3, y + 15 - 40, 6, 8); // Base rectangle
		line(x - 3, y + 15 - 40, x + 6, y + 23 - 40); // X-line 1
		line(x - 6, y + 23 - 40, x + 3, y + 15 - 40); // X-line 2

		// Left arm
		fill(0, 0, 200); // Blue shirt color
		rect(x - 20, y - 10 - 40, 10, 25);

		// Left glove
		fill(255, 215, 0); // Gold fill
		rect(x - 20, y + 8 - 40, 10, 7);

		// Right arm
		fill(0, 0, 200); // Blue shirt color
		rect(x + 10, y - 10 - 40, 10, 25);

		// Right glove
		fill(255, 215, 0); // Gold fill
		rect(x + 10, y + 8 - 40, 10, 7);

		// Left leg
		fill(0, 0, 200);
		rect(x - 10, y + 20 - 40, 10, 20);

		// Left boot
		fill(255, 215, 0); // Gold fill
		rect(x - 10, y + 34 - 40, 10, 6);

		// Right leg
		fill(0, 0, 200);
		rect(x, y + 20 - 40, 10, 20);

		// Right boot
		fill(255, 215, 0); // Gold fill
		rect(x, y + 34 - 40, 10, 6);

		noStroke();
	}
}