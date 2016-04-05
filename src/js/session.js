import {Scene} from './scene'

export default class Session {
    constructor({state}) {
        this.score = 0;
        this.stepScore = otsimo.kv.game.step_score;
        this.startTime = Date.now();
        this.state = state;
        this.wrongAnswerTotal = 0;
        this.wrongAnswerStep = 0;
        this.hintTotal = 0;
        this.hintStep = 0;
    }

    end() {
        let fin = Date.now();
        let delta = fin - this.startTime;
        console.log("end session, post to analytics", delta)
    }

    startStep() {
        this.wrongAnswerStep = 0;
        this.hintStep = 0;
        this.stepScore = otsimo.kv.game.step_score;
        console.log("start step");
    }

    wrongInput(item, amount) {
        this.decrementScore();
        this.wrongAnswerStep += 1;
        this.wrongAnswerTotal += 1;
        console.log("wrong input", item, amount);
    }

    correctInput(item, answerItem) {
        this.score+=this.stepScore;
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
        if(this.stepScore > 0) {
            this.stepScore--;
        }
    }

    incrementHint(tableHintStep) {
        let change = tableHintStep-this.hintStep;
        console.log("change is", change);
        if(this.stepScore > 0) {
            this.stepScore -= change;
            if (this.stepScore < 0) {
                this.stepScore = 0;
            }
        }
        this.hintTotal += (tableHintStep-this.hintStep);
        this.hintStep = tableHintStep;
    }


}