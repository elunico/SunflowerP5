let hdiv;

function setup()
{
    createCanvas(600, 400);
    background(51);
    hdiv = createDiv();
    frameRate(30);
}

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
    if (h < 0 || h > 1) {
        dh = -dh;
    }
    hdiv.elt.innerHTML = h;
}
