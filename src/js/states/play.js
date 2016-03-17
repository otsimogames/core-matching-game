import Session from '../session'
import Scene from '../scene'

export default class Play extends Phaser.State {
    create() {
        let session = new Session({ state: this });
        let scene = new Scene({ delegate: this });

        this.session = session
        this.scene = scene
        scene.prepare()
        this.game.add.button(25, 25, 'back', this.backAction, this);
    }

    backAction(button) {
        this.game.state.start('Home');
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    }

}
