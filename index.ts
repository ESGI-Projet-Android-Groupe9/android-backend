const cors = require('cors');
import {config} from "dotenv";
config();
import express from "express";
import {GameController} from "./controllers";

async function startServer(): Promise<void> {

    const app = express();
    app.use(express.json());
    app.use(cors());

    const gameController = new GameController();
    app.use('/game', gameController.buildRoutes());

    app.listen(process.env.PORT, function() {
        console.log("Server listening on port " + process.env.PORT);
    });
}

startServer().catch(console.error);

