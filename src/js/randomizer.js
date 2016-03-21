import {shuffle} from "./utils"

export class GameStep {
    constructor({answer, items}) {
        this.answer = answer
        this.items = items
    }
}

export class Randomizer {
    constructor() {
        let kinds = new Set();
        //select kinds only if there are on both from and to
        let fromKinds = new Set();
        let _from = otsimo.kv[otsimo.kv.game.question_from];
        let _to = otsimo.kv[otsimo.kv.game.answers_from];

        for (let i of _from) {
            fromKinds.add(i.kind)
        }
        for (let i of _to) {
            if (fromKinds.has(i.kind)) {
                kinds.add(i.kind);
            }
        }

        this._from = _from;
        this._to = _to;
        this.values = new Set(kinds.values());
        this.kinds = kinds;
    }

    randomKind() {
        let randomNumber = Math.floor(Math.random() * this.values.size);
        return [...this.values][randomNumber];
    }

    randomItemOfKind(set, kind, excluded) {
        let f = [...set].filter(l => {
            if (kind != null && l.kind != kind) {
                return false;
            }
            if (excluded != null && excluded.indexOf(l.kind) >= 0) {
                return false;
            }
            return true;
        });

        return f[Math.floor(Math.random() * f.length)]
    }

    get itemAmount() {
        let diff = otsimo.settings.difficulty;
        if (diff == "easy") {
            return otsimo.kv.game.easy_size;
        } else if (diff == "medium") {
            return otsimo.kv.game.medium_size;
        } else if (diff == "hard") {
            return otsimo.kv.game.hard_size;
        }
        return otsimo.kv.game.medium_size;
    }

    next(callback) {
        if (this.values.size == 0) {
            this.values = new Set(kinds.values());
        }

        let s = this.randomKind();

        if (otsimo.kv.game.answer_type == "match") {
            let items = []
            let correct = this.randomItemOfKind(this._to, s, []);
            items.push(correct)
            let n = this.itemAmount - 1;
            for (let i = 0; i < n; i++) {
                let item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
                items.push(item)
            }

            let answer = this.randomItemOfKind(this._from, s, []);
            return callback(new GameStep({
                answer: answer,
                items: shuffle(items)
            }));
        } else if (otsimo.kv.game.answer_type == "choose") {
            let items = []
            let correct = this.randomItemOfKind(this._to, s, []);
            items.push(correct)

            let n = this.itemAmount - 1;
            for (let i = 0; i < n; i++) {
                let item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
                items.push(item)
            }

            return callback(new GameStep({
                answer: answer,
                items: shuffle(items)
            }));
        } else {
            return callback(null);
        }
    }
}