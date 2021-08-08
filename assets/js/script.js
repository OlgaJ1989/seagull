let canvas = document.getElementById('game-area')
let ctx = canvas.getContext('2d')
/*let background = document.getElementById('background')*/

let seagullX = 200;
let seagullY = 400;
let speed = 7;
let score = 0;

let background = new Image()
background.src = 'assets/images/Seafront_01.JPG'
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

function gameLoop() {

    ctx.fillStyle = "green";
    ctx.fillRect(seagullX -50, seagullY -50, 50, 50)

    setTimeout (gameLoop, 1000/speed)
}

gameLoop()

