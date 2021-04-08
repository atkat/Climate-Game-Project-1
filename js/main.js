const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(1000, 600)
    game.setup();
}


function draw() {
   // document.getElementById('loading').style.display = "block";
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

// <div>
// <img id="loading" src="https://venturebeat.com/wp-content/uploads/2014/10/loading_desktop_by_brianmccumber-d41z4h6.gif?resize=1200%2C600&strip=all" alt="Loading">
// </div>
{/* <div id="loading"></div>
<div id="game"></div>
<div id="end"></div> */}
