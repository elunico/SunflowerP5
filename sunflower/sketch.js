let hdiv;
let button;
let speedSlider;
let slowerButton;
let fasterButton;

function slowerAction()
{
    let current = speedSlider.value();
    let n = current - 0.05;
    if (n < 0) {
        speedSlider.value(0);
    } else {
        speedSlider.value(n);
    }
}

function fasterAction()
{
    let current = speedSlider.value();
    let n = current + 0.05;
    if (n < 0) {
        speedSlider.value(0);
    } else {
        speedSlider.value(n);
    }
}

function setup()
{
    createCanvas(600, 400);
    background(51);
    createP("<strong>Revolutions / Dot: </strong>");

    hdiv = createDiv();
    frameRate(30);
    createP("<strong>Speed</strong>");
    speedSlider = createSlider(0, 2.75, 1, 0.005);
    speedSlider.style('width', '600px');
    createP("");
    slowerButton = createButton("Slower");
    slowerButton.mousePressed(slowerAction);
    fasterButton = createButton("Faster");
    fasterButton.mousePressed(fasterAction);
    button = createButton("Reset Speed");
    button.mousePressed(() => speedSlider.value(1));
}

let factor = 1;
let x = 20;
let y = 0;
let dy = 0;
let angle = 0;
let count = 0;

let h = 1;
let dh = 0.0005;
function draw()
{
    translate(600 / 2, 400 / 2);

    dh = factor * 0.0005 * speedSlider.value();

    fill(200, 220, 40);
    h -= dh;
    count = 0;
    background(51);
    angle = 0;
    x = 20;
    for (let i = 0; i < 300; i++) {
        angle += map(h, 0, 1, 0, PI * 2);
        rotate(angle);
        ellipse(x, y, 10, 10);
        count++;

        if (angle > PI * 2) {
            angle = 0;
            x += 5
        }
    }
    if (h < 0) {
        h = 0;
        factor = -1;
    } else if (h > 1) {
        h = 1;
        factor = 1;
    }
    hdiv.elt.innerHTML = h;
}
