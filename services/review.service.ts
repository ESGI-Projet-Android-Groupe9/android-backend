import axios from "axios";
import {Review} from "../models/review.model";
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
            const response = await axios.get(url + gameId + '?json=1');
            const reviewsData = response.data['reviews'];

            for (let i = 0; i < reviewsData.length; i++) {
                // Get the username from the steamId
                const urlUsername = "https://steamcommunity.com/actions/ajaxresolveusers?steamids="
                const userResponse = await axios.get(urlUsername + reviewsData[i]['author']['steamid']);
                const usernameData = userResponse.data[0]['persona_name'];

                reviews.push(
                    new Review({
                        reviewId: reviewsData[i]['recommendationid'],
                        username: usernameData,
                        review: reviewsData[i]['review'],
                        rating: 4.2
                    })
                )
            }
        } catch (error) {
            console.error('Error:', error);
        }
        return reviews;
    }
}