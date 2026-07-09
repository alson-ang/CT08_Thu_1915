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

    let age = 13;

    if (age <= 9) {
        console.log("Lower Primary");
    } else if (age <= 12) {
        console.log("Upper Primary");
    } else {
        console.log("Secondary");
    }

    let count = 0;

    while (count < 10) {
        console.log(count);
        count++;
    }

    let groceries = ["apple", "bread", "milk"];

    groceries.push("orange")
    groceries.push("butter")
}

function draw() {

}