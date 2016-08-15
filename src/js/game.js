import * as states from "./states";

otsimo.onSettingsChanged(function (settings, sound) {
    otsimo.game.sound.mute = !sound
});


otsimo.run(function () {

    let game = new Phaser.Game(otsimo.width, otsimo.height, Phaser.AUTO, "gameContainer");
    Object.keys(states).forEach(state => game.state.add(state, states[state]));

    otsimo.game = game;
    game.state.start("Load");
    if (otsimo.kv.game.init_tts) {
        let vl = otsimo.tts.voiceList()
        for (let v of otsimo.kv.game.tts_voices) {
            for (let vli of vl) {
                if (vli.id == v) {
                    otsimo.tts.setVoice(v);
                    return
                }
            }
        }
    }
});


