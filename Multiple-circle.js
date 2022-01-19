function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function createRandomCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    let radius = Math.floor(25);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

function multipleCircle() {
    for (let i = 0; i < 10; i++) {
        createRandomCircle();
    }
}

multipleCircle();
