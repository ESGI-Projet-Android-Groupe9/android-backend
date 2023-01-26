import express, {Request, Response, Router} from "express";
import {ReviewService} from "../services/review.service";

export class ReviewController {

    async getAllReviews(req: Request, res: Response) {
        const reviews = await ReviewService.getInstance().getAll(req.params.game_id);
        res.json(reviews);
    }

    buildRoutes(): Router {
        const router = express.Router();
        router.get('/:game_id', this.getAllReviews.bind(this));
        return router;
    }
}