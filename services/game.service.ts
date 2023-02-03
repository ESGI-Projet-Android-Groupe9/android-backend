import axios from "axios";
import {config} from "dotenv";
import {GameFull} from "../models/game_full.model";
import {GameLite} from "../models/game_lite.model";

config();

export class GameService {
    private static instance?: GameService;

    public static getInstance(): GameService {
        if (GameService.instance === undefined) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }

    private constructor() {
    }

    async getAllFullGames(): Promise<GameFull[]> {
        let games: GameFull[] = [];
        try {
            const url = 'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?';
            const response = await axios.get(url);
            const ranksData = response.data['response']['ranks'];

            for (let i = 0; i < 30; i++) {
                const gameId = ranksData[i]['appid'];
                const game = await this.getFullGameById(gameId);
                if (game instanceof GameFull) {
                    games.push(game);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
        return games;
    }

    async getAllLiteGames(): Promise<GameLite[]> {
        let games: GameLite[] = [];
        try {
            const url = 'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?';
            const response = await axios.get(url);
            const ranksData = response.data['response']['ranks'];

            for (let i = 0; i < 30; i++) {
                const gameId = ranksData[i]['appid'];
                const game = await this.getLiteGameById(gameId);
                if (game instanceof GameLite) {
                    games.push(game);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
        return games;
    }

    async getFullGameById(gameId: string): Promise<GameFull | undefined> {
        try {
            const url = process.env.GAME_ITEM_BASE_URL
            const response = await axios.get(url + '/appdetails?l=french&appids=' + gameId+ "&FR&cc=FR");
            const data = response.data[gameId].data;
            return new GameFull({
                gameId: gameId,
                name: data.name,
                editor: data['publishers'],
                detailedDescription: data['detailed_description'],
                aboutTheGame: data['legal_notice'],
                shortDescription: data['short_description'],
                price: data['price_overview']['final_formatted'],
                headerImage: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/hero_capsule.jpg`,
                background: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/header.jpg`
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getLiteGameById(gameId: string): Promise<GameLite | undefined> {
        try {
            const url = process.env.GAME_ITEM_BASE_URL
            const response = await axios.get(url + '/appdetails?l=french&appids=' + gameId+ "&FR&cc=FR");
            const data = response.data[gameId].data;
            return new GameLite({
                gameId: gameId,
                name: data.name,
                editor: data['publishers'],
                price: data['price_overview']['final_formatted'],
                headerImage: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/hero_capsule.jpg`,
                background: `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/header.jpg`
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
