/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />

interface Child {
    firstname: string;
    lastname: string;
    language: string;
}

interface Settings {
    show_hint: boolean;
    hint_duration: number;
    difficulty: string;
}

interface Asset {
    name: string;
    path: string;
    type: string;
}

interface GameItem {
    id: string;
    kind: string;
    audio: string;
    question: string;
    tint: string;
    text: string;
    image: string;
    outline: string;
}

interface OtsimoGame {
    easy_size: number;
    medium_size: number;
    hard_size: number;

    add_outline: boolean;
    outline_image: string;

    answer_type: string;
    session_step: number;
    question_from: string;
    answers_from: string;
    step_score: number;
    hint_type: string;
    hint_hand_duration: number;
    hint_jump_duration: number;
    hide_item_on: number;
    hiding_type: string;

    hiding_fade_alpha: number;
    hiding_fade_duration: number;

    hiding_move_duration: number;

    table_leave_duration: number;
    table_show_duration: number;

    balloon_options: any;
    balloon_sound: string;
}


interface GameLayoutAxisEntry {
    multiplier: number;
    constant: number;
}

interface GameLayoutAxis {
    width: GameLayoutAxisEntry;
    height: GameLayoutAxisEntry;
    x: GameLayoutAxisEntry;
    y: GameLayoutAxisEntry;
}

interface XYAnchorLayout {
    anchor: Phaser.Point;
    x: GameLayoutAxisEntry;
    y: GameLayoutAxisEntry;
}

interface GameLayout {
    fixed_size: boolean;
    max_item: number;
    cell_anchor: Phaser.Point;
    horizontal: GameLayoutAxis;
    vertical: GameLayoutAxis;
    answer_box: XYAnchorLayout;
}

interface DecorationItem {
    image: string;
    frame: string;
    anchor: Phaser.Point;
    x: GameLayoutAxisEntry;
    y: GameLayoutAxisEntry;
}

interface MusicInfo {
    music: string;
    volume: number;
    loop: boolean;
    volume_load_screen: number;
    volume_home_screen: number;
    volume_play_screen: number;
    volume_over_screen: number;
}

interface KeyValue {
    preload: Array<Asset>;
    items: Array<GameItem>;
    game: OtsimoGame;
    layout: GameLayout;
    announceTextStyle: any;
    announceText: string;
    custom_announce_color: string;
    background_image: string;
    play_background_color: string;
    home_background_color: string;
    over_background_color: string;
    decoration: Array<DecorationItem>;
    name_shadow: TextShadow;
    gameNameTextStyle: any;
    gameNameLayout: XYAnchorLayout;
    homePlayButton: XYAnchorLayout;
    game_music: MusicInfo;
}

interface LanguageMetadata {
    language: string;
    visible_name: string;
}

interface Manifest {
    unique_name: string;
    version: string;
    metadata: Array<LanguageMetadata>;
}

interface TextShadow {
    x: number;
    y: number;
    color: string;
    blur: number;
}

declare namespace otsimo {

    var debug: boolean;
    var sound: boolean;
    var child: Child;
    var width: number;
    var height: number;
    var settings: Settings;
    var iOS: boolean;
    var manifest: Manifest;
    var kv: KeyValue;

    var game: Phaser.Game;
    var currentMusic: Phaser.Sound;

    function quitgame(): void;

    function customevent(event: string, payload: Object): void;

    function log(str: string): void;

    function init(): void;

    function run(callback: Function): void;

    function onSettingsChanged(callback: Function): void;

}

declare module "otsimo" {
    export = otsimo;
}