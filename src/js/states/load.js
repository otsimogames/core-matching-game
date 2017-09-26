import LoadingBar from '../prefabs/loadingBar'
import FontFaceObserver from 'fontfaceobserver'
export default class Load extends Phaser.State {
  preload() {
    const bar = new LoadingBar({
      game: this.game,
      bar_width: this.game.width * 0.3,
      bar_height: this.game.height * 0.15,
      bar_left_x: this.game.width * 0.35,
      bar_left_y: this.game.height * 0.425
    });
    bar.createSprite();
    this.bar = bar;

    const loadingMessage = otsimo.kv.loadingText
    const loadingFont = otsimo.kv.loadingFont
    const loadingColor = otsimo.kv.loadingColor

    this.game.sound.mute = !otsimo.sound
    this.game.stage.backgroundColor = otsimo.kv.loadingBackground;

    let fontReady = false;
    const font = new FontFaceObserver("mfont");
    font.load().then(() => {
      fontReady = true;
    });

    if (fontReady) {
      //const loading = this.game.add.text(this.game.world.centerX, this.game.world.centerY, loadingMessage, { font: loadingFont, fill: loadingColor });
      //loading.anchor.setTo(0.5, 0.5);
    }

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
    // wait for a little while after the loading bar is full
    setTimeout(() => {
      this.game.state.start('Home');
    }, 600);
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

  loadUpdate() {
    this.bar.update(this.load.progress)
  }
}



