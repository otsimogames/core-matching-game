
/**
 * 
 * 
 * @export
 * @class Box
 * @extends {Phaser.Sprite}
 */
export default class Box extends Phaser.Sprite {
  constructor({ game, x, y, item }) {
    super(game, x, y, item.image)
    this.item = item;
    this.name = item.text;
    this.tint = parseInt(item.tint, 16);
    this.wrongAnswerCount = 0
    this.hidden = false
    this.onDragUpdate = new Phaser.Signal()
    this.tweenArray = [];
    this.oldX = x;
    this.oldY = y;

    if (otsimo.kv.game.add_outline) {
      var oimg = item.outline || otsimo.kv.game.outline_image;
      const out = new Phaser.Sprite(game, 0, 0, oimg)
      out.anchor.set(0.5, 0.5);
      out.z = -5;
      this.addChild(out);
      this.outline = out;
      this.has_outline = true;
    } else {
      this.has_outline = false;
    }
    this.doNotMoveAfterDrag = false;
  }

  get id() {
    return this.item.id
  }

  get kind() {
    return this.item.kind
  }

  playSound() {
    if (this.item.tts === true) {
      otsimo.tts.speak(this.item.audio);
    } else {
      this.game.sound.play(this.item.audio);
    }
  }

  playQuestion() {
    if (typeof this.item["question_" + otsimo.kv.game.answer_type] !== 'undefined') {
      if (this.item.tts === true) {
        otsimo.tts.speak(this.item["question_" + otsimo.kv.game.answer_type]);
      } else {
        this.game.sound.play(this.item["question_" + otsimo.kv.game.answer_type]);
      }
    }
  }

  setAnchor(a) {
    this.anchor.set(a.x, a.y);
    if (this.has_outline) {
      const w = (this.width / this.scale.x);
      const h = (this.height / this.scale.y);
      this.outline.x = w * 0.5 - w * a.x;
      this.outline.y = h * 0.5 - h * a.y;
    }
  }

  highlight() {
    const dur = 150
    const ns = this.scale.x * 1.2
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

    const ns = this.scale.x * 1.1
    otsimo.game.add.tween(this.scale).to({ x: ns, y: ns }, 100, Phaser.Easing.Back.Out, true)
  }

  onDragStop() {
    this.lastDragPointer = null;
    otsimo.game.add.tween(this.scale).to({ x: this.defaultScaleX, y: this.defaultScaleY }, 100, Phaser.Easing.Back.Out, true)
    if (!this.doNotMoveAfterDrag) {
      otsimo.game.add.tween(this)
        .to({ x: this.visiblePos.x, y: this.visiblePos.y }, otsimo.kv.game.table_show_duration, Phaser.Easing.Back.Out, true);
    }
  }

  dragUpdate(sprite, pointer) {
    this.lastDragPointer = pointer;
    this.onDragUpdate.dispatch(this)
  }

  stopDrag() {
    if (this.lastDragPointer) {
      this.input.stopDrag(this.lastDragPointer);
      this.lastDragPointer = null;
    }
  }

  stopAndDisableDrag() {
    this.doNotMoveAfterDrag = true
    this.inputEnabled = false
    this.input.disableDrag();
    this.stopDrag()
  }

  static answerBox({ item, table }) {
    let layout = otsimo.kv.new_layout.answer_box;
    if (otsimo.kv.game.hasOwnProperty("layout_type") && otsimo.kv.game.layout_type != "") {
      layout = otsimo.kv[otsimo.kv.game.layout_type + "_layout"].answer_box;
    }
    const visY = (otsimo.game.height * layout.y.multiplier) + layout.y.constant;
    const visX = (otsimo.game.width * layout.x.multiplier) + layout.x.constant;

    const answer = new Box({
      game: otsimo.game,
      x: -visX,
      y: visY,
      item: item
    })
    answer.anchor = layout.anchor;

    //Set item size equal to table items size
    const s = table.itemSize / answer.height;
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