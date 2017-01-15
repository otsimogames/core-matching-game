import Box from './box'

const HIDING_FADE = 'fade';
const HIDING_MOVE = 'move';

export default class Table extends Phaser.Group {
  constructor({game, direction, items, enableInput}) {
    super(game);
    this.items = items;
    this.direction = direction;
    this.items = items;
    this.boxes = [];
    this.enableInput = enableInput;
    if (enableInput) {
      this.itemSelected = new Phaser.Signal()
    }

    if (direction == 'vertical') {
      this.layoutVertical()
    } else {
      this.layoutHorizontal()
    }
  }

  layoutHorizontal() {
    const layout = otsimo.kv.layout;

    const gw = otsimo.game.width * layout.horizontal.width.multiplier + layout.horizontal.width.constant;

    const is = layout.fixed_size
      ? otsimo.kv.layout.max_item
      : this.items.length;

    const w = gw / (is + 1);
    const e = w / (is - 1);
    const sx = -(this.items.length / 2.0) * (w + e);
    const sy = 0.0;
    let maxHeight = 0
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const box = new Box({
        game: this.game,
        x: (sx + (i + 0.5) * (w + e)),
        y: sy,
        item: item
      });
      if (box.width > w) {
        box.width = w;
        box.scale.y = box.scale.x;
      }
      if (box.height > maxHeight) {
        maxHeight = box.height;
      }
      box.setAnchor(layout.cell_anchor);

      this.add(box);
      this.boxes.push(box);
      if (this.enableInput) {
        box.inputEnabled = true;
        box.events.onInputDown.add(this.clickListener, { box: box, table: this });
      }
    }
    this.itemSize = w
    this.visiblePos = {
      x: otsimo.game.world.centerX,
      y: (otsimo.game.height * layout.horizontal.y.multiplier + layout.horizontal.y.constant),
    }
    this.hiddenPos = {
      x: otsimo.game.world.centerX,
      y: (otsimo.game.height + maxHeight),
    }
  }

  layoutVertical() {
    const layout = otsimo.kv.layout;
    const gh = otsimo.game.height * layout.vertical.height.multiplier + layout.vertical.height.constant;
    const is = layout.fixed_size
      ? otsimo.kv.layout.max_item
      : this.items.length;

    const h = gh / (is + 1);
    const e = h / (is - 1);
    const sy = - (this.items.length / 2.0) * (h + e);
    const sx = 0.0;
    let maxWidth = 0;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const box = new Box({
        game: this.game,
        x: sx,
        y: (sy + (i + 0.5) * (h + e)),
        item: item
      });

      if (box.height > h) {
        box.height = h;
        box.scale.x = box.scale.y;
      }
      if (box.width > maxWidth) {
        maxWidth = box.width;
      }
      box.setAnchor(layout.cell_anchor);
      this.add(box);
      this.boxes.push(box);
      if (this.enableInput) {
        box.inputEnabled = true
        box.events.onInputDown.add(this.clickListener, { box: box, table: this });
      }
    }

    this.itemSize = h

    this.visiblePos = {
      x: (otsimo.game.width * layout.vertical.x.multiplier + layout.vertical.x.constant),
      y: otsimo.game.world.centerY
    }
    this.hiddenPos = {
      x: (otsimo.game.width + maxWidth),
      y: otsimo.game.world.centerY
    }
  }

  clickListener() {
    if (this.box.hidden) {
      return
    }

    this.table.itemSelected.dispatch(this.box);
  }

  moveTo(x, y, dur) {

    const tween = otsimo.game.add.tween(this)
      .to({ x: x, y: y }, dur, Phaser.Easing.Back.Out);

    tween.start();
  }

  moveOut(x, y, dur) {
    const tween = otsimo.game.add.tween(this)
      .to({ x: x, y: y }, dur, Phaser.Easing.Circular.In);

    tween.start();
  }

  fadeOffItem(box, dur) {
    if (box.IsFadeOffed) {
      return
    }
    otsimo.game.add.tween(box)
      .to({ alpha: otsimo.kv.game.hiding_fade_alpha }, dur, Phaser.Easing.Circular.Out, true);
    const s = box.scale;
    const sx = s.x * 0.9;
    const sy = s.y * 0.9;
    otsimo.game.add.tween(box.scale)
      .to({ x: sx, y: sy }, dur, Phaser.Easing.Circular.Out, true);
    box.IsFadeOffed = true;
  }

  moveOutItem(box, dur) {
    if (this.direction == 'vertical') {
      const tween = otsimo.game.add.tween(box)
        .to({ x: this.hiddenPos.x }, dur, Phaser.Easing.Sinusoidal.In);
      tween.onComplete.addOnce(box.kill, box);
      tween.start();
    } else {
      const tween = otsimo.game.add.tween(box)
        .to({ y: this.hiddenPos.y }, dur, Phaser.Easing.Sinusoidal.In);
      tween.onComplete.addOnce(box.kill, box);
      tween.start();
    }
  }

  hideAnItem(id) {
    for (let j = 0; j < this.boxes.length; j++) {
      const box = this.boxes[j];
      if (box.id == id) {
        box.hidden = true;
        if (otsimo.kv.game.hiding_type == HIDING_FADE) {
          this.fadeOffItem(box, otsimo.kv.game.hiding_fade_duration)
        } else if (otsimo.kv.game.hiding_type == HIDING_MOVE) {
          this.moveOutItem(box, otsimo.kv.game.hiding_move_duration);
          this.relayout({ delay: otsimo.kv.game.hiding_move_duration / 2.0 })
        }
        break
      }
    }
  }

  relayout({delay}) {
    if (this.direction == 'vertical') {
      this.relayoutVertical(delay)
    } else {
      this.relayoutHorizontal(delay)
    }
  }

  relayoutHorizontal(delay) {
    const layout = otsimo.kv.layout;
    const gw = otsimo.game.width * layout.horizontal.width.multiplier + layout.horizontal.width.constant;

    const vis = this.boxes.filter(b => !b.hidden).length

    const is = layout.fixed_size
      ? otsimo.kv.layout.max_item
      : (vis + 0.5);

    const w = gw / (is + 1);
    const e = w / (is - 1);
    const sx = -(vis / 2.0) * (w + e);


    let k = 0;
    for (let i = 0; i < this.boxes.length; i++) {
      const box = this.boxes[i];
      if (box.hidden) {
        continue;
      }
      if (box.tweenArray != []) {
        this.killTween(box, box.oldX, box.oldY);
      }
      otsimo.game.add.tween(box)
        .to({ x: (sx + (k + 0.5) * (w + e)) }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);

      console.log('relayout: ', box.x, box.y);

      if (!layout.fixed_size) {
        otsimo.game.time.events.add(2 * otsimo.kv.game.hiding_move_duration, this.killTween, this, box, box.oldX, box.oldY)
        let ns = box.scale.x * (w / box.width);
        ns = box.scale.x + (ns - box.scale.x) * 0.75;
        otsimo.game.add.tween(box.scale)
          .to({ x: ns, y: ns }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);
      } else {
        otsimo.game.time.events.add(otsimo.kv.game.hiding_move_duration, this.killTween, this, box, box.oldX, box.oldY)
      }

      k++;
    }
  }

  relayoutVertical(delay) {
    const layout = otsimo.kv.layout;
    const gh = otsimo.game.height * layout.vertical.height.multiplier + layout.vertical.height.constant;

    const vis = this.boxes.filter(b => !b.hidden).length

    const is = layout.fixed_size
      ? otsimo.kv.layout.max_item
      : (vis + 0.5);

    const h = gh / (is + 1);
    const e = h / (is - 1);
    const sy = - (vis / 2.0) * (h + e);
    let k = 0;

    for (let i = 0; i < this.boxes.length; i++) {
      const box = this.boxes[i];
      if (box.hidden) {
        continue
      }
      if (box.tweenArray != []) {
        this.killTween(box, box.oldX, box.oldY);
      }
      otsimo.game.add.tween(box)
        .to({ y: (sy + (k + 0.5) * (h + e)) }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);

      if (!layout.fixed_size) {
        otsimo.game.time.events.add(2 * otsimo.kv.game.hiding_move_duration, this.killTween, this, box, box.oldX, box.oldY);
        let ns = box.scale.y * (h / box.height);
        ns = box.scale.y + (ns - box.scale.y) * 0.75
        otsimo.game.add.tween(box.scale)
          .to({ x: ns, y: ns }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);
      } else {
        otsimo.game.time.events.add(otsimo.kv.game.hiding_move_duration, this.killTween, this, box, box.oldX, box.oldY)
      }

      k++;
    }
  }

  isCollides(other) {

    other.width = other.width * 0.85;
    other.height = other.height * 0.85;

    for (let j = 0; j < this.boxes.length; j++) {
      const b = this.boxes[j];
      const b2 = b.getBounds();
      b2.width = b2.width * 0.85;
      b2.height = b2.height * 0.85;
      if (!b.hidden && Phaser.Rectangle.intersects(other, b2)) {
        return b;
      }
    }
    return null;
  }

  killTween(box, x, y) {
    if (box.tweenArray == []) {
      return;
    }
    console.log('killTween');
    let temp = box.tweenArray[0];
    for (let j = 0; j < box.tweenArray.length; j++) {
      const i = box.tweenArray[j];
      temp = i;
      while (temp.chainedTween != null) {
        const k = temp.chainedTween;
        otsimo.game.tweens.remove(temp.chainedTween);
        temp = k;
      }
      otsimo.game.tweens.remove(i);
    }
    if (this.tween) {
      this.tween.stop();
    }
    const t1 = box.x;
    const t2 = box.y;
    if (otsimo.kv.game.answer_type == 'match') {
      box.x = x;
      box.oldX = t1;
    } else {
      box.y = y;
      box.oldY = t2;
    }
    //box.y = y;
    //box.oldY = t;
  }

  disableAll() {
    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].inputEnabled = false;
    }
  }

  enableAll() {
    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].inputEnabled = true;
    }
  }


}