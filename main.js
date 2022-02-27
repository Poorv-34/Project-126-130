songUndertale = "";
songCrabRave = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;


function preload() {
songUndertale = loadSound("Undertale.mp3");
songCrabRave = loadSound("crab_rave.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}