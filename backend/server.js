const api = require("./router/router");



class Express {
  static #api = require("express")();
  static bodyParser = require("body-parser");
  
  static expressConfig() {
    this.#api.use(this.bodyParser.json());
    this.#api.use(api)
    const port = 8080 || process.env.PORT;
    this.#api.listen(port, () => {
      console.log(`servidor rodando na porta ${port}`);
    });
  }
}



Express.expressConfig();
