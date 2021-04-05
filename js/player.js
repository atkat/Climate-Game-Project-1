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

        console.log(game.playerImage)
       // image(game.token2Image, this.x, this.y, 100, 100) //test 

        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        // moving different directions on keyDowns
        this.go(keyCode);

    }
        
    jump() {
        this.velocity = -13;
    }

    // downwards is always accelerated -> this one is for keyPress
            // IS LAND ALSO ATTACK?
    land() {
        console.log('player downwards');
        this.velocity += 20;  
    }

    go(keyCode) {
        //left
        if (keyIsDown(37)) {    //&& this.x > 0
            this.x -= this.speed; 
        }
        //right
        if (keyIsDown(39) ) {     // && this.x > >= width - this.width
            this.x += this.speed; 
        }
        // downwards is always accelerated -> this one is for keyDress
        if (keyIsDown(40)) {
            this.y += this.speed; 
        }
        // maybe upwards too
            // if (keyIsDown(38)) {
            //     this.y -= this.speed; 
            //     console.log('player fly');
            // }
    }

//     attack (keyCode) {
//     // accelerate left, right or down to attack
//             if () {
//                 this.x -= this.speed; 
//             }
//             if () {
//                 this.x += this.speed; 
//             }
//             if () {
//                 this.y += this.speed; 
//             }
    

}
