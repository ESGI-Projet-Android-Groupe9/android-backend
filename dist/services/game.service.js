"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const axios_1 = __importDefault(require("axios"));
const models_1 = require("../models");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class GameService {
    static getInstance() {
        if (GameService.instance === undefined) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
    constructor() { }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let games = [];
            try {
                const url = 'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?';
                const response = yield axios_1.default.get(url);
                const ranksData = response.data['response']['ranks'];
                for (let i = 0; i < 20; i++) {
                    const gameId = ranksData[i]['appid'];
                    const game = yield this.getById(gameId);
                    if (game instanceof models_1.Game) {
                        games.push(game);
                    }
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
            return games;
        });
    }
    getById(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = process.env.GAME_ITEM_BASE_URL;
                const response = yield axios_1.default.get(url + '/appdetails/?appids=' + gameId);
                const data = response.data[gameId].data;
                return new models_1.Game({
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
            }
            catch (error) {
                console.error('Error:', error);
            }
        });
    }
}
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map