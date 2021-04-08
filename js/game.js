class Game {
    constructor() {      //?
    this.backgroundImages;
    this.clouds;
    this.decorationImages;
    this.playerImage;
    this.token1Image;
    this.token2Image;
    this.enemyImages;
    this.soundtrack;
    this.plop;
    this.crash;
    this.gameOverSound;
    this.winSound;
    this.gameOverSoundCounter = 0;
    this.yetAnotherCounter = 0;
    this.mode = 0;
    this.beforeHundred;
    this.afterHundred;
    }

    preload () {
        this.backgroundImages = [];
        this.beforeHundred = [
            { src: loadImage('assets/background/sky_background.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/sun.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/clouds.png'), x: 200, speed: 0.05 },
            { src: loadImage('assets/background/clouds2.png'), x: 500, speed: 0.05 },
            { src: loadImage('assets/background/clouds.png'), x: 400, speed: 0.25 },
            { src: loadImage('assets/background/clouds2.png'), x: 300, speed: 0.75 },
            { src: loadImage('assets/background/clouds.png'), x: 300, speed: 0.1 },
            { src: loadImage('assets/background/clouds2.png'), x: 0, speed: 0.2 },
            { src: loadImage('assets/background/mountains.png'), x: 0, speed: 0.5},
            { src: loadImage('assets/background/layer3.png'), x: 0, speed: 1 },
            //{ src: loadImage('assets/background/layer2.png'), x: 0, speed: 1.5 }
        ]
        this.afterHundred = [
            { src: loadImage('assets/background/blueskies.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/sun.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/clouds.png'), x: 200, speed: 0.25 },
            { src: loadImage('assets/background/clouds2.png'), x: 500, speed: 0.50 },
            { src: loadImage('assets/background/mountains.png'), x: 0, speed: 0.5},
            { src: loadImage('assets/background/layer3.png'), x: 0, speed: 1 },
        ]

        this.decorationImages = [ 
            {src: loadImage('assets/background/skeleton.png'), x: 1000, y: 320, speed: 1, width: 50, height: 60 },
            {src: loadImage('assets/background/animal-skeleton.png'), x: 1000, y: 550, speed: 1.2,  width: 60, height: 20},
            {src: loadImage('assets/background/skeleton.png'), x: 1000, y: 350, speed: 1.5, width: 50, height: 60 }, 
        ]

        this.treeImages = [ 
             {src: loadImage('assets/obstacles/chestnut-001.png'), y: 300, speed: 0.7 },
             {src: loadImage('assets/obstacles/chestnut-002.png'), y: 260, speed: 1 },
             {src: loadImage('assets/obstacles/trreez.png'), y: 380, speed: 0.7 },
             {src: loadImage('assets/obstacles/trreez.png'), y: 330, speed: 1 }
        ]
        this.treeLayer = {src: loadImage('assets/background/layer2.png'), x: 0, y:0, speed: 1.5 };
        this.playerImage = loadImage('assets/player/yorek.png');
        this.token1Image = loadImage('assets/obstacles/turbine.gif');
        this.token2Image = loadImage('assets/obstacles/solar-panel.png');
        //enemies
        this.enemyImagesPaths = [
            'assets/obstacles/factory-detailed.png', 
            'assets/obstacles/factory-abstract.png',
            'assets/obstacles/factory-colour.png',
            'assets/obstacles/factory1.png'
        ]
        this.enemyImages = this.enemyImagesPaths.map(a=>loadImage(a));
        //sounds
        this.soundtrack = loadSound('assets/sounds/skulls_adventure.mp3');
        this.crash = loadSound('assets/sounds/explosion.wav');
        this.plop = loadSound('assets/sounds/plop.wav');
        this.gameOverSound = loadSound('assets/sounds/gameover.wav');
        this.winSound = loadSound('assets/sounds/win.wav');
    
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.tokens = [];
        this.activeEnemies = [];
        this.activeTrees = [];
        this.backgroundImages = this.beforeHundred;
    }

    draw() {
        if (!this.soundtrack.isPlaying() ) {
           this.soundtrack.play() } 
        clear();
        this.background.draw();
        //this.obstacles();
        this.gameProgress();
        this.showTreeLayer();
        this.player.draw();
        this.end();   

        if (frameCount % 150 === 0) {
            Math.random() < 0.5 ? 
                this.tokens.push(new Token(this.token1Image))
                : this.tokens.push(new Token(this.token2Image));  
        }
        this.tokens.forEach(token => token.draw() ); 
        //collecting or tokens running off the screen
        //this.offScreen(this.tokens);
        this.tokens = this.tokens.filter( token => {
            if(token.x < 0 || token.collision(this.player)) 
             { return false 
             } else { return true}
        })

        //enemies
        if (frameCount % 230 === 0) {
            //random enemy (I could do this in enemy class)
            let randomEnemyIndex = Math.floor(Math.random() * this.enemyImages.length)
            this.enemyImage = this.enemyImages[randomEnemyIndex]; 
            //enemies currently on screen
            this.activeEnemies.push(new Enemy(this.enemyImage)); 
        }
        this.activeEnemies.forEach(enemy => enemy.draw() );
         //collisions or enemies running off the screen
        //this.offScreen(this.activeEnemies)
        this.activeEnemies = this.activeEnemies.filter( enemy => {
            if(enemy.x < 0 || enemy.collision(this.player)) 
             { return false 
             } else {return true}
        })   

    } 
    gameProgress () {
        // background change based on score
        //add and remove trees
        let treesWon = Math.floor(game.player.score/30)
        if (this.activeTrees.length<treesWon) {
            let randomTree = Math.floor(Math.random() * this.treeImages.length)
            this.treeImage = this.treeImages[randomTree]; 
            this.activeTrees.push(new Tree(this.treeImage));
        }
        if (this.activeTrees.length>treesWon) {
            let randomTree = Math.floor(Math.random() * this.treeImages.length)
            this.treeImage = this.treeImages[randomTree]; 
            this.activeTrees.pop();
        }
        this.activeTrees.forEach(tree => tree.draw() );
        //change to blue sky
        this.player.score >100 ?  this.backgroundImages = this.afterHundred : this.backgroundImages = this.beforeHundred
    }

    end () {
      
        if (this.player.score < -40) {
            noLoop();
            if (this.soundtrack.isPlaying()) {
                this.soundtrack.stop();
            }
            this.activeTrees = [];
            this.activeEnemies = [];
            this.tokens =[];

            if (this.gameOverSoundCounter === 0) {
                //this.gameOverSound.loop = false;
                this.gameOverSound.play();
                this.gameOverSoundCounter++
            } //else { this.gameOverSound.pause() }
            background('black')
            textSize(50);
            fill('pink'); 
            textAlign(CENTER, CENTER);
            text("Game Over",0, 0, 1000, 450);
            textSize(12);
            textAlign(CENTER,CENTER);
            text("Refresh   to   play   again.",0, 0, 1000, 600);

        }
        if (this.player.score >= 500) {
            if (this.soundtrack.isPlaying()) {
                this.soundtrack.stop();
            }
            noLoop();
            this.activeTrees = [];
            this.activeEnemies = [];
            this.tokens =[];

            if (this.gameOverSoundCounter === 0) {
                //this.gameOverSound.loop = false;
                this.winSound.play();
                this.gameOverSoundCounter++
            } //else { this.gameOverSound.pause() }
            this.tokens = [];
            this.activeEnemies = [];
            this.activeTrees = [];
            
            background('pink')
            textSize(50);
            fill('#283747'); 
            textAlign(CENTER, CENTER);
            text("You've   saved   us", 0, 0, 1000, 450);
            textSize(12);
            textAlign(CENTER,CENTER);
            text("Refresh   to   play   again.", 0, 0, 1000, 600);
            fill('#283747');
        }
     }
    //so that the trees don't seem to be flying
    showTreeLayer () {
        image(this.treeLayer.src, this.treeLayer.x, this.treeLayer.y, width, height)
        this.treeLayer.x -= this.treeLayer.speed
        image(this.treeLayer.src, this.treeLayer.x +width, this.treeLayer.y, width, height)
        if (this.treeLayer.x <= - width)  this.treeLayer.x = 0;
    }

    // offScreen(arr) {
    //     arr = arr.filter( item => {
    //         if(item.x < 0 || item.collision(this.player)) 
    //          { return false 
    //          } else {return true}
    //     })   
    // }
}
    // obstacles () {
    //   //  tokens
       
    // }

    
    
