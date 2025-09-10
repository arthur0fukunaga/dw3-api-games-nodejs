import express from "express";
const gameRoutes = express.Router();
import gameController from "../controller/gameController.js";

gameRoutes.get("/games", gameController.getAllGames);
gameRoutes.post("/games", gameController.createNewGame);
gameRoutes.delete("/games/:id", gameController.deleteGame);
gameRoutes.put("/games/:id", gameController.updateGame);
gameRoutes.get("/games/:id", gameController.getOneGame);

export default gameRoutes;
