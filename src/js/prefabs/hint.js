export default class Hint {
    constructor({game, answer}) {
        this.game = game;
        this.answer = answer;
        this.step = 0;
        this.arrow = undefined;
        this.tween = undefined;
        this.timer = undefined;
        this.step = 0;
        this.halt = false;
        this.tweenArr = [];
        this.timerArr = [];
    }

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
        this.handTween();
    }

    jump() {
        this.halt = false;
        this.incrementStep();
        /*if (this.step > 3) {
            console.log("this.tween:", this.tween);
            return;
        } else {*/
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
        //}
    }

    handTween() {
        console.log("this.answer is: ", this.answer);
        this.arrow = otsimo.game.add.sprite(this.answer.world.x, this.answer.world.y + otsimo.game.height * 0.05, 'hand');
        this.arrow.anchor.set(0.5, 0.1);
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

    killTween(x, y) {
        let temp = this.tween;
        for (let i of this.tweenArr) {
            temp = i;
            while (temp.chainedTween != null) {
                let k = temp.chainedTween;
                otsimo.game.tweens.remove(temp.chainedTween);
                temp = k;
            }
            otsimo.game.tweens.remove(i);
            i = undefined;
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

}