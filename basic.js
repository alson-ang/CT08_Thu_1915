function setup() {
    new Canvas(800, 400);   // Background size
    background("yellow");    // Background colour

    fill("black");    // Text colour
    textSize(24);   // Text size
    
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
        yPos = 10 + (i * 10)
        text(i, 100, yPos)
    }

    let age = 9

    if (age <= 9) {
        
    }
}

function draw() {

}