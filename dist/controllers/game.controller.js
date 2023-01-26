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
exports.GameController = void 0;
const express_1 = __importDefault(require("express"));
const services_1 = require("../services");
class GameController {
    getAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield services_1.GameService.getInstance().getAll();
            res.json(games);
        });
    }
    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = yield services_1.GameService.getInstance().getById(req.params.game_id);
                if (!game) {
                    res.status(404).end();
                    return;
                }
                res.json(game);
            }
            catch (err) {
                res.status(400).end();
                return;
            }
        });
    }
    buildRoutes() {
        const router = express_1.default.Router();
        router.get('/', this.getAllGames.bind(this));
        router.get('/:game_id', this.getGame.bind(this));
        return router;
    }
}
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map