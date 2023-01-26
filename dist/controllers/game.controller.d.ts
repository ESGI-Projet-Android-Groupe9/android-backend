import { Router, Request, Response } from "express";
export declare class GameController {
    getAllGames(req: Request, res: Response): Promise<void>;
    getGame(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
