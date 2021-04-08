const game = new Game();
let mode;
let introFont;
let introSound;
//let canvas;

function preload() {
    game.preload();
    introFont = loadFont('assets/ConnectionBold-ER1g.otf');
    introSound = loadSound('assets/sounds/elevator-music.wav')
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
        fill('#F77B4D')
        stroke('#2E4053')
        strokeWeight(4)
        rect(22, 110, 470, 325)
        
        strokeWeight(1)
        textSize(45)
        fill('#2E4053')
        textFont('ConnectionBold-ER1g')
        
        textAlign(LEFT)
        text('Press   ENTER   to   play', 520, 180)
        textSize(40)
        textAlign(LEFT)
        text('jump:   space  /  up  /  w', 520, 280)
        text('attack:   down  /  s', 520, 340)
        text('move:   <-  /  a  /  ->  /  d ', 520, 400)

        textSize(33)
        textAlign(CENTER)
        fill('#2E4053')
        text('Collect      renewables   \n\nand   destroy   corporations   \n\nto     save     the        planet.', 28, 170, 470, 400)
        
        //introSound.play();
        if (!introSound.isPlaying() ) {
            introSound.play() } 
        
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

