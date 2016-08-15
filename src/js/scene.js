import {Randomizer} from "./randomizer"
import Table from "./prefabs/table"
import Box from "./prefabs/box"
import Hint from "./prefabs/hint"

const MATCH_GAME = "match";
const CHOOSE_GAME = "choose";

export {MATCH_GAME, CHOOSE_GAME};

export default class Scene {
    constructor({delegate, session}) {
        this.delegate = delegate;
        this.session = session;
        this.random = new Randomizer();
        this.step = -1;
        this.prevS = 0;
    }

    get step() {
        return this.current_step | 0;
    }

    set step(value) {
        this.current_step = value;
    }

    next() {
        if (otsimo.game.state.current != "Play") {
            return false;
        }
        this.step = this.step + 1;
        if (this.step >= otsimo.kv.game.session_step) {
            return false;
        }
        this.random.next((next) => {
            let dir = (otsimo.kv.game.answer_type == MATCH_GAME ? "vertical" : "horizontal");
            let table = new Table({
                game: otsimo.game,
                items: next.items,
                direction: dir,
                enableInput: (otsimo.kv.game.answer_type == CHOOSE_GAME)
            });

            table.x = table.hiddenPos.x;
            table.y = table.hiddenPos.y;

            this.table = table;
            this.gameStep = next;


            if (otsimo.kv.game.answer_type == CHOOSE_GAME) {
                this.answerBox = Box.answerBox({ item: next.answer, table: table });
                table.itemSelected.add(this.onItemSelected, this);
                this.announce(otsimo.game.world.centerY * 0.3, 300)
            } else {
                this.answerBox = Box.answerBox({ item: next.answer, table: table });
                this.answerBox.onDragUpdate.add(this.onDrag, this);
                this.announce(-100, 500, this.answerBox);
            }
            this.session.startStep();
        })
        return true;
    }

    onDrag() {
        if (otsimo.kv.game.hint_type == "hand") {
            this.hint.kill();
        }
        this.hint.removeTimer();
        if (this.gameStep.done) {
            return;
        }
        let answer = this.answerBox;
        let box = this.table.isCollides(answer.getBounds());
        if (box != null) {
            if (box.item.kind == answer.item.kind) {
                this.hint.killTween(this.answerChoose.x, this.answerChoose.y);
                this.gameStep.done = true;
                answer.stopAndDisableDrag();
                const dur = 150;

                for (let i = 0; i < this.table.boxes.length; i++) {
                    let b = this.table.boxes[i];
                    if (b.kind != box.kind) {
                        this.table.fadeOffItem(b, dur / 2);
                    }
                }
                box.playSound();
                let tempS = this.hint.getStep();
                this.prevS = tempS;
                this.session.correctInput(box.item, tempS);

                let self = this
                setTimeout(() => self.hideTable(), dur * 4);

            } else {
                this.hint.killTween(this.oldX, this.oldY);
                answer.stopDrag();
                otsimo.game.add.tween(answer)
                    .to({ x: answer.visiblePos.x, y: answer.visiblePos.y }, otsimo.kv.game.table_show_duration, Phaser.Easing.Back.Out, true);

                box.wrongAnswerCount += 1
                if (box.wrongAnswerCount >= otsimo.kv.game.hide_item_on) {
                    this.table.hideAnItem(box.id);
                    if (otsimo.kv.game.hiding_type == "fade") {
                        otsimo.game.time.events.add(otsimo.kv.game.hiding_fade_duration, this.findAnswer, this);
                    } else if (otsimo.kv.game.hiding_type == "move") {
                        otsimo.game.time.events.add(otsimo.kv.game.hiding_move_duration * 2.5, this.findAnswer, this);
                    }
                }
                let tempS = this.hint.getStep() - this.prevS;
                this.prevS = tempS;
                this.session.wrongInput(box.item, box.wrongAnswerCount, tempS);
            }
        }
        if (!this.gameStep.done) {
            this.hint.call(0);
        }
    }

