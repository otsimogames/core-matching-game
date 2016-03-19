
export default class Session {
    constructor({state}) {
        this.score = 0
        this.startTime = new Date()
        this.state = state
        this.wrongAnswerTotal = 0
        this.wrongAnswerStep = 0
    }

    end() {
        console.log("end session, post to analytics")
    }

    startStep() {
        this.wrongAnswerStep = 0
        console.log("start step")
    }

    wrongInput(item, amount) {
        this.wrongAnswerStep += 1
        this.wrongAnswerTotal += 1
        console.log("wrong input")
    }

    correctInput(item, answerItem) {
        console.log("correct input")
    }

    debug(game) {
        game.debug.text("score: " + this.score, 2, 28, "#00ff00");
        game.debug.text("wrongAnswerTotal: " + this.wrongAnswerTotal, 2, 42, "#00ff00");
        game.debug.text("wrongAnswerStep: " + this.wrongAnswerStep, 2, 54, "#00ff00");

    }
}