// player box
let player;    // Player sprite
let cube;   // Image for player sprite
let bg;     // Background image

// game variables


// world building groups


// image sprites


// menu


// sound assets


function preload() {
    cube = loadImage("assets/cube.png");
    bg = loadImage("assets/geobg.png");
}

function setup() {
  new Canvas(700, 600);
  world.gravity.y = 32;

  // Create player sprite
  startCoordinate = [50, height - 25];
  player = new Sprite(50, height, 50 ,50);  // (x, y, width, height)
  player.img = cube;
  player.friction = 0;
  player.bounciness = 0;
  player.collider = "none";
}

function draw() {
  
}











