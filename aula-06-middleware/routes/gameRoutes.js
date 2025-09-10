import express from "express";
const gameRoutes = express.Router();
import gameController from "../controller/gameController.js";
import Auth from "../middleware/Auth.js";

gameRoutes.get("/games", Auth.Authorizarion,gameController.getAllGames);
gameRoutes.post("/games", Auth.Authorizarion, gameController.createNewGame);
gameRoutes.delete("/games/:id", Auth.Authorizarion, gameController.deleteGame);
gameRoutes.put("/games/:id", Auth.Authorizarion, gameController.updateGame);
gameRoutes.get("/games/:id", Auth.Authorizarion, gameController.getOneGame);

export default gameRoutes;
