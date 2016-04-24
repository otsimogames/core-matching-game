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
        this.game.add.button((this.game.width) * 0.37, (this.game.height) * 0.47, 'playButton', this.playAction, this, 2, 1, 0);
        this.game.add.button(25, 30, 'back', this.backAction, this);
        
        Balloon.random()
    }

    playAction(button) {
        this.game.state.start('Play');
    }

    backAction(button) {
        this.game.state.start('Home');
    }

}