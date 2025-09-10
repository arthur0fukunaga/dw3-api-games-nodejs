import gameServices from "../services/gameServices.js";
import { ObjectId } from "mongodb";

const getAllGames = async (req, res) => {
  try {
    const games = await gameServices.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "Erro Interno do servidor." });
  }
};

const createNewGame = async (req, res) => {
  try {
    const { title, year, genre, platform, price } = req.body;
    await gameServices.CreateGame(title, year, genre, platform, price);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "Erro interno do servidor." });
  }
};

const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await gameServices.DeleteGame(id);
      res.sendStatus(204); // Req bem sucessida (NO CONTENT) sem conteúdo para retorno.
    } else {
      res.status(400).json({ error: "A ID enviada é inválida!" });
      // Código 400 (BAD REQUEST) Requisição mal formada.
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, genre, platform, price } = req.body;
      const game = await gameServices.UpdateGame(
        id,
        title,
        year,
        genre,
        platform,
        price
      );
      res.status(200).json({ game }); // Código 200 - OK
    } else {
      res.status(400).json({ error: "A ID enviada é inválida!" });
      // Código 400 (BAD REQUEST) Requisição mal formada.
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameServices.getOne(id);
      if (!game) {
        res.status(404).json({ error: "O jogo não foi encontrado." });
      } else {
        res.status(200).json({ game });
      }
    } else {
      res.status(400).json({ error: "A ID enviada é inválida!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default {
  getAllGames,
  createNewGame,
  deleteGame,
  updateGame,
  getOneGame,
};
