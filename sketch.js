function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(30);


}

// [...] Do not forget what comes before the draw()

function draw() {

  //TRANSPARENT BACKGROUND
    background(000,0,0,5);

//LINES 1
        //THE TRANSLATE BELOW CENTERS EVERYTHING
        push();
        translate(width/2,height/2);

        //rotate(frameCount*3);
        noStroke();
        fill(lerpColor(color(20,20,20,5), color(35,35,35,5),frameCount/60));
        ellipse(0,0,width/1.5+20,width/1.5+20);


        //LINHAS
        stroke(lerpColor(color('#ffe500'), color('#ffae00'),frameCount/600));
        line(width/3,0,(cos (frameCount*3)*width/3),(sin (frameCount*3)*width/3));

//ELIPSE TOP


        if (frameCount == 1200) {
        ;
          pop();
        }

//ELLIPSE TRAVELLER

noStroke();
fill(lerpColor(color('#ffe500'), color('#ffae00'),frameCount/600));
ellipse((cos (frameCount*3)*width/3),(sin (frameCount*3)*width/3),5,5);


//LINES 2

}
