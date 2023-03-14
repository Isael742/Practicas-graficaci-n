class Ball {
	constructor() {
        this.reset();
		this.r = 10;

	}

	draw() {
        stroke('black');
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

    colicion(P1_X, P1_Y, P2_X, P2_Y) {
        if(((this.x >= P1_X && this.x <= P1_X+20) && (this.y>=P1_Y && this.y<=P1_Y+120)) || ((this.x <= P2_X && this.x >= P2_X-20) && (this.y>=P2_Y && this.y<=P2_Y+120))) {
            this.stepX *= -1;
        }
    }

    reset(){
        this.x = int(width / 2);
		this.y = int(height / 2);
        this.stepX = random([-5,5]);
		this.stepY = random([-5,5]);
    }
}