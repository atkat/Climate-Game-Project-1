
class Background {
    constructor () {
        this.decoImage;
        this.treeImage;
    }
    draw() {
        //console.log('this is the background drawing')
        game.backgroundImages.forEach(img => {
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
        //decoImageration
        
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

        //trees or desolation depending on the score
     //  this.treeImage = game.treeImages[0];
        if (game.player.score > 50) { 
            image(game.treeImages[0].src, game.treeImages[0].x, game.treeImages[0].y, 50, 100)
            game.treeImages[0].x --;
        }
        //if (player.score < 0) { }
 
  
    }
}
    