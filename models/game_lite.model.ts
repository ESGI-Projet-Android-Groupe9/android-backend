export interface GameLiteProps {
    gameId: string,
    name: string,
    editor: string,
    price: number,
    headerImage: string,
    background: string,
}

export class GameLite implements GameLiteProps {
    private _gameId!: string;
    private _name!: string;
    private _editor!: string;
    private _price!: number;
    private _headerImage!: string;
    private _background!: string;


    constructor(gameProps: GameLiteProps) {
        this._gameId = gameProps.gameId;
        this._name = gameProps.name;
        this._editor = gameProps.editor;
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

    get price(): number {
        return this._price;
    }

    set price(value: number) {
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