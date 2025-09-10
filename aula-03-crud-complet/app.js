import express from "express";
const app = express();
import mongoose from "mongoose";
import Game from "./models/Games.js";
import gameRoutes from "./routes/gameRoutes.js";

//Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Conexão com o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

app.use("/", gameRoutes)

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});
