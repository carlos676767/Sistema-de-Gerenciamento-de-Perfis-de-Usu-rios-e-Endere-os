const user = require("../controller/UserAdd");
const api = require('express').Router()
api.post("/userAdd", user.userAdd)

module.exports = api