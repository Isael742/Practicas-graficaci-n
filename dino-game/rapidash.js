class Rapidash{
    constructor(img){
        this.img = img;
        this.x = 0;
        this.s = 100;
        this.y = height - this.s - 180;
    }
    
    draw(){
        image(this.img, this.x, this.y, this.s, this.s);
    }
}