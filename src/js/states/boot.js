export default class Boot extends Phaser.State {
    preload() {
        // If needed the image for loader bar in preload state can be loaded here
        if (otsimo.kv.loading_bar.sprite) {
            this.game.load.image(otsimo.kv.loading_bar.sprite);
        }
    }

    create() {
        this.game.state.start('Load');
    }
}
