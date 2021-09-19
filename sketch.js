function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(125);

    //rotating plain
    rectMode(CENTER);
    fill(0,255,0);
    rotateX(radians(frameCount));
    rotateY(radians(frameCount));
    rotateZ(radians(frameCount));
    plane(200, 200, 200, 200);
    push();
    fill(0,0,255);
    ellipse(200, 200, 100, 100);
    translate(100,0,0);
    pop();

    //rotating box
    push();
    fill('red');
    rotateX(radians(frameCount)*2);
    rotateY(radians(frameCount)*2);
    rotateZ(radians(frameCount)*2);
    translate(100,0,0);
    box(100);
    pop();

    //rotating sphere
    fill('yellow');
    rotateX(radians(frameCount));
    rotateY(radians(frameCount));
    rotateZ(radians(frameCount));
    translate(200,0,0);
    sphere(100, 20, 20);
}
