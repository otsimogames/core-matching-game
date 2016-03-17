import Box from './box'

const HIDING_FADE = "fade";
const HIDING_MOVE = "move";

export default class Table extends Phaser.Group {
    constructor({game, direction, items, enableInput}) {
        super(game)
        this.items = items
        this.direction = direction
        this.items = items
        this.boxes = []
        this.enableInput = enableInput
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
                box.inputEnabled = true
                box.events.onInputDown.add(this.clickListener, { box: box, table: this });
            }
        }

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
        let maxWidth = 0

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

        this.visiblePos = {
            x: (otsimo.game.width * layout.vertical.x.multiplier + layout.vertical.x.constant),
            y: otsimo.game.world.centerY,
        }
        this.hiddenPos = {
            x: (otsimo.game.width + maxWidth),
            y: otsimo.game.world.centerY,
        }
    }

    clickListener(p) {
        if (this.box.hidden) {
            return
        }
        this.table.itemSelected.dispatch(this.box)
    }

    moveTo({x, y}) {
        let tween = otsimo.game.add.tween(this)
            .to({ x: x, y: y }, 300, Phaser.Easing.Back.Out);

        tween.start();
    }

    hideAnItem(id) {
        for (let box of this.boxes) {
            if (box.id == id) {
                box.hidden = true;
                if (otsimo.kv.game.hiding_type == HIDING_FADE) {
                    let tween = otsimo.game.add.tween(box)
                        .to({ alpha: otsimo.kv.game.hiding_fade_alpha }, otsimo.kv.game.hiding_fade_duration);

                    tween.start();

                } else if (otsimo.kv.game.hiding_type == HIDING_MOVE) {
                    if (this.direction == "vertical") {
                        let tween = otsimo.game.add.tween(box)
                            .to({ x: this.hiddenPos.x }, otsimo.kv.game.hiding_move_duration);
                        tween.start();
                    } else {
                        let tween = otsimo.game.add.tween(box)
                            .to({ y: this.hiddenPos.y }, otsimo.kv.game.hiding_move_duration);
                        tween.start();
                    }
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
        let gw = otsimo.game.height * layout.vertical.height.multiplier + layout.vertical.height.constant;

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
}