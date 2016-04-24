import Balloon from '../prefabs/balloon'
import {gameVisibleName, calculateConstraint} from '../utils'

export default class Home extends Phaser.State {
    create() {
        if (otsimo.kv.home_background_color) {
            this.game.stage.backgroundColor = otsimo.kv.home_background_color;
        }
        if (otsimo.kv.background_image) {
            let back = this.game.add.image(this.game.world.centerX, this.game.world.centerY, otsimo.kv.background_image)
            back.anchor.set(0.5, 0.5);
        }

        this.game.add.button((this.game.width) * 0.37, (this.game.height) * 0.47, 'playButton', this.playAction, this, 2, 1, 0);
        this.game.add.button(25, 30, 'back', otsimo.quitgame, this);

        let vn = gameVisibleName();
        let q = calculateConstraint(otsimo.kv.gameNameLayout);
        let text = otsimo.game.add.text(q.x, q.y, vn, otsimo.kv.gameNameTextStyle);
        text.anchor.set(q.anchor.x, q.anchor.y);
        text.setShadow(otsimo.kv.name_shadow.x, otsimo.kv.name_shadow.y, otsimo.kv.name_shadow.color, otsimo.kv.name_shadow.blur, true, false);
    }

    playAction(button) {
        this.game.state.start('Play');
    }

    render() {
        if (otsimo.debug) {
            this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
        }
    }

}






