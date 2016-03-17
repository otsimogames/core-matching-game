export default class Home extends Phaser.State {

    create() {
        let music = this.game.add.audio('welcome');
        music.play();

        this.game.add.button((this.game.width) * 0.37, (this.game.height) * 0.47, 'playButton', this.playAction, this, 2, 1, 0);
        this.game.add.button(25, 25, 'back', otsimo.quitgame, this);
    }

    playAction(button) {
        this.game.state.start('Play');
    }

}
