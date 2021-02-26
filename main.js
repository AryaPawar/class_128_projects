song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on( 'pose',gotposes);
}

function modelLoaded(){
    console.log('posNet is intialized')
}

function draw(){
   image(video, 0,0,600,500);   
}   
function preload(){
song= loadSound("music.mp3");
song= loadSound("music.mp2");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate();
}

function gotposes(results){
if(results.length > 0)
{
console.log(results);;
leftWristY = results[0].pose.leftWrist.y;
leftWristX = results[0].pose.leftWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
 rightWristX  = results[0].pose.rightWrist.x;
 console.log("leftWristX = " + leftWristX +"leftWristY" + leftWristY);
 console.log("rightWristX = "+ rightWristX + "rightWristY" + rightWristY);
}
}