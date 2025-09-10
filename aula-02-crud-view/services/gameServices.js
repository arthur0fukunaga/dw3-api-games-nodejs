import Game from "../models/Games.js";

// O service será responsável por conter os métodos de manipulação do banco.

class gameService {
  // Buscando os registros do banco.
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log("error");
    }
  }

  async CreateGame(title, year, genre, platform, price) {
    try {
      const newGame = new Game({
        title,
        year,
        genre,
        platform,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteGame(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com ${id} foi deletado.`);
    } catch (error) {
      console.log(error);
    }
  }

  async UpdateGame(id, title, year, genre, platform, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        year,
        genre,
        platform,
        price,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
