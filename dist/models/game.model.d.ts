export interface GameProps {
    gameId: string;
    name: string;
    editor: string;
    detailedDescription: string;
    aboutTheGame: string;
    shortDescription: string;
    price: number;
    headerImage: string;
    background: string;
}
export declare class Game implements GameProps {
    private _gameId;
    private _name;
    private _editor;
    private _detailedDescription;
    private _aboutTheGame;
    private _shortDescription;
    private _price;
    private _headerImage;
    private _background;
    constructor(gameProps: GameProps);
    get gameId(): string;
    set gameId(value: string);
    get name(): string;
    set name(value: string);
    get editor(): string;
    set editor(value: string);
    get detailedDescription(): string;
    set detailedDescription(value: string);
    get aboutTheGame(): string;
    set aboutTheGame(value: string);
    get shortDescription(): string;
    set shortDescription(value: string);
    get price(): number;
    set price(value: number);
    get headerImage(): string;
    set headerImage(value: string);
    get background(): string;
    set background(value: string);
}
