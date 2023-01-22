import express, {Router, Request, Response} from "express";
import {ReviewService} from "../services";

export class ReviewController {

    async getAllReviews(req: Request, res: Response) {
        const reviews = await ReviewService.getInstance().getAll(req.params.game_id);
        res.json(reviews);
    }

    // async getReview(req: Request, res: Response) {
    //     try {
    //         const review = await ReviewService.getInstance().getById(req.params.review_id);
    //         if(!review) {
    //             res.status(404).end();
    //             return;
    //         }
    //         res.json(review);
    //     } catch(err) {
    //         res.status(400).end();
    //         return;
    //     }
    // }

    buildRoutes(): Router {
        const router = express.Router();
        router.get('/:game_id', this.getAllReviews.bind(this));
        // router.get('/:review_id', this.getReview.bind(this));
        return router;
    }
}