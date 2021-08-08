let canvas = document.getElementById('game-area')
let ctx = canvas.getContext('2d')
let backgroundCount = 0;

let seagullX = 200;
let seagullY = 400;
let speed = 7;
let score = 0;

//Load canvas background image
let background = new Image()
background.src = 'assets/images/Seafront_01.JPG'
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

//Calculate background position and display image 
function drawBackground() {
    backgroundCount +=4;
    if (backgroundCount>=1000) {
        backgroundCount -= 1000;
    }
    ctx.drawImage(background,0 - backgroundCount,0);
    ctx.drawImage(background,1000 - backgroundCount,0);
} 

//Main game loop
function gameLoop() {

    drawBackground()
    let seagull = new Image()
    seagull.src = 'assets/images/gullSmall.png'
    ctx.drawImage(seagull, seagullX -90, seagullY-90)
    
    setTimeout (gameLoop, 1000/speed)
}

//Call main game loop
gameLoop()

