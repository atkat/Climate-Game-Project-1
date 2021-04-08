const game = new Game();
let mode;
let introFont;

function preload() {
    game.preload();
    introFont = loadFont('assets/ConnectionBold-ER1g.otf')
}

function setup() {
    mode = 0;
    createCanvas(1000, 600)
    game.setup();
}


function draw() {
    //document.getElementById('loading').style.display = "block";
    clear()
    if (mode === 0) {
        textSize(35)
        textFont('ConnectionBold-ER1g')
        text('Press   ENTER   to   start', 200, 200)
        text('jump:  space  or  up', 200, 300)
        text('attack:  down', 200, 350)
        text('move:  left / right / up / down', 200, 400)
    }
    if (mode === 1) { 
        game.draw();
    }
}

function keyPressed() {
    if (keyCode===ENTER) {
        mode = 1;
    }
    // spacebar or arrow up makes the player jump
    if (keyCode === 32 || keyCode === 38) {
        game.player.jump();
    }
    // accelerated landing on arrow down 
    if (keyCode === 40) {
        game.player.land();
    }        
}


/* <div id="loading"></div>
<div id="game"></div>
<div id="end"></div> */
