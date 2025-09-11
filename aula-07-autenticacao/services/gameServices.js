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

  async CreateGame(title, year, price, description) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        description,
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

  async UpdateGame(id, title, year, price, description) {
    try {
      const game = await Game.findByIdAndUpdate(
        id,
        {
          title,
          year,
          price,
          description,
        },
        { new: true } // Define que após a alteração ele deve retornar a alteração.
      );
      console.log(`Dados do game com id {id} alterados com sucesso!`);
      return game;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
