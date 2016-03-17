
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

    correctInput(item) {
        console.log("correct input")
    }
}