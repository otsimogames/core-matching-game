import * as states from './states';
import { RemoteProvider, LocalProvider, NativeProvider } from './weighter';
otsimo.onSettingsChanged(function (settings, sound) {
  otsimo.game.sound.mute = !sound
});

function initTTSVoice() {
  if (otsimo.kv.game.init_tts === true) {
    otsimo.log(`initializing tts ${otsimo.tts.getDriver()}`)
    if (Array.isArray(otsimo.kv.game.tts_voices)) {
      const vl = otsimo.tts.voiceList()
      if (Array.isArray(vl)) {
        for (const v of otsimo.kv.game.tts_voices) {
          for (const vli of vl) {
            if (vli.id == v) {
              otsimo.tts.setVoice(v);
              return
            }
          }
        }
      } else {
        otsimo.log(`voice list is not array ${vl}`)
      }
    } else {
      otsimo.log('otsimo.kv.game.tts_voices is not an array')
    }
  }
}

otsimo.run(function () {

  const game = new Phaser.Game(otsimo.width, otsimo.height, Phaser.CANVAS, 'gameContainer');
  Object.keys(states).forEach(state => game.state.add(state, states[state]));
  otsimo.game = game;

  initTTSVoice();
  if (otsimo.manifest.labels) {
    const w = otsimo.manifest.labels['game.otsimo.com/weighter'];
    if (w === 'remote') {
      const remoteUrl = otsimo.manifest.labels['game.otsimo.com/weighterurl'];
      const childId = otsimo.child.id;
      const gameId = otsimo.child.gameid;
      otsimo.weightProvider = new RemoteProvider(remoteUrl, childId, gameId)
    } else if (w === 'native') {
      otsimo.weightProvider = new NativeProvider()
    } else if (w === 'local') {
      otsimo.weightProvider = new LocalProvider()
    }
  }
  game.state.start('Load');
});


