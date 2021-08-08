let canvas = document.getElementById('game-area')
let ctx = canvas.getContext('2d')
let backgroundCount = 0;

let seagullX = 200;
let seagullY = 400;
let speed = 15;
let score = 0;
let acceleration = 0;
let gravity = 2;
let gullFloor = 400;
let gullState = 0;
let gullJump = 0;
let keysPressed = {};

//Load canvas background image
let background = new Image()
background.src = 'assets/images/seafront_03.jpg'
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

function seagullJump() {
    
    if (gullState == 0 && gullJump == 1) {
        acceleration = -30;
        gullState = 1;
        
    }
}

function seagullLand() {
    if (seagullY >= gullFloor) {
        acceleration = 0;
        gullState = 0;
        seagullY = gullFloor;
    }

}

//Main game loop
function gameLoop() {

    drawBackground()
    if (keysPressed[32] == true) {
        gullJump =1;
    } else if (keysPressed[32] == false) {
        gullJump =0;
    }
    if (gullState == 1 ) {
        acceleration += gravity;
    } else if (gullState == 0) {
        acceleration =0;
    }
    seagullY += acceleration;
    let hello = gullJump
    console.log(hello);
    
    seagullLand()
    seagullJump()
    let seagull = new Image()
    seagull.src = 'assets/images/gullSmall.png'
    ctx.drawImage(seagull, seagullX -90, seagullY-90)
    
    setTimeout (gameLoop, 1000/speed)
}

window.onkeyup = function(e) { keysPressed[e.keyCode] = false }
window.onkeydown = function(e) { keysPressed[e.keyCode] = true}



  







//Call main game loop
gameLoop()

