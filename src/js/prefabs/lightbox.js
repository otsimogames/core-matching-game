export default class Lightbox {

  constructor({session, scene}) {
    this.session = session;
    this.scene = scene;
    this.abort = false;
    this.video = undefined;
    this.coverClicked = new Phaser.Signal();
    this.coverClicked.add(() => {
      this.destroyAll();
    });
  }

  createCover() {
    const cover = otsimo.game.add.tileSprite(0, 0, otsimo.game.width, otsimo.game.height, 'gray');
    this.cover = cover;
    this.cover.events.onInputDown.add(this.clickListener, this);
    this.cover.alpha = 0;
    this.cover.inputEnabled = true;
    return cover;
  }

  createLightboxScene(width, height) {
    //create background
    const start_x = otsimo.game.width * 0.1;
    const start_y = otsimo.game.height * 0.1;

    this.bg = otsimo.game.add.tileSprite(start_x, start_y, width, height, 'gray');
    this.bg.alpha = 0;
    otsimo.game.add.tween(this.bg).to({ alpha: 0.7 }, 500, Phaser.Easing.Sinusoidal.Out, true);
    this.bg.inputEnabled = true;

    this.timer = otsimo.game.time.events.add(0, this.addVideo, this);

    this.bg.events.onInputDown.add(this.clickListener, this);
  }

  addVideo() {
    if (this.abort) {
      return;
    }

    this.video = otsimo.game.add.video('gif');

    this.imageOfVideo = this.video.addToWorld(otsimo.game.width * 0.5, otsimo.game.height * 0.5, 0.5, 0.5, otsimo.game.width * 0.8 / this.video.width, otsimo.game.height * 0.8 / this.video.height);
    this.video.play(true);
  }

  call(next, table) {
    this._next = next;
    this._table = table;
    this.createCover();
    const w = otsimo.game.width * 0.8;
    const h = otsimo.game.height * 0.8;
    this.createLightboxScene(w, h);
  }

  clickListener() {
    console.log('clicked');
    this.destroyAll();
  }

  destroyAll() {
    this.abort = true;
    console.log('destroying the lightbox');
    if (this.video) {
      this.imageOfVideo.destroy();
      this.video.destroy();
    }
    this.cover.destroy();
    this.bg.alpha = 0;
    this.bg.destroy();
    this.scene.goNext(this._next, this._table);
  }

}