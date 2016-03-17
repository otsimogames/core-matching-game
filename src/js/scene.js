import {shuffle} from "./utils"
import {Randomizer} from "./randomizer"
import Table from "./prefabs/table"

const SceneState = {
    Initialize: 0,
    Announce: 1,
    Entering: 2,
    Input: 3,
    Leave: 4
}
const MATCH_GAME = "match"
const CHOOSE_GAME = "choose"

export {SceneState, MATCH_GAME, CHOOSE_GAME};

export default class Scene {
    constructor({delegate, session}) {
        this.delegate = delegate
        this.session = session
        this.random = new Randomizer()
        this.step = -1
        this.state = SceneState.Initialize
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
            this.announceChoose()
        } else {

        }
        this.session.startStep();
        return true;
    }

    prepare() {
        if (this.state == SceneState.Initialize) {
            this.next()
        }
    }

    showHint() {

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
            this.session.correctInput(box.item)
            let self = this

            setTimeout(function() {
                self.hideTable();
            }, dur * 4);
        } else {
            box.wrongAnswerCount += 1
            if (box.wrongAnswerCount >= otsimo.kv.game.hide_item_on) {
                this.table.hideAnItem(box.id)
            }
            this.session.wrongInput(box.item, box.wrongAnswerCount)
        }
    }

    announceChoose() {
        let fill = this.gameStep.answer.tint;
        let txt = sprintf(otsimo.kv.announceText, this.gameStep.answer.text);
        let text = otsimo.game.add.text(otsimo.game.world.centerX, otsimo.game.world.centerY * 0.7, txt, otsimo.kv.announceTextStyle);

        text.anchor.set(0.5);
        text.alpha = 0.1;
        text.fill = this.gameStep.answer.tint.replace('0x', '#');
        this.announceText = text;
        otsimo.game.add.tween(text).to({ alpha: 1 }, 300, "Linear", true);
        otsimo.game.add.tween(text).to({ y: otsimo.game.world.centerY }, 300, "Linear", true)
        otsimo.game.add.tween(text).to({ y: otsimo.game.world.centerY * 0.3 }, 300, "Linear", true, 1500)
        let question = otsimo.game.add.audio(this.gameStep.answer.question);

        otsimo.game.sound.setDecodedCallback([question], function() {
            question.play()
            console.log("is mute ", otsimo.game.sound.mute)
        }, this);

        let table = this.table;
        setTimeout(function() {
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
        setTimeout(function() {
            self.table.destroy(true)
            at.destroy();

            if (!self.next()) {
                self.delegate.sceneEnded()
            }
        }, dur);
    }
}