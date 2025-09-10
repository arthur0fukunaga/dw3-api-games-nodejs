import jwt from "jsonwebtoken";
import userController from "../controller/userController.js";

// Função de Autenticação para verificar se o usuário está enviando o token e se ele é valido.
const Authorizarion = (req, res, next) => {
  const authToken = req.headers["athorization"];
  if (authToken != undefined) {
    next();
  } else {
    res.status(401).json({ error: "Token inválido!" });
  }
};

export default { Authorizarion };
