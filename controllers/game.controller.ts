import express, {Router, Request, Response} from "express";
import {GameService} from "../services";

export class GameController {

    async getAllGames(req: Request, res: Response) {
        const games = await GameService.getInstance().getAll();
        res.json(games);
    }

    async getGame(req: Request, res: Response) {
        try {
            const game = await GameService.getInstance().getById(req.params.game_id);
            if(!game) {
                res.status(404).end();
                return;
            }
            res.json(game);
        } catch(err) {
            res.status(400).end();
            return;
        }
    }

    buildRoutes(): Router {
        const router = express.Router();
        router.get('/', this.getAllGames.bind(this));
        router.get('/:game_id', this.getGame.bind(this));
        return router;
    }
}