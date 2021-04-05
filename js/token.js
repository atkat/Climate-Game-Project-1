class Token {
    constructor(image) {
        this.image = image;
        // the coins should appear on the right side of the canvas
        this.x = width;
        this.y = (Math.random() * height) / 2.5;
        this.width = 50;
        this.height = 80;
    }

    collision(playerInfo) {
        //console.log('collision', playerInfo);
        const tokenX = this.x + this.width / 2
        const tokenY = this.y + this.height / 2

        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;
        // then use the p5 function dist() to calculate the distance
        if (dist(tokenX, tokenY, playerX, playerY) > 60) {
            // !!!  I can add DOM for coloud change !!!
            return false;
        } else {
            // we have a collision
            game.player.score += 10;
            return true;
        }
    }

    draw() {
        console.log("this is enemy: ", this.image)
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}