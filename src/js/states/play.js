import Session from '../session'
import Scene from '../scene'
import {calculateConstraint} from '../utils'

export default class Play extends Phaser.State {
    create() {
        let session = new Session({ state: this });
        let scene = new Scene({ delegate: this, session: session });

        this.session = session
        this.scene = scene
        if (otsimo.kv.play_background_color) {
            this.game.stage.backgroundColor = otsimo.kv.play_background_color;
        }
        if (otsimo.kv.background_image) {
            let back = this.game.add.image(this.game.world.centerX, this.game.world.centerY, otsimo.kv.background_image)
            back.anchor.set(0.5, 0.5);
        }

        this.initDecoration();
        this.game.add.button(25, 25, 'back', this.backAction, this);
        scene.next();
    }

    backAction(button) {
        this.game.state.start('Home');
    }

    render() {
        if (otsimo.debug) {
            this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
            this.session.debug(this.game);
            this.game.debug.text("Time until event: " + this.game.time.events.duration, 300, 50);
        }
    }

    sceneEnded() {
        this.session.end();
        this.game.state.start('Over');
    }

    initDecoration() {
        if (otsimo.kv.decoration) {
            for (let d of otsimo.kv.decoration) {
                let c = calculateConstraint(d);
                let img = this.game.add.image(c.x, c.y, d.image, d.frame);
                img.anchor.set(c.anchor.x, c.anchor.y);
            }
        }
    }
}
