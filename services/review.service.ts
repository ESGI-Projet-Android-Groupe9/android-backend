import axios from "axios";
import {Review} from "../models";
import {config} from "dotenv";
config();

export class ReviewService {
    private static instance?: ReviewService;

    public static getInstance(): ReviewService {
        if (ReviewService.instance === undefined) {
            ReviewService.instance = new ReviewService();
        }
        return ReviewService.instance;
    }

    private constructor() {
    }

    async getAll(gameId: string): Promise<Review[]> {
        let reviews: Review[] = [];
        try {
            const url = process.env.GAME_REVIEWS_BASE_URL;
            const response = await axios.get(url+gameId+'?json=1');
            const reviewsData = response.data['reviews'];

            for (let i=0; i<reviewsData.length; i++){
                // const reviewData = reviewsData[i];
                reviews.push(
                    new Review({
                        reviewId: reviewsData[i]['recommendationid'],
                        authorSteamId: reviewsData[i]['author']['steamid'],
                        review: reviewsData[i]['review']
                    })
                )
                // reviews.push(
                //     new Review({
                //         reviewId: reviewData['recommendationid'],
                //         authorSteamId: reviewData['author']['steamid'],
                //         review: reviewData['review']
                //     })
                // )
            }
        } catch (error) {
            console.error('Error:', error);
        }
        return reviews;
    }

    // async getById(reviewId: string): Promise<Review | undefined> {
    //     try {
    //         const url = process.env.GAME_REVIEWS_BASE_URL
    //         const response = await axios.get(url+reviewId+'?json=1');
    //         const data = response.data[reviewId].data;//TODO to correct
    //         return new Review({
    //             reviewId: reviewId,
    //             authorSteamId: reviewId,
    //             review: reviewId
    //         });
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
}