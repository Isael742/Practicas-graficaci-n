class Ball {
	constructor() {
        this.reset();
		this.r = 10;

	}

	draw() {
		ellipse(this.x, this.y, this.r * 2);
	}

	move() {
		this.x += this.stepX;
		this.y += this.stepY;
	}

    edge(){
        if(this.y - this.r <= 0){
            this.stepY *= -1;
        } else if(this.y + this.r >= height){
            this.stepY -= 1;
        }

        if(this.x - this.r <= 0 || this.x + this.r >= width){
            this.reset();
        }
    }

    reset(){
        this.x = int(width / 2);
		this.y = int(height / 2);
        this.stepX = random(-5,5);
		this.stepY = random(-5,5);
    }
}