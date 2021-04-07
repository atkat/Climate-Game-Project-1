class Tree {
    constructor(image) {
        this.image = image;
        this.width = 100;
        this.height = 100;
        this.x = width;
        this.y = this.image.y//(Math.floor(Math.random() * 200)*2);
    }

    draw() {
            this.x--;
            image(this.image.src, this.x, this.y, this.width, this.height)
            if (this.x <= - this.width) {
                this.x = width;
            }
    }
}