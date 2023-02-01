export interface GameFullProps {
    gameId: string,
    name: string,
    editor: string,
    detailedDescription: string,
    aboutTheGame: string,
    shortDescription: string,
    price: string,
    headerImage: string,
    background: string,
}

export class GameFull implements GameFullProps {
    private _gameId!: string;
    private _name!: string;
    private _editor!: string;
    private _detailedDescription!: string;
    private _aboutTheGame!: string;
    private _shortDescription!: string;
    private _price!: string;
    private _headerImage!: string;
    private _background!: string;


    constructor(gameProps: GameFullProps) {
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

    get gameId(): string {
        return this._gameId;
    }

    set gameId(value: string) {
        this._gameId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get editor(): string {
        return this._editor;
    }

    set editor(value: string) {
        this._editor = value;
    }

    get detailedDescription(): string {
        return this._detailedDescription;
    }

    set detailedDescription(value: string) {
        this._detailedDescription = value;
    }

    get aboutTheGame(): string {
        return this._aboutTheGame;
    }

    set aboutTheGame(value: string) {
        this._aboutTheGame = value;
    }

    get shortDescription(): string {
        return this._shortDescription;
    }

    set shortDescription(value: string) {
        this._shortDescription = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get headerImage(): string {
        return this._headerImage;
    }

    set headerImage(value: string) {
        this._headerImage = value;
    }

    get background(): string {
        return this._background;
    }

    set background(value: string) {
        this._background = value;
    }
}