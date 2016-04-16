import Box from './box'

const HIDING_FADE = "fade";
const HIDING_MOVE = "move";

export default class Table extends Phaser.Group {
    constructor({game, direction, items, enableInput}) {
        super(game);
        this.hintArrow = undefined;
        this.items = items;
        this.direction = direction;
        this.items = items;
        this.boxes = [];
        this.enableInput = enableInput;
        this.timer = undefined;
        this.answer = undefined;
        this.hintStep = 0;
        if (enableInput) {
            this.itemSelected = new Phaser.Signal()
        }

        if (direction == "vertical") {
            this.layoutVertical()
        } else {
            this.layoutHorizontal()
        }
    }

    layoutHorizontal() {
        let layout = otsimo.kv.layout;

        let gw = otsimo.game.width * layout.horizontal.width.multiplier + layout.horizontal.width.constant;

        let is = layout.fixed_size
            ? otsimo.kv.layout.max_item
            : this.items.length;

        let w = gw / (is + 1);
        let e = w / (is - 1);
        let sx = -(this.items.length / 2.0) * (w + e);
        let sy = 0.0;
        let maxHeight = 0
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let box = new Box({
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
            box.anchor = layout.cell_anchor;

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
        let layout = otsimo.kv.layout;
        let gh = otsimo.game.height * layout.vertical.height.multiplier + layout.vertical.height.constant;
        let is = layout.fixed_size
            ? otsimo.kv.layout.max_item
            : this.items.length;

        let h = gh / (is + 1);
        let e = h / (is - 1);
        let sy = - (this.items.length / 2.0) * (h + e);
        let sx = 0.0;
        let maxWidth = 0;

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let box = new Box({
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
            box.anchor = layout.cell_anchor;
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

    clickListener(p) {
        if (this.box.hidden) {
            return
        }

        this.table.itemSelected.dispatch(this.box)
    }

    moveTo(x, y, dur) {

        let tween = otsimo.game.add.tween(this)
            .to({ x: x, y: y }, dur, Phaser.Easing.Back.Out);

        tween.start();
    }

    moveOut(x, y, dur) {
        let tween = otsimo.game.add.tween(this)
            .to({ x: x, y: y }, dur, Phaser.Easing.Circular.In);

        tween.start();
    }

    fadeOffItem(box, dur) {
        let tween = otsimo.game.add.tween(box)
            .to({ alpha: otsimo.kv.game.hiding_fade_alpha }, dur);

        tween.start();
    }

    moveOutItem(box, dur) {
        if (this.direction == "vertical") {
            let tween = otsimo.game.add.tween(box)
                .to({ x: this.hiddenPos.x }, dur);
            tween.start();
        } else {
            let tween = otsimo.game.add.tween(box)
                .to({ y: this.hiddenPos.y }, dur);
            tween.start();
        }
    }

    hideAnItem(id) {
        for (let box of this.boxes) {
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
        if (this.direction == "vertical") {
            this.relayoutVertical(delay)
        } else {
            this.relayoutHorizontal(delay)
        }
    }

    relayoutHorizontal(delay) {
        let layout = otsimo.kv.layout;
        let gw = otsimo.game.width * layout.horizontal.width.multiplier + layout.horizontal.width.constant;

        let vis = this.boxes.filter(b => !b.hidden).length

        let is = layout.fixed_size
            ? otsimo.kv.layout.max_item
            : (vis + 0.5);

        let w = gw / (is + 1);
        let e = w / (is - 1);
        let sx = -(vis / 2.0) * (w + e);


        let k = 0;
        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (box.hidden) {
                continue
            }
            otsimo.game.add.tween(box)
                .to({ x: (sx + (k + 0.5) * (w + e)) }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);

            if (!layout.fixed_size) {
                let ns = box.scale.x * (w / box.width);
                ns = box.scale.x + (ns - box.scale.x) * 0.75
                otsimo.game.add.tween(box.scale)
                    .to({ x: ns, y: ns }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);
            }

            k++;
        }
    }

    relayoutVertical(delay) {
        let layout = otsimo.kv.layout;
        let gh = otsimo.game.height * layout.vertical.height.multiplier + layout.vertical.height.constant;

        let vis = this.boxes.filter(b => !b.hidden).length

        let is = layout.fixed_size
            ? otsimo.kv.layout.max_item
            : (vis + 0.5);

        let h = gh / (is + 1);
        let e = h / (is - 1);
        let sy = - (vis / 2.0) * (h + e);
        let k = 0;

        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (box.hidden) {
                continue
            }
            otsimo.game.add.tween(box)
                .to({ y: (sy + (k + 0.5) * (h + e)) }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);

            if (!layout.fixed_size) {
                let ns = box.scale.y * (h / box.height);
                ns = box.scale.y + (ns - box.scale.y) * 0.75
                otsimo.game.add.tween(box.scale)
                    .to({ x: ns, y: ns }, otsimo.kv.game.hiding_move_duration, Phaser.Easing.Back.Out, true, delay);
            }

            k++;
        }
    }

    isCollides(other) {

        other.width = other.width * 0.85;
        other.height = other.height * 0.85;

        for (let b of this.boxes) {
            let b2 = b.getBounds();
            b2.width = b2.width * 0.85;
            b2.height = b2.height * 0.85;
            if (!b.hidden && Phaser.Rectangle.intersects(other, b2)) {
                return b;
            }
        }
        return null;
    }

    createHint(answerName) {
        this.hintStep++;
        this.killHint(false);
        this.killTimer();
        if (!otsimo.settings.show_hint) {
            console.log("shot_hint is false");
            return;
        }
        if (otsimo.kv.game.hint_type == "hand") {
            this.handHint();
        } else {
            this.jumpHint();
        }
        this.createTimer(answerName);
    }

    handHint () {
        console.log("hintArrow: ", this.hintArrow);
        if (this.hintArrow && this.hintStep >3) {
            console.log("this.hintStep is: ", this.hintStep);
            return;
        }
        this.hintArrow = otsimo.game.add.sprite(this.answerItem.world.x, this.answerItem.world.y + otsimo.game.height * 0.05, 'hand');
        this.hintArrow.anchor.set(0.5,0.1);
        var tween = otsimo.game.add.tween(this.hintArrow).to({y: this.answerItem.world.y}, 500 , Phaser.Easing.Circular.Out ,false);
        var tween2 = otsimo.game.add.tween(this.hintArrow)
            .to({y: this.answerItem.world.y + otsimo.game.height * 0.05}, 500 , Phaser.Easing.Linear.In ,false);
        otsimo.game.time.events.add(Phaser.Timer.SECOND * 2, this.killHint, this, false);
        tween.chain(tween2);
        tween.start();
        console.log("False");
    }

    jumpHint () {
        this.jumpItem(this.answerItem);
    }

    jumpItem (answerItem) {
        //this.twistItem(answerItem);
        this.moveItem(answerItem);
    }

    moveItem (item) {
        let tween = otsimo.game.add.tween(item)
            .to({y: -30}, 250, Phaser.Easing.Cubic.Out, false);

        let tween2 = otsimo.game.add.tween(item)
            .to({y: 0}, 200, Phaser.Easing.Cubic.In, false);

        let tween3 = otsimo.game.add.tween(item)
            .to( {angle: 5 }, 75, Phaser.Easing.Back.Out, false);
        let tween4 = otsimo.game.add.tween(item)
            .to( {angle: -5 }, 75, Phaser.Easing.Back.Out, false);
        let tween5 = otsimo.game.add.tween(item)
            .to( {angle: 5 }, 75, Phaser.Easing.Back.Out, false);
        let tween6 = otsimo.game.add.tween(item)
            .to( {angle: -5 }, 75, Phaser.Easing.Back.Out, false);
        let tween7 = otsimo.game.add.tween(item)
            .to( {angle: 5 }, 75, Phaser.Easing.Back.Out, false);
        let tween8 = otsimo.game.add.tween(item)
            .to( {angle: 0 }, 75, Phaser.Easing.Back.Out, false);

        tween.chain(tween3);
        tween3.chain(tween4);
        tween4.chain(tween5);
        tween5.chain(tween6);
        tween6.chain(tween7);
        tween7.chain(tween8);
        tween8.chain(tween2);

        tween.start();
    }

    lookForAnswer (id) {
        for(let b of this.boxes){
            if(b.id == id){
                return b;
            }
        }
    }

    killHint (force) {
        console.log("killing hint, force is: ", force);
        if (!force && this.hintStep >= 3) {
            return;
        }
        if (this.hintArrow) {
            this.hintArrow.kill();
        }
        this.hintArrow = undefined;
        this.killTimer();
        this.createTimer(this.answer);
    }

    showHint() {
        this.killTimer();
        this.createHint(this.answer);
        this.createTimer(this.answer);
    }

    createTimer(answer) {
        this.answer = answer;
        this.answerItem = this.lookForAnswer(answer);
        this.killTimer();
        this.timer = otsimo.game.time.events.add(Phaser.Timer.SECOND * otsimo.settings.hint_duration, this.showHint, this);
    }

    killTimer() {
        if (this.timer) {
            otsimo.game.time.events.remove(this.timer);
        }
    }

    takeHintStep() {
        return this.hintStep;
    }
}