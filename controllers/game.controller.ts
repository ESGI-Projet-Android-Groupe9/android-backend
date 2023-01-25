import express, {Router, Request, Response} from "express";
import {GameService} from "../services";

export class GameController {

    async getAllFullGames(req: Request, res: Response) {
        const games = await GameService.getInstance().getAllFullGames();
        res.json(games);
    }

    async getAllLiteGames(req: Request, res: Response) {
        const games = await GameService.getInstance().getAllLiteGames();
        res.json(games);
    }

    async getFullGame(req: Request, res: Response) {
        try {
            const game = await GameService.getInstance().getFullGameById(req.params.game_id);
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
    async getLiteGame(req: Request, res: Response) {
        try {
            const game = await GameService.getInstance().getLiteGameById(req.params.game_id);
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
        router.get('/full_games', this.getAllFullGames.bind(this));
        router.get('/lite_games', this.getAllLiteGames.bind(this));
        router.get('/full_game/:game_id', this.getFullGame.bind(this));
        router.get('/lite_game/:game_id', this.getLiteGame.bind(this));
        return router;
    }
}