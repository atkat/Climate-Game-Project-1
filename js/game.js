class Game {
    constructor() {
    this.backgroundImages;
    this.playerImage;
    this.token1Image;
    this.token2Image;
    this.enemyImages;
    this.soundtrack;
    this.crash;
    }

    preload () {
        this.backgroundImages = [
            { src: loadImage('assets/background/sky_background.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/sun.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/clouds2.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/layer4.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/layer3.png'), x: 0, speed: 2 }
        ]
        this.playerImage = loadImage('assets/player/bb8.gif');
        this.token1Image = loadImage('assets/obstacles/turbine2.gif');
        this.token2Image = loadImage('assets/obstacles/solar-panel.png');
        

        this.enemyImagesPaths = [
            'assets/obstacles/factory-detailed.png', 
            'assets/obstacles/factory-abstract.png',
            'assets/obstacles/factory-simple.png'
        ]

        this.enemyImages = this.enemyImagesPaths.map(a=>loadImage(a));
        
        //sounds
        //this.soundtrack = loadSound('assets/sounds/game-music.mp3')
        //this.crash = loadSound('explosion.wav')
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.tokens = [];
        this.activeEnemies = [];
       // this.soundtrack.play()
    }

    draw() {
        //this.soundtrack.play();
        clear();
        this.background.draw();
        this.player.draw();
        //tokens
        if (frameCount % 300 === 0) {
            Math.random() < 0.5 ? 
                this.tokens.push(new Token(this.token1Image))
                : this.tokens.push(new Token(this.token2Image));  
        }
        this.tokens.forEach(token => token.draw() ); 
        //enemies
        if (frameCount % 200 === 0) {
            //random enemy
            let random = Math.floor(Math.random() * this.enemyImages.length)
            this.enemyImage = this.enemyImages[random]; 
            //enemies currently on screen
            this.activeEnemies.push(new Enemy(this.enemyImage)); 
        }
        this.activeEnemies.forEach(enemy => enemy.draw() );

        //collecting tokens or tokens running off the screen
        this.tokens = this.tokens.filter( token => {
            if(token.x < 0 || token.collision(this.player)) 
             { return false 
             } else { return true}
        })
         //destroying enemies or enemies running off the screen
        this.activeEnemies = this.activeEnemies.filter( enemy => {
            if(enemy.x < 0 || enemy.collision(this.player)) 
             { return false 
             } else {return true}
        })
       
        
    } 

}

