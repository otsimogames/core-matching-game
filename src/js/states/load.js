
export default class Load extends Phaser.State {
  preload() {
    this.bar_width = this.game.width * 0.3;
    this.bar_height = this.game.height * 0.15;
    const bar_left_x = this.game.width * 0.35;
    const bar_left_y = this.game.height * 0.425;
    if (otsimo.kv.loading_bar.sprite) {
      const img = this.make.image(0, 0, otsimo.kv.loading_bar.sprite);
      img.visible = false;
      this.loadSprite = this.game.add.tileSprite(bar_left_x, bar_left_y, img.width, img.height, otsimo.kv.loading_bar.sprite);
      //this.loadSprite.scale.setTo(this.bar_height / img.height);      
      this.loadSprite.scale.x = this.bar_width / img.width;
      this.loadSprite.scale.y = this.bar_height / img.height;
      this.bar_width = this.loadSprite.width;
      this.bar_height = this.loadSprite.height;
    } else {
      this.bmap = this.game.make.bitmapData(this.bar_width, this.bar_height);
      this.loadSprite = this.game.add.sprite(bar_left_x, bar_left_y, this.bmap);
    }

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
    console.log("finished")
    //  this.game.state.start('Home');
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
    if (otsimo.kv.loading_bar.sprite) {
      this.loadSprite.width = this.bar_width * this.load.progress * 0.01;
    } else {
      this.bmap.ctx.beginPath();
      this.bmap.rect(0, 0, this.bar_width * this.load.progress * 0.01, this.bar_height)
      this.bmap.ctx.fillStyle = otsimo.kv.loading_bar.color;
      this.bmap.ctx.fill();
    }

    console.log("this.loadSprite.width", this.loadSprite.width);
    console.log("load progress ", this.load.progress * 0.01);
  }
}



