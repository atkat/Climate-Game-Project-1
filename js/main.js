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
        background('#F77B4D')
        rect(400,600)
        fill(0)
        stroke('#2E4053')
        textSize(40)
        fill('#2E4053')
        textFont('ConnectionBold-ER1g')
        text('Press   ENTER   to   play', 550, 200)
        text('jump:  space  or  up', 550, 300)
        text('move:  left / right', 550, 400)
        text('attack:  down', 550, 350)

        
        textSize(33)
        fill('#2E4053')
        text('Collect      renewables   \n\nand   destroy   corporations   \n\nto     save     the        planet.', 50, 170, 470, 600)

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

