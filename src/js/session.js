function makeid(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
        this._itemAmount = this.itemAmount(); 
        this.sessionStart();
    }

    sessionStart() {
        let itemAmount = this.itemAmount();
        let session_step = otsimo.kv.game.session_step;
        let payload = {
            id: this.id,
            session_step: session_step,
            difficulty: otsimo.settings.difficulty,
            difficulty_items: this._itemAmount
        }
        otsimo.customevent("game:session:start", payload)
    }

    end() {
        let fin = Date.now();
        let delta = fin - this.startTime;

        let payload = {
            score: this.score,
            duration: delta,
            wrongAnswerTotal: this.wrongAnswerTotal,
            correctAnswerTotal: this.correctAnswerTotal,
            id: this.id,
            difficulty: otsimo.settings.difficulty,
            difficulty_items: this._itemAmount
        }
        otsimo.customevent("game:session:end", payload)
    }

    startStep() {
        this.wrongAnswerStep = 0;
        this.hintStep = 0;
        this.stepScore = otsimo.kv.game.step_score;
        this.stepStartTime = Date.now();
        this.previousInput = Date.now();
    }

    itemAmount() {
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
    /**
     * 
     * 
     * @param {Object} item
     * @param {number} amount
     * @param {number} step
     * @param {Object} correct
     * 
     * @memberOf Session
     */
    wrongInput(item, amount, step, correct) {
        console.log("item amount: ", amount);
        this.decrementScore();
        this.incrementHint(step);
        let now = Date.now();
        this.wrongAnswerStep += 1;
        this.wrongAnswerTotal += 1;
        let payload = {
            item: item.id,
            kind: item.kind,
            time: now - this.stepStartTime,
            delta: now - this.previousInput,
            correct_item: correct.id,
            correct_kind: correct.kind,
            hint_step: this.hintStep,
            wrong_count: amount,
            step: step,
            id: this.id,
            step_score: this.stepScore,            
            difficulty: otsimo.settings.difficulty,
            difficulty_items: this._itemAmount
        }
        this.previousInput = now;
        otsimo.customevent("game:failure", payload);
    }

    /**
     * 
     * 
     * @param {object} item
     * @param {number} step
     * 
     * @memberOf Session
     */
    correctInput(item, step) {
        this.incrementHint(step);
        let now = Date.now();
        this.score += this.stepScore;
        console.log("score: ", this.score);
        this.correctAnswerTotal += 1;
        //toto(sercan) add other items
        let payload = {
            item: item.id,
            kind: item.kind,
            time: now - this.stepStartTime,
            delta: now - this.previousInput,
            step: step,
            hint_step: this.hintStep,            
            id: this.id,
            step_score: this.stepScore,
            difficulty: otsimo.settings.difficulty,
            difficulty_items: this._itemAmount
        }
        this.previousInput = now;
        otsimo.customevent("game:success", payload);
    }

    debug(game) {
        game.debug.text("score: " + this.score, 2, 28, "#00ff00");
        game.debug.text("wrongAnswerTotal: " + this.wrongAnswerTotal, 2, 42, "#00ff00");
        game.debug.text("wrongAnswerStep: " + this.wrongAnswerStep, 2, 54, "#00ff00");
        game.debug.text("hintStep: " + this.hintStep, 2, 66, "#00ff00");
        game.debug.text("hintTotal: " + this.hintTotal, 2, 78, "#00ff00");
        game.debug.text("stepScore: " + this.stepScore, 2, 90, "#00ff00");
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
        let change = tableHintStep - this.hintStep;
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