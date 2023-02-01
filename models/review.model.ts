export interface ReviewProps {
    reviewId: string,
    username: string,
    review: string,
    rating: number //The rating will be based on 5. For example: rating = 3.2 on 5
}

export class Review implements ReviewProps {
    private _reviewId!: string;
    private _username!: string;
    private _review!: string;
    private _rating!: number;

    constructor(reviewProps: ReviewProps) {
        this._reviewId = reviewProps.reviewId;
        this._username = reviewProps.username;
        this._review = reviewProps.review;
        // this._rating = reviewProps.rating
        this._rating = 4.5
    }

    get reviewId(): string {
        return this._reviewId;
    }

    set reviewId(value: string) {
        this._reviewId = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get review(): string {
        return this._review;
    }

    set review(value: string) {
        this._review = value;
    }

    get rating(): number {
        return this._rating;
    }

    set rating(value: number) {
        this._rating = value;
    }

    public computeRating(total_positive: string, total_negative: string, total_reviews: string): number {
        let rating: number = (parseInt(total_positive) - parseInt(total_negative)) / parseInt(total_reviews);
        return rating * 5;
    }

    // GetRating( positiveVotes, negativeVotes ) {
    //     const totalVotes = positiveVotes + negativeVotes;
    //     const average = positiveVotes / totalVotes;
    //     const score = average - ( average - 0.5 ) * Math.pow( 2, -Math.log10( totalVotes + 1 ) );
    //
    //     return score * 100;
    // }
}