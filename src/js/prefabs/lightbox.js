export default class Lightbox {

    constructor({session, scene}) {
        this.session = session;
        this.scene = scene;
        this.coverClicked = new Phaser.Signal();
        this.coverClicked.add(() => {
            this.destroy();
        });
    }

    createCover() {
        let cover = otsimo.game.add.tileSprite(0, 0, otsimo.game.width, otsimo.game.height, "gray");
        this.cover = cover;
        this.cover.events.onInputDown.add(this.clickListener, this);
        this.cover.alpha = 0;
        this.cover.inputEnabled = true;        
        //this.cover.events.onInputDown.add(this.clickListener, this);
        //otsimo.game.add.tween(this.cover).to({ alpha: 0.5 }, 300, Phaser.Easing.Sinusoidal.Out, true);
        return cover;
    }

    createLightboxScene(width, height) {

        // TODO:
        // add table in 0.9 x 0.9

        this.scene.hint.kill();
        this.scene.hint.removeTimer();
        this.scene.table.disableAll();

        //create background
        let start_x = otsimo.game.width * 0.05;
        let start_y = otsimo.game.height * 0.05;

        this.bg = otsimo.game.add.tileSprite(start_x, start_y, width, height, "gray");
        this.bg.alpha = 0;
        otsimo.game.add.tween(this.bg).to({ alpha: 0.7 }, 500, Phaser.Easing.Sinusoidal.Out, true);
        this.bg.inputEnabled = true;

        this.bg.events.onInputDown.add(this.clickListener, this);

        //table.moveTo(table.visiblePos.x, table.visiblePos.y, otsimo.kv.game.table_show_duration);

        setTimeout(() => {
            //
        }, 1600);
    }

    call() {
        this.createCover();
        let w = otsimo.game.width * 0.9;
        let h = otsimo.game.height * 0.9;
        this.createLightboxScene(w, h);
    }

    clickListener() {
        console.log("clicked");
        this.destroy();
    }

    destroy() {
        console.log("destroying the lightbox");
        this.cover.destroy();
        this.bg.alpha = 0;
        this.bg.destroy();
        this.scene.table.enableAll();
        this.scene.hint.call(0);
    }

}