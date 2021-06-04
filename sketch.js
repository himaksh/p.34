var bg = "images/GamingBackground.png";
var hero;
function preload() {
//preload the images here

hero = loadImage("images/superHero-01.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(bg);
hero.display();
bg.display();
slingShot.display();
}

