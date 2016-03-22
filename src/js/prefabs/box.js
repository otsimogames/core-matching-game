
export default class Box extends Phaser.Sprite {
    constructor({game, x, y, item}) {
        super(game, x, y, item.image)
        this.item = item;
        this.name = item.text;
        this.tint = parseInt(item.tint, 16);
        this.wrongAnswerCount = 0
        this.hidden = false
        this.onDragUpdate = new Phaser.Signal()

    }

    get id() {
        return this.item.id
    }

    get kind() {
        return this.item.kind
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
        let dur = 150
        let ns = this.scale.x * 1.2
        otsimo.game.add.tween(this.scale).to({ x: ns, y: ns }, dur, Phaser.Easing.Back.Out, true)
        return dur
    }

    enableDrag() {
        this.inputEnabled = true
        this.input.enableDrag(false, true);
    }

    onDragStart() {
        this.defaultScaleX = this.scale.x
        this.defaultScaleY = this.scale.y

        let ns = this.scale.x * 1.1
        otsimo.game.add.tween(this.scale).to({ x: ns, y: ns }, 100, Phaser.Easing.Back.Out, true)
    }

    onDragStop() {
        this.lastDragPointer = null;
        otsimo.game.add.tween(this.scale).to({ x: this.defaultScaleX, y: this.defaultScaleY }, 100, Phaser.Easing.Back.Out, true)
    }

    dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {
        this.lastDragPointer = pointer;
        this.onDragUpdate.dispatch(this)
    }

    stopDrag() {
        if (this.lastDragPointer) {
            this.input.stopDrag(this.lastDragPointer);
            this.lastDragPointer = null;
        }
    }

    static answerBox({item, table}) {
        let layout = otsimo.kv.layout.answer_box;
        let visY = (otsimo.game.height * layout.y.multiplier) + layout.y.constant;
        let visX = (otsimo.game.width * layout.x.multiplier) + layout.x.constant;

        let answer = new Box({
            game: otsimo.game,
            x: -visX,
            y: visY,
            item: item
        })
        answer.anchor = layout.anchor;

        //Set item size equal to table items size
        let s = table.itemSize / answer.height;
        answer.scale.set(s, s);

        //enable drag
        answer.enableDrag()
        answer.events.onDragStart.add(answer.onDragStart, answer);
        answer.events.onDragUpdate.add(answer.dragUpdate, answer);
        answer.events.onDragStop.add(answer.onDragStop, answer);

        otsimo.game.world.add(answer);
        answer.visiblePos = new Phaser.Point(visX, visY);

        return answer
    }
}