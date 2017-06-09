import { shuffle } from './utils'
/*eslint-disable*/
import { Weighter, MAWeighter } from './weighter'
/*eslint-enable*/

export class GameStep {
  constructor({ answer, items }) {
    this.answer = answer
    this.items = items
  }
}

export class Randomizer {
  /**
   * Creates an instance of Randomizer.
   * 
   * @param {Weighter} weighter
   * 
   * @memberOf Randomizer
   */
  constructor(weighter) {
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
    this.weighter = weighter;
    this._from = _from;
    this._to = _to;
    this.values = new Set(kinds.values());
    this.kinds = kinds;
    this.k = new MAWeighter();

    this.k.stats((stats) => {
      console.log(stats);
      if (!stats.totalItems) {
        this.k.setMaterials([...this.kinds], (err) => {
          console.log("set material ended with", arguments)
        })
      }
    })
  }

  /**
   * 
   * 
   * @param {ItemWeight[]} spec
   * @returns {ItemWeight}
   * 
   * @memberOf Randomizer
   */
  weightedRand(spec) {
    let sum = 0
    for (const o of spec) {
      sum += o.weight;
      o.max = sum;
    }
    const r = Math.random() * sum;
    for (const o of spec) {
      if (r <= o.max) {
        return o;
      }
    }
    return spec[spec.length - 1]
  }
  /**
   * 
   * 
   * @returns {string}
   * 
   * @memberOf Randomizer
   */
  randomKind() {
    if (this.weighter && this.weighter.ready) {
      const values = Array.from(this.values);
      const spec = [];
      for (const v of values) {
        const w = this.weighter.kinds.get(v)
        if (typeof w !== 'undefined') {
          spec.push({ itemId: v, weight: w })
        } else {
          spec.push({ itemId: v, weight: 50 })
        }
      }
      const res = this.weightedRand(spec)
      return res.itemId
    } else {
      const randomNumber = Math.floor(Math.random() * this.values.size);
      return [...this.values][randomNumber];
    }
  }

  /**
   * 
   * 
   * @param {Set} set
   * @param {string} kind
   * @param {string[]} excluded
   * @returns
   * 
   * @memberOf Randomizer
   */
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

  before(callback) {
    if (this.values.size == 0) {
      this.values = new Set(this.kinds.values());
    }
    const s = this.randomKind();
    this.values.delete(s);

    const items = []
    const correct = this.randomItemOfKind(this._to, s, []);
    items.push(correct)
    const n = this.itemAmount - 1;
    for (let i = 0; i < n; i++) {
      const item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
      items.push(item)
    }

    if (otsimo.kv.game.answer_type == 'match') {
      const answer = this.randomItemOfKind(this._from, s, []);
      return callback(new GameStep({
        answer: answer,
        items: shuffle(items)
      }));
    } else if (otsimo.kv.game.answer_type == 'choose') {
      return callback(new GameStep({
        answer: correct,
        items: shuffle(items)
      }));
    } else {
      return callback(null);
    }
  }

  next(callback) {
    this.k.next((err, elem) => {
      if (err) {
        console.log("weighted next error", err);
        return this.before(callback);
      }
      console.log("random choosed item:", elem)
      const items = []
      const correct_mat = elem.material;
      let correct;
      for (let o of this._to) {
        if (o.kind === correct_mat) {
          correct = o;
          break;
        }
      }
      console.log("random choosed element:", correct);
      if (typeof correct === "undefined") {
        return this.before(callback);
      }
      items.push(correct)
      const n = this.itemAmount - 1;
      for (let i = 0; i < n; i++) {
        const item = this.randomItemOfKind(this._to, null, items.map(f => f.kind))
        items.push(item)
      }

      if (otsimo.kv.game.answer_type == 'match') {
        const answer = this.randomItemOfKind(this._from, correct_mat, []);
        return callback(new GameStep({
          answer: answer,
          items: shuffle(items)
        }));
      } else if (otsimo.kv.game.answer_type == 'choose') {
        return callback(new GameStep({
          answer: correct,
          items: shuffle(items)
        }));
      } else {
        return callback(null);
      }
    })
  }
}


