const  database = require("../db/db");
class GetUser {
  static async userFinds(req, res) {
    const db = await database.ConnectDatabase();
    const query = "SELECT * FROM User JOIN Address ON Address.ID_USER = User.id";
    const result = await db.all(query);
    console.log(result);
  }
}

module.exports = GetUser;
