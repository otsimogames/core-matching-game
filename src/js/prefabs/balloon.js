
export default class Balloon extends Phaser.Group {
    constructor({game, x, y, color}) {
        super(game)

        this.x = x
        this.y = y;

        this.create(48, 53, "ballon_rope")
        let body = this.create(0, 0, "ballon_body")
        this.create(51, 56, "ballon_light")

        body.tint = color
    }
}