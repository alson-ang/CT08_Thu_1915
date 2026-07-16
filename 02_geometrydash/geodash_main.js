// player box
let player;    // Player sprite
let cube;   // Image for player sprite
let bg;     // Background image

// game variables
let tileMap1;   // Tile map for level design
let spike;  // Image for spike sprite

// world building groups
let ground;
let spikes;
let orb;
let finishLine;

// image sprites


// menu


// sound assets


function preload() {
    cube = loadImage("assets/cube.png");
    bg = loadImage("assets/geobg.png");
    tileMap1 = loadStrings("stages/tiles1.txt");
    spike = loadImage("assets/spike.png");
}

function setup() {
  new Canvas(700, 600);
  world.gravity.y = 32;

  // Create player sprite
  startCoordinate = [50, height - 25];

  player = new Sprite(startCoordinate[0], startCoordinate[1], 50 ,50);  // (x, y, width, height)
  player.img = cube; // Load sprite image
  player.friction = 0;
  player.bounciness = 0;
  player.collider = "none";

  // Ground
}

function draw() {
  clear();  // Erase the previous frame before drawing the next
  image(bg, 0, 0, 800, 600);    // (image, x, y, width, height)
}











