
export default class Box extends Phaser.Sprite {
    constructor({game, x, y, item}) {
        super(game, x, y, item.image)
        this.item = item;
        this.name = item.text;
        this.tint = parseInt(item.tint, 16);
        this.wrongAnswerCount = 0
        this.hidden = false
    }

    get id() {
        return this.item.id
    }

    playSound() {
        this.game.sound.play(this.item.audio);
    }

    playQuestion() {
        if (typeof this.item.question !== "undefined") {
            this.game.sound.play(this.item.question);
        }
    }

    highlight() {
        let ns = this.scale.x * 1.2
        otsimo.game.add.tween(this.scale).to({ x: ns, y: ns }, 150, Phaser.Easing.Back.Out, true)
        return 150
    }

}