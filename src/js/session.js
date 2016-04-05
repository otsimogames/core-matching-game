import {Scene} from './scene'


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
    }

    end() {
        let fin = Date.now();
        let delta = fin - this.startTime;

        let payload = {
            score: this.score,
            duration: delta,
            failure: this.wrongAnswerTotal,
            success: this.correctAnswerTotal,
        }

        otsimo.customevent("game:session:end", payload)
        console.log("end session, post to analytics", payload)
    }

    startStep() {
        this.wrongAnswerStep = 0;
        this.hintStep = 0;
        this.stepScore = otsimo.kv.game.step_score;
        this.stepStartTime = Date.now();
        this.previousInput = Date.now();
        console.log("start step");
    }

    wrongInput(item, amount) {
        let now = Date.now();        
        this.decrementScore();
        this.wrongAnswerStep += 1;
        this.wrongAnswerTotal += 1;
        let payload = {
            item: item.id,
            kind: item.kind,
            time: now - this.stepStartTime,
            delta: now - this.previousInput
        }
        this.previousInput = now;
        otsimo.customevent("game:failure", payload);
        console.log("wrong input", item, amount);

    }

    correctInput(item, answerItem) {
        let now = Date.now();
        this.score += this.stepScore;
        this.correctAnswerTotal += 1;
        let payload = {
            item: item.id,
            kind: item.kind,
            time: now - this.stepStartTime,
            delta: now - this.previousInput
        }
        this.previousInput = now;
        otsimo.customevent("game:success", payload);
        console.log("correct input", item, answerItem);
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

    incrementHint(tableHintStep) {
        let change = tableHintStep - this.hintStep;
        console.log("change is", change);
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