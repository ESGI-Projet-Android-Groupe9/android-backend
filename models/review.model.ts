export interface ReviewProps{
    reviewId: string,
    authorSteamId: string,
    review: string,
}

export class Review implements ReviewProps{
    private _reviewId!: string;
    private _authorSteamId!: string;
    private _review!: string;

    constructor(reviewProps: ReviewProps) {
        this._reviewId = reviewProps.reviewId;
        this._authorSteamId = reviewProps.authorSteamId;
        this._review = reviewProps.review;
    }

    get reviewId(): string {
        return this._reviewId;
    }

    set reviewId(value: string) {
        this._reviewId = value;
    }

    get authorSteamId(): string {
        return this._authorSteamId;
    }

    set authorSteamId(value: string) {
        this._authorSteamId = value;
    }

    get review(): string {
        return this._review;
    }

    set review(value: string) {
        this._review = value;
    }
}