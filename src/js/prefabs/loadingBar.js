export default class LoadingBar {
    constructor({ game, bar_width, bar_height, bar_left_x, bar_left_y }) {
        this.game = game;
        this.bar_width = bar_width;
        this.bar_height = bar_height;
        this.bar_left_x = bar_left_x;
        this.bar_left_y = bar_left_y;
    }

    createSprite() {
        if (otsimo.kv.loading_bar.sprite) {
            const color = otsimo.kv.loading_bar.color;

            const img = this.game.add.image(0, 0, otsimo.kv.loading_bar.sprite);
            img.visible = false;

            this.sprite = this.game.add.tileSprite(this.bar_left_x, this.bar_left_y, img.width, img.height, otsimo.kv.loading_bar.sprite);
            this.sprite.scale.x = this.bar_width / img.width;
            this.sprite.scale.y = this.bar_height / img.height;

            this.bar_width = this.sprite.width;
            this.bar_height = this.sprite.height;
        } else {
            this.bmap = this.game.make.bitmapData(this.bar_width, this.bar_height);
            this.sprite = this.game.add.sprite(this.bar_left_x, this.bar_left_y, this.bmap);
        }
    }

    update(prog) {
        if (!this.sprite) {
            return;
        }

        if (otsimo.kv.loading_bar.sprite) {
            this.sprite.width = this.bar_width * prog * 0.01;
        } else {
            this.bmap.ctx.beginPath();
            this.bmap.rect(0, 0, this.bar_width * prog * 0.01, this.bar_height)
            this.bmap.ctx.fillStyle = otsimo.kv.loading_bar.color;
            this.bmap.ctx.fill();
        }
    }
};