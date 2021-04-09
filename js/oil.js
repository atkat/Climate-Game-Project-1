class Oil {
    constructor(image) {
        this.image = image;
        // the coins should appear on the right side of the canvas
        this.width = 120;
        this.height = 120;
        this.x = width;
        this.y = height - this.height
    }

    collision(playerInfo) {
        console.log('collision', playerInfo);
        const oilX = this.x + this.width /  2
        const oilY = this.y + this.height / 2

        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;
        // then use the p5 function dist() to calculate the distance
        if (dist(oilX, oilY, playerX, playerY) < 30)  {
            game.player.score = -50
        }   
    }

    draw() {
        console.log("this is oil: ", this.image)
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}