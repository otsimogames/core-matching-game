
export default class Load extends Phaser.State {
  preload() {
    const loadingMessage = otsimo.kv.loadingText
    const loadingFont = otsimo.kv.loadingFont
    const loadingColor = otsimo.kv.loadingColor

    this.game.sound.mute = !otsimo.sound
    this.game.stage.backgroundColor = otsimo.kv.loadingBackground;

    const loading = this.game.add.text(this.game.world.centerX, this.game.world.centerY, loadingMessage, { font: loadingFont, fill: loadingColor });
    loading.anchor.setTo(0.5, 0.5);
    this.loadAssets();
  }

  create() {
    if (otsimo.debug) {
      this.game.time.advancedTiming = true;
    }
    if (otsimo.kv.game_music) {
      otsimo.cmaudio = this.game.add.audio(otsimo.kv.game_music.music, otsimo.kv.game_music.volume, otsimo.kv.game_music.loop);
      this.game.sound.setDecodedCallback([otsimo.cmaudio], () => {
        otsimo.currentMusic = otsimo.cmaudio.play();
        otsimo.currentMusic.volume = otsimo.kv.game_music.volume_load_screen;
      }, this);
    }
    if (otsimo.kv.game.click_sound) {
      otsimo.clickSound = this.game.add.audio(otsimo.kv.game.click_sound);
    }

    if (otsimo.kv.game.correct_sound) {
      otsimo.correctSound = this.game.add.audio(otsimo.kv.game.correct_sound);
    }
    this.game.state.start('Home');
  }

  loadAssets() {
    const loader = this.game.load;
    for (let i = 0; i < otsimo.kv.preload.length; i++) {
      const asset = otsimo.kv.preload[i];
      if (asset.type === 'atlas') {
        loader.atlas(asset.name, asset.path, asset.data);
      } else {
        if (asset.type != 'metadata') {
          loader[asset.type](asset.name, asset.path);
        }
      }
    }
  }
}



