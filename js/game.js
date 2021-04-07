class Game {
    constructor() {      //?
    this.backgroundImages;
    this.decorationImages;
    this.playerImage;
    this.token1Image;
    this.token2Image;
    this.enemyImages;
    this.soundtrack;
    this.plop;
    this.crash;
    this.gameOverSound;
    this.gameOverSoundCounter = 0;
    }

    preload () {
        this.backgroundImages = [
            { src: loadImage('assets/background/sky_background.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/sun.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/clouds.png'), x: 200, speed: 0.05 },
            { src: loadImage('assets/background/clouds2.png'), x: 500, speed: 0.25 },
            { src: loadImage('assets/background/clouds.png'), x: 400, speed: 0.05 },
            { src: loadImage('assets/background/clouds2.png'), x: 300, speed: 0.75 },
            { src: loadImage('assets/background/clouds.png'), x: 300, speed: 0.1 },
            { src: loadImage('assets/background/clouds2.png'), x: 0, speed: 0.2 },
            { src: loadImage('assets/background/mountains.png'), x: 0, speed: 0.5},
            { src: loadImage('assets/background/layer3.png'), x: 0, speed: 1 },
            //{ src: loadImage('assets/background/layer2.png'), x: 0, speed: 1.5 }
        ]
        this.decorationImages = [ 
            {src: loadImage('assets/background/skeleton.png'), x: 1000, y: 320, speed: 1, width: 50, height: 60 },
            {src: loadImage('assets/background/animal-skeleton.png'), x: 1000, y: 550, speed: 1.2,  width: 60, height: 20} 
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
        this.gameOverSound.loop = false; 
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.tokens = [];
        this.activeEnemies = [];
        this.activeTrees = [];
    }

    draw() {
        if (!this.soundtrack.isPlaying() ) {
          // this.soundtrack.loop = false; 
           this.soundtrack.play() } 
        this.end();
        clear();
        this.background.draw();
        this.gameProgress();
        //to make the trees appear behind the first layer
        this.showTreeLayer();
        this.player.draw();
        
        //tokens
        if (frameCount % 300 === 0) {
            Math.random() < 0.5 ? 
                this.tokens.push(new Token(this.token1Image))
                : this.tokens.push(new Token(this.token2Image));  
        }
        this.tokens.forEach(token => token.draw() ); 
        //collecting tokens or tokens running off the screen
        this.tokens = this.tokens.filter( token => {
            if(token.x < 0 || token.collision(this.player)) 
             { return false 
             } else { return true}
        })

        //enemies
        if (frameCount % 300 === 0) {
            //random enemy (I could do this in enemy class)
            let randomEnemyIndex = Math.floor(Math.random() * this.enemyImages.length)
            this.enemyImage = this.enemyImages[randomEnemyIndex]; 
            //enemies currently on screen
            this.activeEnemies.push(new Enemy(this.enemyImage)); 
        }
        this.activeEnemies.forEach(enemy => enemy.draw() );

         //destroying enemies or enemies running off the screen
        this.activeEnemies = this.activeEnemies.filter( enemy => {
            if(enemy.x < 0 || enemy.collision(this.player)) 
             { return false 
             } else {return true}
        })   
    } 

    gameProgress () {
        // background change based on score
        //add trees
        //clear();
        let treesWon = Math.floor(game.player.score/30)
        if (this.activeTrees.length<treesWon) {
            let randomTree = Math.floor(Math.random() * this.treeImages.length)
            this.treeImage = this.treeImages[randomTree]; 
             this.activeTrees.push(new Tree(this.treeImage));
        }
        this.activeTrees.forEach(tree => tree.draw() );
       
        //removeClouds
        // if (game.player.score > 100) {
            
        // }
        //remove stuff when score drops
        //removeTrees
        //  this.activeTrees = this.activeTrees.filter( tree => {
        //     if(this.player.score < 70) 
        //      { return false 
        //      } else {return true}
        // })

        //add skeletons
        //add clouds?
    }

    end () {
        if (this.player.score > 20) {
            if (this.soundtrack.isPlaying())
                {this.soundtrack.pause();
            }
            if (this.gameOverSoundCounter === 0) {
                //this.gameOverSound.loop = false;
                this.gameOverSound.play();
                this.gameOverSoundCounter++
            } //else { this.gameOverSound.pause() }
          
            background('black')
            textSize(50);
            fill('pink'); 
            textAlign(CENTER, CENTER);
            text("Game Over",0, 0, 1000, 500);
            textSize(12);
            textAlign(CENTER,CENTER);
            text("Refresh to play again.",0, 0, 1000, 600);

            this.tokens = [];
            this.activeEnemies = [];
            this.activeTrees = [];
            
        }
        if (this.player.score >= 300) {
            this.tokens = [];
            this.activeEnemies = [];
            this.activeTrees = [];
            background('pink')
            textSize(50);
            textAlign(CENTER, CENTER);
            text("You've saved us", 0, 0, 1000, 500);
            textSize(12);
            fill('#283747'); 
            textAlign(CENTER,CENTER);
            text("Refresh to play again.", 0, 0, 1000, 600);
            fill('#283747');
        }
     }
    
    showTreeLayer () {
        image(this.treeLayer.src, this.treeLayer.x, this.treeLayer.y, width, height)
        this.treeLayer.x -= this.treeLayer.speed
        image(this.treeLayer.src, this.treeLayer.x +width, this.treeLayer.y, width, height)
        if (this.treeLayer.x <= - width) {
            this.treeLayer.x = 0;
        }

    }
}
