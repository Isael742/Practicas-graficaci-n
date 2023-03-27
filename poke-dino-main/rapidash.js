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
		rect(this.x, this.y, this.s, this.s)
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
		return this.rectCollision(exeggutor);
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
}