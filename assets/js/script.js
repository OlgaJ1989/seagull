let canvas = document.getElementById('game-area')
let ctx = canvas.getContext('2d')

let seagullX = 200;
let seagullY = 400;
let speed = 7;
let score = 0;

function gameLoop() {
    ctx.fillStyle = "green";
    ctx.fillRect(seagullX -50, seagullY -50, 50, 50)

    setTimeout (gameLoop, 1000/speed)
}

function background() {
    //essentiallyclears screen
}

gameLoop()

/*
let hello = 'Hello'
console.log(hello)
*/