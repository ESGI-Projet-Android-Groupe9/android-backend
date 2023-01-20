import { Game } from "../models";
export declare class GameService {
    private static instance?;
    static getInstance(): GameService;
    private constructor();
    getAll(): Promise<Game[]>;
    getById(gameId: string): Promise<Game | undefined>;
}
