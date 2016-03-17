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
    constructor({delegate}) {
        this.delegate = delegate
        this.random = new Randomizer()
        this.step = -1
        this.state = SceneState.Initialize;
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
        if (otsimo.kv.game.answer_type == CHOOSE_GAME) {
            table.itemSelected.add(this.onItemSelected, this)
        }

        table.x = table.hiddenPos.x;
        table.y = table.hiddenPos.y;
        table.moveTo(table.visiblePos);
        
        this.table = table;
        this.gameStep = next;
    }

    prepare() {
        if (this.state == SceneState.Initialize) {
            this.next()
        }
    }

    showHint() {

    }

    onItemSelected(box) {
        console.log("item selected", box)
        if (this.gameStep.answer.kind == box.item.kind) {
            console.log("correct box")
        } else {
            console.log("wrong box")
        }
    }
}