import axios from "axios";
import {Game} from "../models";
import {config} from "dotenv";
config();

export class GameService {
    private static instance?: GameService;
    public static getInstance(): GameService {
        if(GameService.instance === undefined) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
    private constructor() { }

    async getAll(): Promise<Game[]> {
        let games: Game[] = [];
        try {
            const url = 'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?';
            const response = await axios.get(url);
            const ranksData = response.data['response']['ranks'];

            for (let i=0; i<20; i++){
                const gameId = ranksData[i]['appid'];
                const game = await this.getById(gameId);
                if (game instanceof Game) {
                    games.push(game);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
        return games;
    }

    async getById(gameId: string): Promise<Game | undefined> {
        try {
            const url = process.env.GAME_ITEM_BASE_URL
            const response = await axios.get(url+'/appdetails/?appids='+gameId);
            const data = response.data[gameId].data;
            return new Game({
                gameId: gameId,
                name: data.name,
                editor: data['publishers'],
                detailedDescription: data['detailed_description'],
                aboutTheGame: data['about_the_game'],
                shortDescription: data['short_description'],
                price: 10,
                headerImage: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/hero_capsule.jpg`,
                background: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/header.jpg`
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
