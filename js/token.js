class Token {
    constructor(image) {
        this.image = image;
        // the coins should appear on the right side of the canvas
        this.width = 50;
        this.height = 80;
        this.x = width;
        this.y = (Math.random() * height) / 2.5;
    }

    collision(playerInfo) {
        const tokenX = this.x + this.width / 2
        const tokenY = this.y + this.height / 2

        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;
        // then use the p5 function dist() to calculate the distance
        if (dist(tokenX, tokenY, playerX, playerY) > 70) {
            return false;
        } else {
            // we have a collision
            game.plop.play();
            game.player.score += 35;
            return true;
        }
    }

    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}
