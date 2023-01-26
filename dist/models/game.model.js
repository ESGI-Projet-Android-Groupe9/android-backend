"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(gameProps) {
        this._gameId = gameProps.gameId;
        this._name = gameProps.name;
        this._editor = gameProps.editor;
        this._detailedDescription = gameProps.detailedDescription;
        this._aboutTheGame = gameProps.aboutTheGame;
        this._shortDescription = gameProps.shortDescription;
        this._price = gameProps.price;
        this._headerImage = gameProps.headerImage;
        this._background = gameProps.background;
    }
    get gameId() {
        return this._gameId;
    }
    set gameId(value) {
        this._gameId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get editor() {
        return this._editor;
    }
    set editor(value) {
        this._editor = value;
    }
    get detailedDescription() {
        return this._detailedDescription;
    }
    set detailedDescription(value) {
        this._detailedDescription = value;
    }
    get aboutTheGame() {
        return this._aboutTheGame;
    }
    set aboutTheGame(value) {
        this._aboutTheGame = value;
    }
    get shortDescription() {
        return this._shortDescription;
    }
    set shortDescription(value) {
        this._shortDescription = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get headerImage() {
        return this._headerImage;
    }
    set headerImage(value) {
        this._headerImage = value;
    }
    get background() {
        return this._background;
    }
    set background(value) {
        this._background = value;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.model.js.map