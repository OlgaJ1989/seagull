let canvas = document.getElementById('game-area')
let ctx = canvas.getContext('2d')
let backgroundCount = 0;

let seagullX = 200;
let seagullY = 400;
let speed = 15;
let score = 0;

let acceleration = 0;
let gravity = 3;
let gullFloor = 400;
let gullState = 0;
let gullJump = 0;
let keysPressed = {};

let hutTimer = 60;
let hutCount = 0;
let chairTimer = 10;
let chairCount = 0;

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

//Check state of seagull and jump if conditions met
function seagullJump() {    
    if (gullState == 0 && gullJump == 1) {
        acceleration = -40;
        gullState = 1;        
    }
}
//Check the position of the seagull and end the jump if conditions met
function seagullLand() {
    if (seagullY >= gullFloor) {
        acceleration = 0;
        gullState = 0;
        seagullY = gullFloor;
    }
}

//Generate hut obstacle at random intervals
function hutController() {
    hutTimer-=1;
    if (hutTimer<=0) {
        hutTimer= 150 + Math.floor(Math.random()*200);
        hut = {id:hutCount, hutX:1100, hutY:400, hutW:120, hutH:140}
        hutCount++;
    }
}

//Change the hut position
function moveHut() {    
    hut.hutX -= 10;
}

//Draw the hut to canvas
function drawHut() {
    let hutImg = new Image()
    hutImg.src = 'assets/images/hut5.png'
    ctx.drawImage(hutImg, hut.hutX -45, hut.hutY-45)
}

//Generate chair obstacle at random intervals
function chairController() {
    chairTimer-=1;
    if (chairTimer<=0) {
        chairTimer= 75 + Math.floor(Math.random()*150);
        chair = {id:chairCount, chairX:1100, chairY:400, chairW:120, chairH:140}
        chairCount++;
    }
}

//Change the chair position
function moveChair() {    
    chair.chairX -= 10;
}

//Draw the chair obstacle to canvas
function drawChair() {
    let chairImg = new Image()
    chairImg.src = 'assets/images/chair5.png'
    ctx.drawImage(chairImg, chair.chairX -45, chair.chairY-45)
}
//Main game loop
function gameLoop() {

    drawBackground()
    if (keysPressed[32] == true) {
        gullJump =1;
    } else if (keysPressed[32] == false) {
        gullJump =0;
    }
    //if the gull is in the air, apply gravity
    if (gullState == 1 ) {
        acceleration += gravity;
    } else if (gullState == 0) {
        acceleration =0;
    }
    seagullY += acceleration;
    
    hutController()
    if (hutCount>0) {
        moveHut()
    }
    chairController()
    if (chairCount>0) {
        moveChair()
    }
    
    seagullLand()
    seagullJump()
    if (hutCount>0) {
        drawHut()
    }
    if (chairCount>0) {
        drawChair()
    }
    //draw seagull
    let seagull = new Image()
    seagull.src = 'assets/images/gullSmall3.png'
    ctx.drawImage(seagull, seagullX -75, seagullY-65)
    
    setTimeout (gameLoop, 1000/speed)
}

window.onkeyup = function(e) {keysPressed[e.keyCode] = false}
window.onkeydown = function(e) {keysPressed[e.keyCode] = true}



  







//Call main game loop
gameLoop()

