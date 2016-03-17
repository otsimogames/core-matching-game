
export default class Box extends Phaser.Sprite {
    constructor({game, x, y, item}) {
        super(game, x, y, item.image)
        this.item = item;
        this.name = item.text;
        this.tint = parseInt(item.tint, 16);
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

}