import jwt from "jsonwebtoken";
import userController from "../controller/userController.js";

// Função de Autenticação para verificar se o usuário está enviando o token e se ele é valido.
const Authorizarion = (req, res, next) => {
  const authToken = req.headers["athorization"];
  if (authToken != undefined) {
    //Dividindo a string do token(para eliminar a palavra Bearer)
    const bearer = authToken.split(" ")
    const token = bearer[1]
    // Validando o token
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      if (error) {
        res.status(401).json({error: "Token inválido"})
    //Token válido
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
    next();
  } else {
    res.status(401).json({ error: "Acesso não autorizado. Token inválido!" });
  }
};

export default { Authorizarion };
