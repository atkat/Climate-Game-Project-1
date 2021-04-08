
class Background {
    constructor () {
        this.decoImage;
        this.treeImage;
    }
    draw() {
        //draw background
        this.background(game.backgroundImages);
        // draw clouds
        this.background(game.clouds);
        
        game.decorationImages.forEach(img => {
            image(img.src, img.x, img.y, img.width, img.height)
            img.x -= img.speed;

            if (img.x === - img.width) {
                img.x = 999;
            }
        })

        //this.random = Math.floor(Math.random()*game.decorationImages.length);
        this.decoImage = game.decorationImages[Math.floor(Math.random()*game.decorationImages.length)]
        if (frameCount % 150 === 0) {
            image(this.decoImage.src, this.decoImage.x, this.decoImage.y, this.decoImage.width, this.decoImage.height)
            this.decoImage.x -= this.decoImage.speed;
        }
  
    }
    //for loading background and images
    background (arr) {
        arr.forEach(img => {
            img.x -= img.speed;
            image(img.src, img.x, 0, width, height)
            // this adds a second image
            image(img.src, img.x + width, 0, width, height)
            // if the image has moved completely out of the screen
            // we reset it to the starting value
            if (img.x <= - width) {
                img.x = 0;
            }
        })

    }
}
    