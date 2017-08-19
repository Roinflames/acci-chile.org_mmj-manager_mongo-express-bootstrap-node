var express = require('express')
var UserController = require('../controllers/user')

const router = express.Router()
//const user = new UserController();

module.exports = function(){

    router.get('/', (req, res) => user.getAll(req, res));

    return router;
}
