// player box
let player;    // Player sprite
let cube;   // Image for player sprite
let bg;     // Background image

// game variables
const TILE_SIZE = 50;
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
  startCoordinate = [TILE_SIZE, height - TILE_SIZE / 2];

  player = new Sprite(startCoordinate[0], startCoordinate[1], TILE_SIZE ,TILE_SIZE);  // (x, y, width, height)
  player.img = cube; // Load sprite image
  player.friction = 0;
  player.bounciness = 0;
  player.collider = "none";

  // Ground sprites group
  ground = new Group();
  ground.tile = "g";    // "g" represents ground in tile map
  ground.w = TILE_SIZE; // Width
  ground.h = TILE_SIZE; // Height
  ground.color = "black";
  ground.stroke = "white";  // Outline colour
  ground.collider = "static"; // It will not move

  // Spikes sprites group
  spikes = new Group();
  spikes.tile = "s";
  spikes.w = TILE_SIZE;
  spikes.h = TILE_SIZE;

  new Tiles(tileMap1, 0, 0, TILE_SIZE, TILE_SIZE);  // Create tiles from tileMap1
}

function draw() {
  clear();  // Erase the previous frame before drawing the next
  image(bg, 0, 0, 800, 600);    // (image, x, y, width, height)
}
