function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(70, 200);
    camera = createCapture(VIDEO);
    camera.hide();
    
    
    }
    
    function draw() {
    image(camera, 100, 80, 300, 250);
     
    stroke(168, 10, 10);
    fill(168 , 10 , 10);

    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 360, 50);
    circle(460, 360, 50);

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(68, 27, 375, 25);
    rect(68, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);


    
    }
    
    function take_snapshot() {
    save("frame.png");
    }