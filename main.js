function preload(){
}
function setup(){
    canvas=createCanvas(600,510);
    canvas.position(425,135);
    video=createCapture(VIDEO);
    video.hide();
}
function snap(){
    save('snapshot.png');
}
function draw(){
    image(video,150,115,300,300);
    fill(200,0,200);
    stroke(0,0,0);
    circle(525,75,100);
    fill(200,0,200);
    stroke(0,0,0);
    circle(75,75,100);
    fill(200,0,200);
    stroke(0,0,0);
    circle(525,450,100);
    fill(200,0,200);
    stroke(0,0,0);
    circle(75,450,100);
    fill(127.5,255,0);
    stroke(127.5,255,0);
    rect(80,60,450,30);
    rect(80,440,450,30);
    rect(80,60,30,410);
    rect(500,60,30,410);
}