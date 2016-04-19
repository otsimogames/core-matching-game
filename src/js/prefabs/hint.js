export default class Hint {
    constructor({game, answer}) {
        this.game = game;
        this.answer = answer;
        this.step = 0;
        this.arrow = undefined;
        this.tween = undefined;
        this.timer = undefined;
        this.step = 0;
    }

    call(delay) {
        console.log("call");
        switch (otsimo.kv.game.hint_type) {
            case ("jump"):
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration*1000), this.jump, this);
                break;
            case ("hand"):
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration*1000), this.hand, this);
                break;
            default:
                this.timer = otsimo.game.time.events.add(delay + (otsimo.settings.hint_duration*1000), this.hand, this);
                break;
        }
    }
    
    kill() {
        console.log("kill");
        switch (otsimo.kv.game.hint_type) {
            case ("jump"):
                this.killTween(Infinity, Infinity);
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
        console.log("removeTimer");
        if (this.timer) {
            otsimo.game.time.events.remove(this.timer);
            this.timer = undefined;
        }
    }

    incrementStep() {
        console.log("incrementStep");
        this.step++;
    }

    hand() {
        console.log("hand");
        this.incrementStep();
        if (this.step > 3 && this.arrow) {
            return;
        }
        this.handTween();
    }
    
    handTween() {
        console.log("handTween");
        this.arrow = otsimo.game.add.sprite(this.answer.world.x, this.answer.world.y + otsimo.game.height * 0.05, 'hand');
        this.arrow.anchor.set(0.5, 0.1);
        let t = otsimo.game.add.tween(this.arrow).to({ y: this.answer.world.y }, otsimo.kv.game.hint_hand_duration, Phaser.Easing.Circular.Out, false);
        let t2 = otsimo.game.add.tween(this.arrow)
            .to({ y: this.answer.world.y + otsimo.game.height * 0.05 }, otsimo.kv.game.hint_duration_hand, Phaser.Easing.Linear.In, false);
        t2.onComplete.add(this.kill, this);
        t.chain(t2);
        t.start();
        let delay = otsimo.kv.game.hint_hand_duration;
        this.call(delay);
    }

    jump() {
        console.log("jump");
        this.incrementStep();
        if (this.step > 3 && this.tween) {
            console.log("this.tween:", this.tween);
            return;
        } else {
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
    }

    jumpTween(type, count, delay) {
        console.log("jumpTween");
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
        console.log("this.step is: ", this.step);
        if (this.step >= 3) {
            this.tween.loop();
            this.tween.start();
        } else {
            if (count <= 3) {
                this.tween.start();
                this.jumpTween(type, count, delay);
            } else {
                this.killTween(Infinity, Infinity);
                this.call(delay);
            }
        }
    }

    killTween(x, y) {
        console.log("killTween");
        if (this.tween) {
            var temp = this.tween;
            while (temp.chainedTween != null) {
                let k = temp.chainedTween;
                otsimo.game.tweens.remove(temp.chainedTween);
                temp = k;
            }
            otsimo.game.tweens.remove(this.tween);
            this.tween = undefined;
            if (x == Infinity && y == Infinity) {
                return;
            } else {
                this.answer.x = x;
                this.answer.y = y;
            }
        }
    }

    killArrow() {
        console.log("killArrow");
        if (this.arrow) {
            this.arrow.kill();
            this.arrow = undefined;
        }
    }

}