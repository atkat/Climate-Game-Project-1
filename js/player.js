class Player {

    constructor() {
        this.score = 0;
        this.gravity = 1;
        this.velocity = 4;
        this.speed = 16;
        this.acceleration = 20;
        this.width = 160;
        this.height = 140;
        this.x = 0;
        // height of the canvas - height of the player
        this.y = height - this.height;
    }

    draw() {
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
        
        // moving different directions on keyDowns  !!! Happemns on every draw()
        //can be wriiten into game.draw()
        this.go(keyCode); 

        //score
        this.scoreStr = "SCORE:  " + this.score;
        textSize(52);
        textFont('ConnectionBold-ER1g')
        text(this.scoreStr, 10, 25, 300, 350);
        fill('#172D42');   
        textStyle(BOLD);
    }

    jump() {
        //on keyPress
        this.velocity = -15;
    }

    // downwards is always accelerated -> this one is for keyPress
    land() {
        this.velocity += 20;  
    }

    go(keyCode) { //moving and attacking
        //left
        if (keyIsDown(37) || keyIsDown(65)) {    
            this.x -= this.speed; 
        } 
        //right
        if (keyIsDown(39) || keyIsDown(68)) {     // && this.x > >= width - this.width
            this.x += this.speed; 
        }
        // down 
        if (keyIsDown(40) || keyIsDown(83) ) {    //&& this.x > 0
            this.y += 1.5*this.speed; 
            return true
        }
        if (keyIsDown(38) || keyIsDown(87)) {
            this.y += -20;
        }
        if (keyIsDown(40)) {
            this.y += this.speed+4; 
        }
    }   
    
}
