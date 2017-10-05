import Balloon from '../prefabs/balloon'
import { calculateConstraint } from '../utils'

class BalloonCounter {
  constructor() {
    this.counter = 0;
  }

  /**
   * add balloon pop
   * @param {number} amount
   * @memberOf BalloonCounter
   */
  add(amount) {
    this.counter += amount;
  }

  /**
   * send to server
   * @memberOf BalloonCounter
   */
  send() {
    otsimo.customevent('game:balloon:pop', { amount: this.counter })
  }
}

export default class Over extends Phaser.State {
  create() {
    if (otsimo.kv.over_background_color) {
      this.game.stage.backgroundColor = otsimo.kv.over_background_color;
    }
    if (otsimo.kv.background_image) {
      if (otsimo.kv.background_image) {
        const backGround = this.game.add.image(this.game.world.centerX, this.game.world.centerY, otsimo.kv.background_image)
        backGround.anchor.set(0.5, 0.5);
        backGround.scale.set(otsimo.game.height / 768);
      }
    }
    if (otsimo.currentMusic) {
      otsimo.currentMusic.volume = otsimo.kv.game_music.volume_over_screen;
    }
    if (typeof otsimo.weighter !== 'undefined') {
      otsimo.weighter.reload()
    }
    const vic = this.game.add.audio(otsimo.kv.ending_scene.victory_sound, 0.7);
    vic.play()

    const back = this.game.add.button(25, 35, 'back', this.backAction, this);
    back.scale.set(otsimo.game.height / 768);

    //calculate text and button constraints
    const tc = calculateConstraint(otsimo.kv.ending_scene.text)
    const bc = calculateConstraint(otsimo.kv.ending_scene.button)

    //add button
    const btn = this.game.add.button(bc.x, otsimo.game.height + 200, otsimo.kv.ending_scene.button.image || 'playButton', this.playAction, this, 2, 1, 0);
    btn.anchor.set(bc.anchor.x, bc.anchor.y)
    btn.scale.set(otsimo.game.height / 768);
    btn.alpha = 0

    //add text
    const text = otsimo.game.add.text(tc.x, tc.y - 100, otsimo.kv.ending_scene.text.text, otsimo.kv.ending_scene.text.style);
    text.anchor.set(tc.anchor.x, tc.anchor.y);
    text.scale.set(otsimo.game.height / 768);
    text.alpha = 0

    const dur = otsimo.kv.ending_scene.duration;
    const delay = otsimo.kv.ending_scene.button.delay;
    //enter text
    const t1 = otsimo.game.add.tween(text)
      .to({ y: tc.y + 100 }, dur, Phaser.Easing.Exponential.Out, false);

    otsimo.game.add.tween(text)
      .to({ alpha: 1 }, dur / 3, Phaser.Easing.Exponential.Out, true);


    const t2 = otsimo.game.add.tween(text)
      .to({ y: tc.y }, dur * 0.8, Phaser.Easing.Exponential.Out, false, (delay + dur * 0.2) - dur);

    //start tween
    t1.chain(t2)
    t1.start();

    //enter button tween
    otsimo.game.add.tween(btn)
      .to({ y: bc.y }, dur, Phaser.Easing.Exponential.Out, true, delay);

    otsimo.game.add.tween(btn)
      .to({ alpha: 1 }, dur / 3, Phaser.Easing.Exponential.Out, true, delay);


    //text sound
    setTimeout(() => {
      if (otsimo.kv.ending_scene.text.tts === true) {
        otsimo.tts.speak(otsimo.kv.ending_scene.text.sound)
      } else {
        const cong = this.game.add.audio(otsimo.kv.ending_scene.text.sound);
        cong.play()
      }
    }, dur / 2);

    this.counter = new BalloonCounter();
    this.balloons = Balloon.random(this.counter);
    for (let i = 0; i < this.balloons.length; i++) {
      this.balloons[i].scale.set(otsimo.game.height / 768);
    }
    this.payloadSent = false;       // checks whether the balloon payload is sent or not
  }

  update() {
    if (this.payloadSent) {
      return
    }
    if (!(Balloon.balloonsActive(this.balloons))) {
      this.payloadSent = true;
      this.counter.send();
    }
  }

  playAction() {
    if (otsimo.clickSound) {
      otsimo.clickSound.play()
    }
    // Jic that the user doesn't wait for all the balloons to pass by the screen.
    if (!this.payloadSent) {
      this.payloadSent = true;
      this.counter.send();
    }
    this.game.state.start('Play');
  }

  backAction() {
    if (otsimo.clickSound) {
      otsimo.clickSound.play()
    }
    // Jic that the user doesn't wait for all the balloons to pass by the screen.
    if (!this.payloadSent) {
      this.payloadSent = true;
      this.counter.send();
    }
    if (!otsimo.kv.game.show_home_screen) {
      otsimo.quitgame();
      return;
    }
    this.game.state.start('Home');
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