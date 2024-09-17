const users = require("../controller/GetUsers");
const user = require("../controller/UserAdd");
const api = require('express').Router()
api.post("/userAdd", user.userAdd)
api.get("/users", users.userFinds)
module.exports = api