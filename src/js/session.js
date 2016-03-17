
export default class Session {
    constructor({state}) {
        this.score = 0
        this.startTime = new Date()
        this.state = state
    }
}