let bgImg;
let bg1, bg2;
let rapidash_img, rapidash;

function preload(){
    bgImg = loadImage('assets/bg.png');
    rapidash_img = loadImage('assets/rapidash.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, windowWidth);
    rapidash = new Rapidash(rapidash_img)
}

function draw(){
    bg1.draw();
    bg2.draw();
    rapidash.draw();

    bg1.scroll();
    bg2.scroll();
}