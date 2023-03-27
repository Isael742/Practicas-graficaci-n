class Rapidash {
	constructor(img) {
		this.img = img;
		this.x = 0;
		this.s = 100;
		this.y = height - this.s;
		this.vy = 0;
		this.gravity = 2;
	}

	draw() {
		noFill();
		ellipseMode(CORNER);
		ellipse(this.x, this.y, this.s, this.s)
		image(this.img, this.x, this.y, this.s, this.s);
	}

	jump() {
		if(this.y === height - this.s)
			this.vy = -35;
	}

	update() {
		this.y += this.vy;
		this.vy += this.gravity;
		this.y = constrain(this.y, 0, height - this.s);
	}

	collision(exeggutor) {
		return this.circleCollision(exeggutor);
	}

	rectCollision(exeggutor){
		const left = this.x;
		const right = this.x + this.s;
		const top = this.y;
		const botton = this.y + this.s;
		const eLeft = exeggutor.x;
		const eRight = exeggutor.x + exeggutor.s;
		const eTop = exeggutor.y;
		const eBotton = exeggutor.y + exeggutor.s;
		
		return right >= eLeft && left <= eRight && top >= eBotton && botton <= eTop;
	}

	circleCollision(exeggutor){
		const x1 = this.x + this.s * 0.5;
		const y1 = this.y + this.s * 0.5;
		const x2 = exeggutor.x + exeggutor.s * 0.5;
		const y2 = exeggutor.y + exeggutor.s * 0.5;

		return this.s * 0.5 + exeggutor.s * 0.5 >= this.distance(x1,y1,x2,y2);
	}
	

	distance(x1, y1, x2, y2){
		let dx = abs(x2 - x1);
		let dy = abs(y2 - y1);

		return sqrt(pow(dx, 2) + pow(dy, 2))
	}
}