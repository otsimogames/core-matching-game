import Balloon from '../prefabs/balloon'
import {calculateConstraint} from '../utils'

export default class Over extends Phaser.State {
    create() {
        if (otsimo.kv.over_background_color) {
            this.game.stage.backgroundColor = otsimo.kv.over_background_color;
        }
        if (otsimo.kv.background_image) {
            let back = this.game.add.image(this.game.world.centerX, this.game.world.centerY, otsimo.kv.background_image)
            back.anchor.set(0.5, 0.5);
        }
        if (otsimo.currentMusic) {
            otsimo.currentMusic.volume = otsimo.kv.game_music.volume_over_screen;
        }

        let vic = this.game.add.audio(otsimo.kv.ending_scene.victory_sound, 0.7);
        vic.play()

        this.game.add.button(25, 35, 'back', this.backAction, this);

        //calculate text and button constraints
        let tc = calculateConstraint(otsimo.kv.ending_scene.text)
        let bc = calculateConstraint(otsimo.kv.ending_scene.button)

        //add button
        let btn = this.game.add.button(bc.x, otsimo.game.height + 200, otsimo.kv.ending_scene.button.image || 'playButton', this.playAction, this, 2, 1, 0);
        btn.anchor.set(bc.anchor.x, bc.anchor.y)
        btn.alpha = 0


        Balloon.random()

        //add text
        let text = otsimo.game.add.text(tc.x, tc.y - 100, otsimo.kv.ending_scene.text.text, otsimo.kv.ending_scene.text.style);
        text.anchor.set(tc.anchor.x, tc.anchor.y);
        text.alpha = 0

        let dur = otsimo.kv.ending_scene.duration;
        let delay = otsimo.kv.ending_scene.button.delay;
        //enter text
        let t1 = otsimo.game.add.tween(text)
            .to({ y: tc.y + 100 }, dur, Phaser.Easing.Exponential.Out, false);

        otsimo.game.add.tween(text)
            .to({ alpha: 1 }, dur / 3, Phaser.Easing.Exponential.Out, true);


        let t2 = otsimo.game.add.tween(text)
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
            let cong = this.game.add.audio(otsimo.kv.ending_scene.text.sound);
            cong.play()
        }, dur / 2);
    }

    playAction(button) {
        if (otsimo.clickSound) {
            otsimo.clickSound.play()
        }
        this.game.state.start('Play');
    }

    backAction(button) {
        if (otsimo.clickSound) {
            otsimo.clickSound.play()
        }
        this.game.state.start('Home');
    }

}