import img from "../../assets/load_bar.png"

export default class Boot extends Phaser.State {
    preload() {
        // If needed the image for loader bar in preload state can be loaded here
        if (otsimo.kv.loading_bar.sprite) {
            this.game.load.image("load_bar", img);
        }
    }

    create() {
        this.game.state.start('Load');
    }
}
