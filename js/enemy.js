class Enemy {
    constructor(image) {
        this.image = image;
        // the coins should appear on the right side of the canvas
        this.width = 170;
        this.height = 170;
        this.x = width;
        this.y = height - this.height;  
    }

    collision(playerObj) {
        //console.log('collision', playerObj);
        const enemyX = this.x + this.width / 2
        const enemyY = this.y + this.height / 2

        const playerX = playerObj.x + playerObj.width / 2;
        const playerY = playerObj.y + playerObj.height / 2;
        // then use the p5 function dist() to calculate the distance
        if (dist(enemyX, enemyY, playerX, playerY) < 70 && playerObj.go() )  {
            // we have a collision // !!!  I can add DOM for colour change !!!
            game.player.score += 20;
            game.crash.play()
            return true;
        } else {
            return false;
        }
    }

    draw() {
        //console.log("this is enemy: ", this.image)
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
        if (this.x < 0) {
            game.player.score -= 20
        }
    }
}