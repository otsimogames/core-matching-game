import {Scene} from './scene'

export default class Session {
    constructor({state}) {
        this.score = 0;
        this.startTime = Date.now();
        this.state = state;
        this.wrongAnswerTotal = 0;
        this.wrongAnswerStep = 0
    }

    end() {
        let fin = Date.now();
        let delta = fin - this.startTime;
        console.log("end session, post to analytics", delta)
    }

    startStep() {
        this.wrongAnswerStep = 0;
        console.log("start step")
    }

    wrongInput(item, amount) {
        this.wrongAnswerStep += 1;
        this.wrongAnswerTotal += 1;
        console.log("wrong input", item, amount);
    }

    correctInput(item, answerItem) {
        console.log("correct input", item, answerItem);
    }

    debug(game) {
        game.debug.text("score: " + this.score, 2, 28, "#00ff00");
        game.debug.text("wrongAnswerTotal: " + this.wrongAnswerTotal, 2, 42, "#00ff00");
        game.debug.text("wrongAnswerStep: " + this.wrongAnswerStep, 2, 54, "#00ff00");

    }
}