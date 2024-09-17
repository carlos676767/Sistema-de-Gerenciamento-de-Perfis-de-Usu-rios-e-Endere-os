const database = require("../db/db");
class User {
  static async userAdd(req, res) {
    const { nome, email, rua, cidade, estado, cep } = req.body;
    console.log(nome, email, rua, cidade, estado, cep);
    try {
      if (!nome || !email || !rua || !cidade || !estado || !cep) {
        throw new Error("Preencha os valores.");
      }
      await User.#adicionarUsuario(nome, email, rua, cidade, estado, cep);
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  }

  static async #adicionarUsuario(nome, email, rua, cidade, estado, cep) {
    const db = await database.ConnectDatabase();
    const queryTableUm = "INSERT INTO User (NOME, EMAIL) VALUES (? , ?)";
    const queryTableDois ="INSERT INTO Address (STREET, CIDADE, STATE, ZIP_CODE, ID_USER) VALUES(?, ? , ? , ? , ?)";
    const {lastID} = await db.run(queryTableUm, [nome, email]);
    await db.run(queryTableDois, [rua, cidade, estado, cep, lastID]);
  }
}

module.exports = User;
