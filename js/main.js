const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(1000, 600)
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    // spacebar or arrow up makes the player jump
    if (keyCode === 32 || keyCode === 38) {
        game.player.jump();
    }
    // accelerated landing on arrow down 
    if (keyCode === 40) {
        game.player.land();
    }        
}
