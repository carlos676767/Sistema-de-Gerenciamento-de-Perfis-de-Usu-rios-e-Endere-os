
const { open } = require("sqlite");
const sqlLIte3 = require("sqlite3");

class Sql {
  static async ConnectDatabase() {
    try {
      return await open({
        filename: "F://Sistema de Gerenciamento de Perfis de Usuários e Endereços//backend//db//database.db",
        driver: sqlLIte3.Database,
      });
    } catch (error) {
      console.log(error);
    };
  };
};

module.exports = Sql;