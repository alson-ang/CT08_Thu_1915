let handPose;   // ML Model
let video;      // Webcam video
let videoW = 640;
let videoH = 480;
let hands = []; // global variable to store hands

// Game sprites
let fingerTip;
let balloon;
let leftWall, rightWall, topWall, botWall;

function preload() {
  // Create options for model settings
  let options = {
    flipped: true,
    runtime: "tfjs",
    modelType: "full",
    detectorModelUrl: undefined, //default to use the tf.hub model
    landmarkModelUrl: undefined //default to use the tf.hub model
  }

  // Load the handPose model
  handPose = ml5.handPose(options);
}

function setup() {
  createCanvas(videoW, videoH);
  world.gravity.y = 5;

  let constraints = {
    video: {
      mandatory: {
        minWidth: videoW,
        minHeight: videoH,
      },
      optional: [{ minFrameRate: 60 }],
    },
    audio: false,
    flipped: true // makes the video mirrored
  };

  // Create the webcam video and hide it
  video = createCapture(constraints);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video + model
  handPose.detectStart(video, gotHands);

  // Game sprites
  fingerTip = new Sprite();
  fingerTip.diameter = 60;
  fingerTip.collider = "kinematic"; // No physics but collidable
  fingerTip.color = "rgba(0, 255, 0, 0.05)"; // a = transparency

  balloon = new Sprite();
  balloon.x = width / 2;
  balloon.y = height * 0.1; // Top 10% of canvas
  balloon.diameter = 80;
  balloon.collider = "dynamic"; // Physics and collidable
  balloon.color = "rgba(255, 225, 0, 0.9)";
  balloon.bounciness = 0.8; // 1 = perfect elasticity
  balloon.mass = 5;
  balloon.drag = 0.2;

  // Boundary walls
  leftWall = new Sprite();
  leftWall.x = 0;
  leftWall.y = height / 2;
  leftWall.width = 5;
  leftWall.height = height;
  leftWall.collider = "static";
  
  rightWall = new Sprite();
  rightWall.x = 0;
  rightWall.y = height / 2;
  rightWall.width = 5;
  rightWall.height = height;
  rightWall.collider = "static";

  topWall = new Sprite();
  topWall.x = 0;
  topWall.y = height / 2;
  topWall.width = 5;
  topWall.height = height;
  topWall.collider = "static";

  botWall = new Sprite();
  leftWall.x = 0;
  leftWall.y = height / 2;
  leftWall.width = 5;
  leftWall.height = height;
  leftWall.collider = "static";
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, videoW, videoH);

  // Draw all the tracked hand points
  // Loop through all the hands detected (can detect left or right)
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i]; // current hand (left or right)

    // Keypoint 8 = INDEX_FINGER_TIP
    let keypoint = hand.keypoints[8];

    // make sprite follow finger tip position
    fingerTip.x = keypoint.x;
    fingerTip.y = keypoint.y;
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}