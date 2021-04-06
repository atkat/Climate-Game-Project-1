class Player {

    constructor() {
        this.score = 0;
        this.gravity = 0.3;
        this.velocity = 2;
        this.speed = 20;
        this.width = 100;
        this.height = 140;
        this.x = 0;
        // height of the canvas - height of the player
        this.y = height - this.height;
    }

    draw() {
        //console.log('this is the player drawing')
        // the gravity pushes the player down
        this.velocity += this.gravity
        this.y += this.velocity;
        // this prevents the  player from moving further down
        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
        // this prevents the  player from moving further up
        if (this.y < 0) this.y = 0;
        // this prevents the  player from moving further left
        if (this.x < 0) this.x = 0;
        // // this prevents the  player from moving further right
        if (this.x >= width - this.width) {
            this.x = width - this.width;
        }

        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        // moving different directions on keyDowns ???
        this.go(keyCode);

        //score
        this.scoreStr = "Score: " + this.score;
        textSize(32);
        textFont('Helvetica')
        text(this.scoreStr, 20, 20, 300, 300);
        fill('#21435F');   
        textStyle(BOLD);
    }

    jump() {
        //on keyPress
        this.velocity = -15;
    }

    // downwards is always accelerated -> this one is for keyPress
    land() {
        console.log('player downwards');
        this.velocity += 20;  
    }

    go(keyCode) { //moving and attacking
        //left
        if (keyIsDown(37) && game.enemies.length >= 0) {    //&& this.x > 0
            this.x -= 1.5*this.speed; 
            return true;
        }
        if (keyIsDown(37)) {    
            this.x -= this.speed; 
        } 
        //right
        if (keyIsDown(39) && game.enemies.length >= 0) {    //&& this.x > 0
            this.x += 1.5*this.speed; 
            return true
        }
        if (keyIsDown(39)) {     // && this.x > >= width - this.width
            this.x += this.speed; 
            console.log(this.x)
        }
        // down 
        if (keyIsDown(40) && game.enemies.length >= 0) {    //&& this.x > 0
            this.y += 1.5*this.speed; 
            return true
        }
        if (keyIsDown(40)) {
            this.y += this.speed; 
        }

    }   
    
}
