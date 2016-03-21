import {randomColor} from "../randomColor"

export default class Balloon extends Phaser.Group {
    constructor({game, x, y, color}) {
        super(game);

        this.x = x;
        this.y = y;

        this.create(55, 197, "ballon_rope");
        let body = this.create(0, 0, "ballon_body");
        this.create(80, 13, "ballon_light");

        body.tint = color;
        body.inputEnabled = true
        body.events.onInputDown.add(this.bodyTouched, this)
        this.bodySprite = body
    }

    bodyTouched(obj, pointer) {
        let emitter = otsimo.game.add.emitter(pointer.x, pointer.y, 100);
        emitter.makeParticles('ballon_star');
        emitter.gravity = 500;
        emitter.setYSpeed(-500, 0);
        emitter.width = this.bodySprite.width * 0.6;
        emitter.height = this.bodySprite.width * 0.3;
        emitter.start(true, 4000, null, 10);
        otsimo.game.time.events.add(4000, emitter.destroy, emitter);
        emitter.forEach((a, c) => {
            a.tint = c;
        }, this, true, this.bodySprite.tint);
        this.destroy(true);
    }

    randomScale() {
        let sc = Math.random() * 0.75 + 0.5;
        this.scale.x = sc;
        this.scale.y = sc;
    }

    moveRandomly() {
        let randDist = Math.random() * 300 - 150;
        let mx = this.x + randDist;
        if (mx < 0) {
            mx = 0
        }
        if (mx > (otsimo.game.width - 150 * this.scale.y)) {
            mx = otsimo.game.width - 175 * this.scale.y
        }

        let tween = otsimo.game.add.tween(this).to(
            { x: mx, y: (- 260 * this.scale.y) },
            (6000 + (4000 * Math.random())),
            "Linear", true, 400 * Math.random())

        tween.onComplete.add(function() {
            this.destroy(true)
        }, this)
    }

    static random() {
        let colors = randomColor(otsimo.kv.game.balloon_options)
        for (let c of colors) {
            let x = 50 + (Math.random() * otsimo.game.width) * 0.8;
            let y = otsimo.game.height + (Math.random() * 200);
            let color = parseInt(c.replace("#", "0x"), 16);

            let balloon = new Balloon({
                game: otsimo.game,
                x: x,
                y: y,
                color: color
            });

            balloon.randomScale();
            balloon.moveRandomly();
        }
    }
}