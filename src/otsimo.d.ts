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
    hide_item_on: number;
    hiding_type: string;

    hiding_fade_alpha: number;
    hiding_fade_duration: number;

    hiding_move_duration: number;

    table_leave_duration: number;
    table_show_duration: number;

    balloon_options: any;
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

interface AnswerLayout {
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
    answer_box: AnswerLayout;
}

interface KeyValue {
    preload: Array<Asset>;
    items: Array<GameItem>;
    game: OtsimoGame;
    layout: GameLayout;
    announceTextStyle: any;
    announceText: string;
}

interface Manifest {
    unique_name: string;
    version: string;
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