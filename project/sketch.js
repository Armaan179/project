var playerName;
var gameState=0;
var form;
var plr, comp;
var bgimage,plrimage,compimage;

function preload(){
  bgimage = loadImage("track.webp");
  plrimage = loadImage("running-removebg-preview.png");
  compimage = loadImage("girl_running2-removebg-preview.png");


}

function setup() {

  createCanvas(displayWidth,displayHeight);
  if (gameState===0) {
    form = new Form();
    form.display();
    plr = createSprite(1225,375,50,200);
    comp = createSprite(200,375,50,200);
  }
  
 
}

function draw() {

  if (gameState === 1) {
    playGame();
  }

}
function playGame(){
  plr.addImage("plr",plrimage);
  comp.addImage("comp",compimage);
  //add movement here
 background(bgimage);
  drawSprites();
}