    onItemSelected(box) {
        if (otsimo.kv.game.hint_type == "hand") {
            this.hint.kill();
        }
        this.hint.removeTimer();
        if (this.gameStep.done) {
            return;
        }
        if (this.gameStep.answer.kind == box.item.kind) {
            this.hint.killTween(this.answerChoose.x, this.answerChoose.y);
            this.gameStep.done = true
            let dur = box.highlight()
            for (let i = 0; i < this.table.boxes.length; i++) {
                let b = this.table.boxes[i];
                if (b.id != box.id) {
                    this.table.fadeOffItem(b, dur / 2);
                }
            }
            box.playSound();
            if (otsimo.correctSound) {
                otsimo.correctSound.play(null, null, 0.5)
            }
            let tempS = this.hint.getStep() - this.prevS;
            this.prevS = tempS;
            this.session.correctInput(box.item, tempS);

            let self = this
            setTimeout(() => self.hideTable(), dur * 4);
        } else {
            box.wrongAnswerCount += 1
            this.hint.killTween(this.oldX, this.oldY);
            if (box.wrongAnswerCount >= otsimo.kv.game.hide_item_on) {
                this.table.hideAnItem(box.id);
                if (otsimo.kv.game.hiding_type == "fade") {
                    otsimo.game.time.events.add(otsimo.kv.game.hiding_fade_duration, this.findAnswer, this);
                } else if (otsimo.kv.game.hiding_type == "move") {
                    otsimo.game.time.events.add(otsimo.kv.game.hiding_move_duration * 2.5, this.findAnswer, this);
                }
            }
            let tempS = this.hint.getStep() - this.prevS;
            this.prevS = tempS;
            this.session.wrongInput(box.item, box.wrongAnswerCount, tempS);
        }
        if (!this.gameStep.done) {
            this.hint.call(0);
        }
    }

    announce(leaveY, leaveTime, answer) {
        let txt = sprintf(otsimo.kv.announceText, this.gameStep.answer.text);
        let text = otsimo.game.add.text(otsimo.game.world.centerX, otsimo.game.world.centerY * 0.7, txt, otsimo.kv.announceTextStyle);

        text.anchor.set(0.5, 0.5);
        text.alpha = 0.1;
        if (otsimo.kv.custom_announce_color) {
            text.fill = otsimo.kv.custom_announce_color.replace("0x", "#");
        } else {
            text.fill = this.gameStep.answer.tint.replace("0x", "#");
        }
        this.announceText = text;

        otsimo.game.add.tween(text).to({ alpha: 1 }, 100, "Linear", true);
        let a = otsimo.game.add.tween(text).to({ y: otsimo.game.world.centerY }, 300, Phaser.Easing.Circular.Out)
        let b = otsimo.game.add.tween(text).to({ y: leaveY }, leaveTime, Phaser.Easing.Circular.In, false, 1200)
        a.chain(b)
        a.start();

        if (this.gameStep.answer.question) {
            otsimo.tts.speak(this.gameStep.answer.question)
        } else {
            otsimo.game.sound.play(this.gameStep.answer.question)
        }

        let table = this.table;
        setTimeout(() => {
            if (answer) {
                otsimo.game.add.tween(answer)
                    .to({ x: answer.visiblePos.x }, otsimo.kv.game.table_show_duration, Phaser.Easing.Back.Out, true);
            }
            table.moveTo(table.visiblePos.x, table.visiblePos.y, otsimo.kv.game.table_show_duration);
        }, 1600);
        this.findAnswer();
        if (!this.answerBox) {
            this.answerBox = undefined;
        }
        let hint = new Hint({
            game: otsimo.game,
            answer: this.answerChoose,
            match: this.answerBox
        });
        this.hint = hint;
        this.hint.call(1600);
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
            if (!self.next() && otsimo.game.state.current == "Play") {
                self.delegate.sceneEnded()
            }
        }, dur);
    }

    findAnswer() {
        for (let j = 0; j < this.table.boxes.length; j++) {
            let i = this.table.boxes[j];
            if (i.id == this.gameStep.answer.id) {
                this.answerChoose = i;
                this.oldX = this.answerChoose.x;
                this.oldY = this.answerChoose.y;
                return;
            }
        }
    }



}

export {Scene};