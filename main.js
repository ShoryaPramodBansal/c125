left_wrist_x = 0;
rightwrist_x = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(10,50);

    canvas = createCanvas(800, 400);
    canvas.position (430, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    document.getElementById("font-size").innerHTML = "Font Size of the text will be = "+difference+"px";
    fill("#00ff0a");
    textSize(difference);
    text('Shorya',50,400);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized and Loaded!');
}

function gotPoses(results)
{
    if(results.length > 0)
 {
    console.log(results);

    rightwrist_x = results[0].pose.rightWrist.x;
    left_wrist_x = results[0].pose.leftWrist.x;

    difference = floor(left_wrist_x - rightwrist_x);

    console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y "+results[0].pose.rightWrist.y);
    console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y "+results[0].pose.leftWrist.y);

 }
}