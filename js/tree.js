class Tree {
    constructor(image) {
        this.image = image;
        this.width = 50;
        this.height = 100;
        this.x = width;
        this.y = this.image.y
    }

    draw() {
            this.x--;
            image(this.image.src, this.x, this.y, this.width, this.height)
    }
}