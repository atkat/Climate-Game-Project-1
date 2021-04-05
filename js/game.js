class Game {
    constructor() {
    this.backgroundImages;
    this.playerImage;
    this.token1Image;
    this.token2Image;
    this.enemyImage;
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
        this.enemyImage = loadImage('assets/obstacles/smoke-stack1.jpg');
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.tokens = [];
        this.enemies = [];
    }

    draw() {
        //console.log('this is the game drawing');
        clear();
        this.background.draw();
        this.player.draw();
        this.enemies.draw();
        
        if (frameCount % 80 === 0) {
            Math.random() < 0.5 ? 
                this.tokens.push(new Token(this.token1Image))
                : this.tokens.push(new Token(this.token2Image));  
        }
        this.tokens.forEach(token => token.draw() );

        if (frameCount % 80 === 0) {
            this.enemies.push(new Enemy(this.enemyImage))
        }
        

    }

}


   
// this.obstacles = this.obstacles.filter(obstacle =>  {
        //          if (obstacle.collision(this.player) || obstacle.x < 0) 
        //               {return false
        //          } else {return true}
        //    });