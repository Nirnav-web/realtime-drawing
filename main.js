noseX=0;
noseY=0;
rwristX=0;
lwristX=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
} function draw(){
    background('lightblue');
    fill('darkblue');
    stroke('lightblue');
    square(noseX,noseY,diffrence);
}
function modelLoaded(){
    console.log("poseNet is inzialised");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
lwristX=results[0].pose.leftWrist.x;
rwristX=results[0].pose.rightWrist.x;
diffrence=floor(lwristX-rwristX);
console.log("left wristx="+lwristX+"right wristx"+rwristX+"difference"+diffrence);
}
}