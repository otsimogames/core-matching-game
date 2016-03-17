
export default class Load extends Phaser.State {
    preload() {
        let loadingMessage = otsimo.kv.loadingText
        let loadingFont = otsimo.kv.loadingFont
        let loadingColor = otsimo.kv.loadingColor

        this.game.sound.mute = otsimo.sound
        this.game.stage.backgroundColor = otsimo.kv.loadingBackground;

        var loading = this.game.add.text(this.game.world.centerX, this.game.world.centerY, loadingMessage, { font: loadingFont, fill: loadingColor });
        loading.anchor.setTo(0.5, 0.5);
        this.loadAssets();
    }

    create() {
        if (otsimo.debug) {
            this.game.time.advancedTiming = true;
        }
        this.game.state.start('Home');
    }

    loadAssets() {
        let loader = this.game.load;
        for (let asset of otsimo.kv.preload) {
            if (asset.type === "atlas") {
                loader.atlas(asset.name, asset.path, asset.data);
            } else {
                loader[asset.type](asset.name, asset.path);
            }
        }
    }
}



