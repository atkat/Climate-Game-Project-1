const game = new Game();
let mode;
let introFont;
//let canvas;

function preload() {
    game.preload();
    introFont = loadFont('assets/ConnectionBold-ER1g.otf')
}

function setup() {
    mode = 0;
    createCanvas(1000, 600);
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
        textSize(45)
        fill('#2E4053')
        textFont('ConnectionBold-ER1g')
        text('Press   ENTER   to   play', 520, 190)
        textSize(40)
        text('jump:   space  /  up  /  w', 520, 280)
        text('attack:   down  /  s', 520, 340)
        text('move:   <-  /  a  /  ->  /  d ', 520, 400)

        textSize(33)
        fill('#2E4053')
        text('Collect      renewables   \n\nand   destroy   corporations   \n\nto     save     the        planet.', 30, 170, 470, 600)

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
    if (keyCode === 32 || keyCode === 38 || keyCode === 87) {
        game.player.jump();
    }
    // accelerated landing on arrow down 
    if (keyCode === 40 || keyCode === 83) {
        game.player.land();
    }        
}

