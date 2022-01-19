class funnyCircles {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    //Vẽ hình tròn với bán kính cố định
    createFixCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    //Vẽ hình tròn với bán kính ngẫu nhiên
    createRandomCircle() {
        let ctx1 = document.getElementById("myCanvas1").getContext("2d");
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        //    Với màu ngẫu nhiên
        ctx1.fillStyle = getRandomColor();
        ctx1.fill();
    }

//    Vẽ hình tròn với toạ độ ngẫu nhiên
    createRandomCoordinateCircle() {
        let ctx2 = document.getElementById("myCanvas2").getContext("2d");
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx2.fillStyle = getRandomColor();
        ctx2.fill();
    }
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

let fixCircle = new funnyCircles(100, 100, 50);
fixCircle.createFixCircle();
let randomCircle = new funnyCircles(100, 100, Math.floor(Math.random() * 80));
randomCircle.createRandomCircle();
let randomCoordinateCircle = new funnyCircles(Math.random() * 1000, Math.random() * 500, 30);
randomCoordinateCircle.createRandomCoordinateCircle();


