/**
 * 
 * 
 * @export
 * @class Hint
 */
export default class Hint {
    constructor({game, answer, match}) {
        this.game = game;
        this.answer = answer;
        this.match = match;
        this.step = 0;
        this.arrow = undefined;
        this.tween = undefined;
        this.timer = undefined;
        this.step = 0;
        this.halt = false;
        this.tweenArr = [];
        this.timerArr = [];
    }

    /**
     * 
     * 
     * @param {number} delay
     * 
     * @memberOf Hint
     */
    call(delay) {
        if (!otsimo.settings.show_hint) {
            return;
        }
        this.removeTimer();
        switch (otsimo.kv.game.hint_type) {
            case ("jump"):
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration * 1000), this.jump, this);
                this.timerArr.push(this.timer);
                break;
            case ("hand"):
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration * 1000), this.hand, this);
                this.timerArr.push(this.timer);
                break;
            default:
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration * 1000), this.hand, this);
                this.timerArr.push(this.timer);
                break;
        }
    }

    kill() {
        switch (otsimo.kv.game.hint_type) {
            case ("jump"):
                this.killTweenIn();
                break;
            case ("hand"):
                this.killArrow();
                break;
            default:
                this.killArrow();
                break;
        }
    }

    removeTimer() {
        otsimo.game.time.events.stop(false);
        if (this.timer) {
            otsimo.game.time.events.remove(this.timer);
            this.timer = undefined;
        }
        otsimo.game.time.events.start();
    }

    incrementStep() {
        this.step++;
    }

    hand() {
        this.halt = false;
        this.incrementStep();
        if (this.step > 3 && this.arrow) {
            return;
        }
        if (otsimo.kv.game.answer_type == "match") {
            this.handMatch();
        } else {
            this.handTween();
        }
    }

    jump() {
        this.halt = false;
        this.incrementStep();
        switch (otsimo.kv.game.answer_type) {
            case ("choose"):
                this.jumpTween("h", 0, 0);
                break;
            case ("match"):
                this.jumpTween("v", 0, 0);
                break;
            default:
                this.jumpTween("h", 0, 0);
        }
    }

    handTween() {
        this.arrow = otsimo.game.add.sprite(this.answer.world.x, this.answer.world.y + otsimo.game.height * 0.05, 'hand');
        this.arrow.anchor.set(0.4, 0);
        let t = otsimo.game.add.tween(this.arrow).to({ y: this.answer.world.y }, otsimo.kv.game.hint_hand_duration, Phaser.Easing.Sinusoidal.Out, false);
        let t2 = otsimo.game.add.tween(this.arrow)
            .to({ y: this.answer.world.y + otsimo.game.height * 0.05 }, otsimo.kv.game.hint_hand_duration, Phaser.Easing.Sinusoidal.In, false);
        this.tweenArr.push(t);
        this.tweenArr.push(t2);
        if (this.step < 3) {
            t2.onComplete.add(this.kill, this);
        }
        t.chain(t2);
        t.start();
        let delay = 2 * otsimo.kv.game.hint_hand_duration;
        this.call(delay);
        this.answer.tweenArray = this.tweenArr;
    }

    handMatch() {
        if (!this.match) {
            console.log("no this.match, returning");
            return;
        }
        this.arrow = otsimo.game.add.sprite(this.match.world.x, this.match.world.y + otsimo.game.height * 0.05, 'hand');
        this.arrow.anchor.set(0.5, 0.1);
        let t = otsimo.game.add.tween(this.arrow).to({ y: this.match.world.y }, otsimo.kv.game.hint_hand_duration, Phaser.Easing.Sinusoidal.Out, false);
        let t2 = otsimo.game.add.tween(this.arrow.scale).to({ x: 0.8, y: 0.8 }, 200, Phaser.Easing.Back.Out, false);
        let t3 = otsimo.game.add.tween(this.arrow)
            .to({ x: this.answer.world.x, y: this.answer.world.y }, otsimo.kv.game.hint_hand_match_duration, Phaser.Easing.Sinusoidal.Out, false);
        this.tweenArr.push(t);
        this.tweenArr.push(t2);
        this.tweenArr.push(t3);
        if (this.step < 3) {
            t3.onComplete.add(this.kill, this);
        }
        t.chain(t2);
        t2.chain(t3);
        t.start();
        let delay = otsimo.kv.game.hint_hand_duration + otsimo.kv.game.hint_hand_match_duration + 100;
        this.call(delay);
        this.answer.tweenArray = this.tweenArr;
    }

    /**
     * 
     * 
     * @param {string} type
     * @param {string} count
     * @param {number} delay
     * @memberOf Hint
     */
    jumpTween(type, count, delay) {
        if (this.halt) {
            console.log("HALT");
            return;
        }
        count++;
        let x0 = this.answer.x;
        let x1 = this.answer.x;
        let x2 = this.answer.x;
        let y0 = this.answer.y;
        let y1 = this.answer.y;
        let y2 = this.answer.y;
        if (type == "h") {
            y0 = 0;
            y1 = -30;
        } else {
            x0 = 0;
            x1 = -30;
        }
        this.tween = otsimo.game.add.tween(this.answer)
            .to({ x: x1, y: y1 }, otsimo.kv.game.hint_jump_duration, Phaser.Easing.Sinusoidal.Out, false, delay)
            .to({ x: x0, y: y0 }, otsimo.kv.game.hint_jump_duration, Phaser.Easing.Sinusoidal.In, false);
        delay += 2 * otsimo.kv.game.hint_jump_duration + 100;
        this.tweenArr.push(this.tween);
        this.answer.tweenArray = this.tweenArr;
        if (this.step >= 3) {
            this.tween.loop();
            this.tween.start();
        } else {
            if (count <= 3) {
                this.tween.start();
                this.jumpTween(type, count, delay);
            } else {
                this.killTweenIn();
                this.call(delay);
            }
        }
    }

    killTweenIn() {
        if (this.tween) {
            this.tween.stop();
            this.halt = true;
            var temp = this.tween;
            while (temp.chainedTween != null) {
                let k = temp.chainedTween;
                otsimo.game.tween.remove(temp.chainedTween);
                temp = k;
            }
            otsimo.game.tweens.remove(this.tween);
        }
    }

    /**
     * 
     * 
     * @param {number} x
     * @param {number} y
     * 
     * @memberOf Hint
     */
    killTween(x, y) {
        let temp = this.tween;
        for (let j = 0; j < this.tweenArr.length; j++) {
            temp = this.tweenArr[j];
            while (temp.chainedTween != null) {
                let k = temp.chainedTween;
                otsimo.game.tweens.remove(temp.chainedTween);
                temp = k;
            }
            otsimo.game.tweens.remove(this.tweenArr[j]);
        }
        if (this.tween) {
            this.tween.stop();
            this.halt = true;
        }

        if (otsimo.kv.game.answer_type == "match") {
            this.answer.x = x;
        } else {
            this.answer.y = y;
        }

    }

    killArrow() {
        if (this.arrow) {
            this.arrow.kill();
            this.arrow = undefined;
        }
    }

    /**
     * 
     * @returns number
     * @memberOf Hint
     */
    getStep() {
        return this.step;
    }

}