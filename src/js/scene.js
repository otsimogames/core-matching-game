import {shuffle} from "./utils"
import {Randomizer} from "./randomizer"
import Table from "./prefabs/table"
import Box from "./prefabs/box"

const MATCH_GAME = "match"
const CHOOSE_GAME = "choose"

export {MATCH_GAME, CHOOSE_GAME};

export default class Scene {
    constructor({delegate, session}) {
        this.delegate = delegate
        this.session = session
        this.random = new Randomizer()
        this.step = -1
    }

    get step() {
        return this.current_step | 0;
    }

    set step(value) {
        this.current_step = value;
    }

    next() {
        this.step = this.step + 1
        if (this.step >= otsimo.kv.game.session_step) {
            return false
        }
        let next = this.random.next()
        let dir = (otsimo.kv.game.answer_type == MATCH_GAME ? "vertical" : "horizontal")
        let table = new Table({
            game: otsimo.game,
            items: next.items,
            direction: dir,
            enableInput: (otsimo.kv.game.answer_type == CHOOSE_GAME)
        })

        table.x = table.hiddenPos.x;
        table.y = table.hiddenPos.y;

        this.table = table;
        this.gameStep = next;

        if (otsimo.kv.game.answer_type == CHOOSE_GAME) {
            table.itemSelected.add(this.onItemSelected, this)
            this.announce(otsimo.game.world.centerY * 0.3, 300)
        } else {
            this.answerBox = Box.answerBox({ item: next.answer, table: table });
            this.answerBox.onDragUpdate.add(this.onDrag, this);
            this.announce(-100, 500, this.answerBox);
        }
        this.session.startStep();
        return true;
    }

    onDrag() {
        let answer = this.answerBox;
        let box = this.table.isCollides(answer.getBounds())
        if (box != null) {
            if (box.item.kind == answer.item.kind) {
                this.gameStep.done = true
                answer.stopDrag();
                const dur = 150

                for (let b of this.table.boxes) {
                    if (b.kind != box.kind) {
                        this.table.fadeOffItem(b, dur / 2);
                    }
                }
                box.playSound();
                this.session.correctInput(box.item, answer.item)

                let self = this
                setTimeout(() => self.hideTable(), dur * 4);

            } else {
                answer.stopDrag();
                otsimo.game.add.tween(answer)
                    .to({ x: answer.visiblePos.x, y: answer.visiblePos.y }, otsimo.kv.game.table_show_duration, Phaser.Easing.Back.Out, true);

                box.wrongAnswerCount += 1
                if (box.wrongAnswerCount >= otsimo.kv.game.hide_item_on) {
                    this.table.hideAnItem(box.id)
                }
                this.session.wrongInput(box.item, box.wrongAnswerCount)
            }
        }
    }

    onItemSelected(box) {
        if (this.gameStep.done) {
            return
        }
        if (this.gameStep.answer.kind == box.item.kind) {
            this.gameStep.done = true
            let dur = box.highlight()
            for (let b of this.table.boxes) {
                if (b.id != box.id) {
                    this.table.fadeOffItem(b, dur / 2);
                }
            }
            box.playSound();
            this.session.correctInput(box.item)

            let self = this
            setTimeout(() => self.hideTable(), dur * 4);
        } else {
            box.wrongAnswerCount += 1
            if (box.wrongAnswerCount >= otsimo.kv.game.hide_item_on) {
                this.table.hideAnItem(box.id)
            }
            this.session.wrongInput(box.item, box.wrongAnswerCount)
        }
    }

    announce(leaveY, leaveTime, answer) {
        let fill = this.gameStep.answer.tint;
        let txt = sprintf(otsimo.kv.announceText, this.gameStep.answer.text);
        let text = otsimo.game.add.text(otsimo.game.world.centerX, otsimo.game.world.centerY * 0.7, txt, otsimo.kv.announceTextStyle);

        text.anchor.set(0.5, 0.5);
        text.alpha = 0.1;
        text.fill = this.gameStep.answer.tint.replace('0x', '#');
        this.announceText = text;

        otsimo.game.add.tween(text).to({ alpha: 1 }, 100, "Linear", true);
        let a = otsimo.game.add.tween(text).to({ y: otsimo.game.world.centerY }, 300, Phaser.Easing.Circular.Out)
        let b = otsimo.game.add.tween(text).to({ y: leaveY }, leaveTime, Phaser.Easing.Circular.In, false, 1200)
        a.chain(b)
        a.start();

        otsimo.game.sound.play(this.gameStep.answer.question)

        let table = this.table;
        setTimeout(() => {
            if (answer) {
                otsimo.game.add.tween(answer)
                    .to({ x: answer.visiblePos.x }, otsimo.kv.game.table_show_duration, Phaser.Easing.Back.Out, true);
            }
            table.moveTo(table.visiblePos.x, table.visiblePos.y, otsimo.kv.game.table_show_duration);
        }, 1600);
    }

    hideTable() {
        let at = this.announceText;
        let dur = otsimo.kv.game.table_leave_duration
        this.table.moveOut(this.table.hiddenPos.x, this.table.hiddenPos.y, dur);
        otsimo.game.add.tween(at).to({ alpha: 0 }, dur / 2, Phaser.Easing.Circular.In, true);
        otsimo.game.add.tween(at).to({ y: 0 }, dur / 2, Phaser.Easing.Circular.In, true)

        let self = this
        setTimeout(() => {
            if (self.answerBox) {
                self.answerBox.destroy();
            }
            self.table.destroy(true)
            at.destroy();
            if (!self.next()) {
                self.delegate.sceneEnded()
            }
        }, dur);
    }

    showHint() {

    }

}