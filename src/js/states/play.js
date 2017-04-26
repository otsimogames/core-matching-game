import Session from '../session'
import Scene from '../scene'
import { calculateConstraint } from '../utils'

export default class Play extends Phaser.State {
  create() {
    const session = new Session({ state: this });
    const scene = new Scene({ delegate: this, session: session });

    this.session = session
    this.scene = scene
    if (otsimo.kv.play_background_color) {
      this.game.stage.backgroundColor = otsimo.kv.play_background_color;
    }
    if (otsimo.kv.background_image) {
      const backGround = this.game.add.image(this.game.world.centerX, this.game.world.centerY, otsimo.kv.background_image)
      backGround.anchor.set(0.5, 0.5);
    }

    this.initDecoration();
    const back = this.game.add.button(25, 35, 'back', this.backAction, this);
    back.anchor.set(0, 0);
    back.scale.set(otsimo.game.height / 768);
    if (otsimo.currentMusic) {
      otsimo.currentMusic.volume = otsimo.kv.game_music.volume_play_screen;
    }
    scene.next();
  }

  backAction() {
    if (otsimo.clickSound) {
      otsimo.clickSound.play()
    }
    this.game.state.start('Home');
  }

  render() {
    if (otsimo.debug) {
      this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00');
      this.session.debug(this.game);
      this.game.debug.text('Time until event: ' + this.game.time.events.duration, 300, 50);
    }
  }

  sceneEnded() {
    this.session.end();
    this.game.state.start('Over');
  }

  initDecoration() {
    if (otsimo.kv.decoration) {
      for (let j = 0; j < otsimo.kv.decoration.length; j++) {
        const d = otsimo.kv.decoration[j];
        const c = calculateConstraint(d);
        const img = this.game.add.image(c.x, c.y, d.image, d.frame);
        img.anchor.set(c.anchor.x, c.anchor.y);
      }
    }
  }
}
