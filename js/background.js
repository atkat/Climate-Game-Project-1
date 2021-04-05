
class Background {
    draw() {
        //console.log('this is the background drawing')
        game.backgroundImages.forEach(function (img) {
            img.x -= 0.50*img.speed;
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
    