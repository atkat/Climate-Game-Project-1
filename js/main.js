const game = new Game();
let mode;
let introFont;
let introFont2;
let introSound;
//let canvas;

function preload() {
    game.preload();
    introFont = loadFont('assets/ConnectionBold-ER1g.otf');
    introFont2 = loadFont('assets/Connection-arMJ.otf');
    introSound = loadSound('assets/sounds/elevator-music.wav')
}

function setup() {
    mode = 0;
    createCanvas(1000, 600);
    game.setup();
}

function draw() {
    clear();
    if (mode === 0) {
        //introSound.play();
        if (!introSound.isPlaying() ) {
            introSound.play() } 

        background('#F77B4D')
        fill('#F77B4D')
        stroke('#2E4053')
        strokeWeight(4)
        rect(22, 160, 470, 350)

        
        
        strokeWeight(1)
        textSize(45)
        fill('#2E4053')
        textFont('ConnectionBold-ER1g')
        
        textAlign(LEFT)
        text('Iorik   Saves   the   World', 250, 50, 600, 100)
        text('Press   ENTER   to   play', 520, 230)
        textSize(40)
        textAlign(LEFT)
        text('jump:   space  /  w  /  ↑', 520, 330)
        text('attack:    s   /   ↓', 520, 390)
        text('move:   a  /  ←   /  →  /  d ', 520, 450)

        textSize(33)
        textAlign(CENTER)
        fill('#2E4053')
        text('Collect      renewables   \n\nand   destroy   corporations   \n\nto     save     the        planet.', 
        28, 210, 470, 400)
        textSize(17)
        textAlign(CENTER)
        textFont('Connection-arMJ')
        text('Avoid the oil spills!!!', 28, 450, 470, 400)
        
        
    }
    if (mode === 1) { 
        game.draw();
        if (introSound.isPlaying() ) {
            introSound.stop() } 
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