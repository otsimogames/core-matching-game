function makeid(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export default class Session {
  constructor({state}) {
    this.score = 0;
    this.stepScore = otsimo.kv.game.step_score;
    this.startTime = Date.now();
    this.state = state;
    this.correctAnswerTotal = 0;
    this.wrongAnswerTotal = 0;
    this.wrongAnswerStep = 0;
    this.hintTotal = 0;
    this.hintStep = 0;
    this.stepStartTime = Date.now();
    this.previousInput = Date.now();
    this.id = makeid(10);
    this.ab = otsimo.manifest.ab_test || '';
    this._itemAmount = this.itemAmount();
    this.sessionStart();
  }

  sessionStart() {
    const session_step = otsimo.kv.game.session_step;
    const payload = {
      id: this.id,
      session_step: session_step,
      difficulty: otsimo.settings.difficulty,
      difficulty_items: this._itemAmount,
      ab_test: this.ab,
    }
    otsimo.customevent('game:session:start', payload)
  }

  end() {
    const fin = Date.now();
    const delta = fin - this.startTime;

    const payload = {
      score: this.score,
      duration: delta,
      wrongAnswerTotal: this.wrongAnswerTotal,
      correctAnswerTotal: this.correctAnswerTotal,
      id: this.id,
      difficulty: otsimo.settings.difficulty,
      difficulty_items: this._itemAmount,
      ab_test: this.ab,
    }
    otsimo.customevent('game:session:end', payload)
  }

  startStep() {
    this.wrongAnswerStep = 0;
    this.hintStep = 0;
    this.stepScore = otsimo.kv.game.step_score;
    this.stepStartTime = Date.now();
    this.previousInput = Date.now();
  }

  itemAmount() {
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
  /**
   * 
   * 
   * @param {Object} box
   * @param {number} amount
   * @param {number} step
   * @param {Object} answer
   * 
   * @memberOf Session
   */
  wrongInput(box, amount, step, answer) {
    const item = box.item;
    const correct = answer.item;
    this.decrementScore();
    this.incrementHint(step);
    const now = Date.now();
    this.wrongAnswerStep += 1;
    this.wrongAnswerTotal += 1;
    const payload = {
      item: item.id,
      kind: item.kind,
      item_x: box.world.x / otsimo.game.width,
      item_y: box.world.y / otsimo.game.height,
      time: now - this.stepStartTime,
      delta: now - this.previousInput,
      correct_item: correct.id,
      correct_kind: correct.kind,
      correct_x: answer.world.x / otsimo.game.width,
      correct_y: answer.world.y / otsimo.game.height,
      hint_step: this.hintStep,
      wrong_count: amount,
      step: step,
      id: this.id,
      step_score: this.stepScore,
      difficulty: otsimo.settings.difficulty,
      difficulty_items: this._itemAmount,
      ab_test: this.ab,
      session_step: otsimo.kv.game.session_step
    }
    this.previousInput = now;
    otsimo.customevent('game:failure', payload);
  }

  /**
   * 
   * 
   * @param {object} answer
   * @param {number} step
   * 
   * @memberOf Session
   */
  correctInput(answer, step) {
    const item = answer.item;
    this.incrementHint(step);
    const now = Date.now();
    this.score += this.stepScore;
    this.correctAnswerTotal += 1;
    const payload = {
      item: item.id,
      kind: item.kind,
      item_x: answer.world.x / otsimo.game.width,
      item_y: answer.world.y / otsimo.game.height,
      time: now - this.stepStartTime,
      delta: now - this.previousInput,
      step: step,
      hint_step: this.hintStep,
      id: this.id,
      step_score: this.stepScore,
      difficulty: otsimo.settings.difficulty,
      difficulty_items: this._itemAmount,
      ab_test: this.ab,
      session_step: otsimo.kv.game.session_step
    }
    this.previousInput = now;
    otsimo.customevent('game:success', payload);
  }

  debug(game) {
    game.debug.text('score: ' + this.score, 2, 28, '#00ff00');
    game.debug.text('wrongAnswerTotal: ' + this.wrongAnswerTotal, 2, 42, '#00ff00');
    game.debug.text('wrongAnswerStep: ' + this.wrongAnswerStep, 2, 54, '#00ff00');
    game.debug.text('hintStep: ' + this.hintStep, 2, 66, '#00ff00');
    game.debug.text('hintTotal: ' + this.hintTotal, 2, 78, '#00ff00');
    game.debug.text('stepScore: ' + this.stepScore, 2, 90, '#00ff00');
  }

  decrementScore() {
    if (this.stepScore > 0) {
      this.stepScore--;
    }
  }

  /**
   * 
   * 
   * @param {number} tableHintStep
   * 
   * @memberOf Session
   */
  incrementHint(tableHintStep) {
    const change = tableHintStep - this.hintStep;
    if (this.stepScore > 0) {
      this.stepScore -= change;
      if (this.stepScore < 0) {
        this.stepScore = 0;
      }
    }
    this.hintTotal += (tableHintStep - this.hintStep);
    this.hintStep = tableHintStep;
  }


}