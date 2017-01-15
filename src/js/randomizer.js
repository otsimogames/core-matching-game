import { shuffle } from './utils'

export class GameStep {
  constructor({answer, items}) {
    this.answer = answer
    this.items = items
  }
}

export class Randomizer {
  constructor() {
    const kinds = new Set();
    //select kinds only if there are on both from and to
    const fromKinds = new Set();
    const _from = otsimo.kv[otsimo.kv.game.question_from];
    const _to = otsimo.kv[otsimo.kv.game.answers_from];

    for (let i = 0; i < _from.length; i++) {
      fromKinds.add(_from[i].kind);
    }
    for (let i = 0; i < _to.length; i++) {
      if (fromKinds.has(_to[i].kind)) {
        kinds.add(_to[i].kind);
      }
    }

    this._from = _from;
    this._to = _to;
    this.values = new Set(kinds.values());
    this.kinds = kinds;
  }

  randomKind() {
    const randomNumber = Math.floor(Math.random() * this.values.size);
    return [...this.values][randomNumber];
  }

  randomItemOfKind(set, kind, excluded) {
    const f = [...set].filter(l => {
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
    const diff = otsimo.settings.difficulty;
    if (diff == 'easy') {
      return otsimo.kv.game.easy_size;
    } else if (diff == 'medium') {
      return otsimo.kv.game.medium_size;
    } else if (diff == 'hard') {
      return otsimo.kv.game.hard_size;
    }
    return otsimo.kv.game.medium_size;
  }

  next(callback) {
    if (this.values.size == 0) {
      this.values = new Set(this.kinds.values());
    }

    const s = this.randomKind();
    this.values.delete(s);


    if (otsimo.kv.game.answer_type == 'match') {
      const items = []
      const correct = this.randomItemOfKind(this._to, s, []);
      items.push(correct)
      const n = this.itemAmount - 1;
      for (let i = 0; i < n; i++) {
        const item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
        items.push(item)
      }

      const answer = this.randomItemOfKind(this._from, s, []);
      return callback(new GameStep({
        answer: answer,
        items: shuffle(items)
      }));
    } else if (otsimo.kv.game.answer_type == 'choose') {
      const items = []
      const correct = this.randomItemOfKind(this._to, s, []);
      items.push(correct)

      const n = this.itemAmount - 1;
      for (let i = 0; i < n; i++) {
        const item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
        items.push(item)
      }

      return callback(new GameStep({
        answer: correct,
        items: shuffle(items)
      }));
    } else {
      return callback(null);
    }
  }
}