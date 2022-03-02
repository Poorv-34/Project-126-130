songUndertale = "";
songCrabRave = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song1_status = "";
song2_status = "";


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

function modelLoaded() {
    console.log("poseNet is initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);
        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("FF0000");
    stroke("00FF00");

 song1_status = songUndertale.isPlaying();
 song2_status = songCrabRave.isPlaying();
 

 if (scoreLeftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20);
    songUndertale.stop();

    if (song2_status == false) {
        songCrabRave.play();
        document.getElementById("song_name").innerHTML = " Playing - Crab Rave";
}
}
}