class fastify {
  static #api = require("fastify")({ logger: true });
  
  static configFasty() {
    const port = 8080 || process.env.PORT;
    this.#api.listen({ port: port }, () => {
      console.log(`servidor rodando na porta ${port}`);
    });
  }
}

fastify.configFasty();
