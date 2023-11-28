const zad1 = document.querySelector(".zad1");
const zad2 = document.querySelector(".zad2");
const zad3 = document.querySelector(".zad3");
const zad4 = document.querySelector(".zad4");
const zad5 = document.querySelector(".zad5");
const ctx = zad1.getContext("2d");
const ctx2 = zad2.getContext("2d");
const ctx3 = zad3.getContext("2d");
const ctx4 = zad4.getContext("2d");
const ctx5 = zad5.getContext("2d");

// zad1

ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.fillRect(10, 10, 200, 100);

ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.fillRect(220, 10, 200, 100);

ctx.fillStyle = "blue";
ctx.strokeStyle = "black";
ctx.fillRect(430, 10, 200, 100);

ctx.strokeStyle = "yellow";
ctx.strokeRect(10, 120, 200, 100);

ctx.strokeStyle = "purple";
ctx.strokeRect(220, 120, 200, 100);

ctx.strokeStyle = "orange";
ctx.strokeRect(430, 120, 200, 100);

// zad2

ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(50, 150);
ctx2.lineTo(150, 150);
ctx2.closePath();

ctx2.strokeStyle = 'black';
ctx2.stroke();

//zad3

ctx3.beginPath();
ctx3.moveTo(30, 30);
ctx3.lineTo(30, 130);
ctx3.lineTo(130, 130);
ctx3.lineTo(130, 30);
ctx3.closePath();

ctx3.strokeStyle = 'black';
ctx3.stroke();

//zad4

const linearGradient1 = ctx4.createLinearGradient(10, 10, 150, 50);
linearGradient1.addColorStop(0, 'red');
linearGradient1.addColorStop(0.33, 'yellow');
linearGradient1.addColorStop(0.66, 'green');
linearGradient1.addColorStop(1, 'blue');

ctx4.fillStyle = linearGradient1;
ctx4.fillRect(10, 10, 150, 50);

const linearGradient2 = ctx4.createLinearGradient(170, 10, 320, 50);
linearGradient2.addColorStop(0, 'red');
linearGradient2.addColorStop(0.5, 'green');
linearGradient2.addColorStop(1, 'blue');

ctx4.fillStyle = linearGradient2;
ctx4.fillRect(170, 10, 150, 50);

const radialGradient1 = ctx4.createRadialGradient(100, 180, 10, 125, 200, 80);
radialGradient1.addColorStop(0, 'red');
radialGradient1.addColorStop(0.5, 'green');
radialGradient1.addColorStop(1, 'blue');

ctx4.fillStyle = radialGradient1;
ctx4.beginPath();
ctx4.arc(100, 180, 60, 0, 2 * Math.PI);
ctx4.fill();

const radialGradient2 = ctx4.createRadialGradient(300, 180, 10, 325, 200, 80);
radialGradient2.addColorStop(0, 'green');
radialGradient2.addColorStop(0.5, 'purple');
radialGradient2.addColorStop(1, 'red');

ctx4.fillStyle = radialGradient2;
ctx4.beginPath();
ctx4.arc(300, 180, 60, 0, 2 * Math.PI);
ctx4.fill();

//zad5

const square = 40;

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        let color;

        if ((row + col) % 2 == 0) {
            color = '#777';
        }
        else {
            color = '#fff'
        }

        ctx5.fillStyle = color;
        ctx5.fillRect(col * square, row * square, square, square);
    }
}