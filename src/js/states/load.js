
export default class Load extends Phaser.State {
    preload() {
        let loadingMessage = otsimo.kv.loadingText
        let loadingFont = otsimo.kv.loadingFont
        let loadingColor = otsimo.kv.loadingColor

        this.game.sound.mute = !otsimo.sound
        this.game.stage.backgroundColor = otsimo.kv.loadingBackground;

        var loading = this.game.add.text(this.game.world.centerX, this.game.world.centerY, loadingMessage, { font: loadingFont, fill: loadingColor });
        loading.anchor.setTo(0.5, 0.5);
        this.loadAssets();
    }

    create() {
        if (otsimo.debug) {
            this.game.time.advancedTiming = true;
        }
        if (otsimo.kv.game_music) {
            let audio = this.game.add.audio(otsimo.kv.game_music.music, otsimo.kv.game_music.volume, otsimo.kv.game_music.loop);
            otsimo.currentMusic = audio.play();
            otsimo.currentMusic.volume = otsimo.kv.game_music.volume_load_screen;
        }
        if (otsimo.kv.game.click_sound) {
            otsimo.clickSound = this.game.add.audio(otsimo.kv.click_sound);
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



