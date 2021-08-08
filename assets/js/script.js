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

    let seagull = new Image()
    seagull.src = 'assets/images/gullSmall.png'
    ctx.drawImage(seagull, seagullX -90, seagullY-90)
    
    setTimeout (gameLoop, 1000/speed)
}

gameLoop()

