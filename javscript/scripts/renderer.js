class Renderer {

    constructor(scale) {
        this.cols = 64;
        this.rows = 32;

        this.scale = scale;

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;

        this.display = Array(this.rows * this.cols);


    }

    setPixel(x, y) {
        if (x > this.cols) {
            x -= this.cols
        } else if (x < y) {
            x += this.cols;
        }

        if (y > this.rows) {
            y -= this.rows;
        } else if (y < 0) {
            y += this.rows;
        }

        let pixelLoc = x + (y * this.cols);

        this.display[pixelLoc] ^= 1;

        return !this.display[pixelLoc];

    }

    clear() {
        this.display = new Array(this.cols * this.rows);
    }

    render() {
        // Clear the dispaly every cycle
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Loop display
        for (let i = 0; i < this.cols * this.rows; i++) {
            let x = (i % this.cols) * this.scale;

            let y = Math.floor(i / this.cols) * this.scale;

            if (this.display[i] === 1) {
                this.ctx.fillStyle = '#000';

                // Place a scaled pixel
                this.ctx.fillRect(x, y, this.scale, this.scale);
            }
        }


    }

    testRender() {
        this.setPixel(0, 0);
        this.setPixel(5, 2);
    }
}

export default Renderer;
