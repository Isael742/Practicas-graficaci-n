class Paddle{
    constructor(isLeft){
        this.w = 25;
        this.h = 100;
        this.y = int(height / 2);
        this.step = 0;

        if(isLeft){
            this.x = 0;
        }else{ 
            this.x = width - this.w;
        }
    }

    draw(){
        rect(this.x, this.y, this.w, this.h);
    }

    move(dir){
        this.step = dir;
    }

    update(){
        this.y += this.step;
    }
}