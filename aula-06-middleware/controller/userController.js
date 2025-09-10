import userServices from "../services/userServices.js";
import userService from "../services/userServices.js";
import jwt from "jsonwebtoken";
//Segredo para o token (é recomendado que o segredo esteja nas variáveis de ambiente do sistema)
const JWTSecret = "apithegames";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Buscando o usuário com base no email
    const user = await userServices.getOne(email);
    // Se o usuário for encontrado
    if (user != undefined) {
      if (user.password == password) {
        //Gerando o token com JWT
        jwt.sign(
          { id: user.id, email: user.email },
          JWTSecret,
          { expiresIn: "48h" },
          (error, token) => {
            if (error) {
              res.status(400).json({
                error: "Não foi possível o gerar o token de autenticação.",
              });
            } else {
              // Token gerado com sucesso!
              res.status(200).json({ token });
            }
          }
        );
        //Tratamento de senha incorreta
      } else {
        res.status(401).json({ error: "Credenciais informadas incorretas!" });
        //Cod.401: UNAUTHORIZED
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, JWTSecret };
