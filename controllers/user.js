var express = require('express')
var User = require('../models/user')
//import ConnectRoles from 'connect-roles'
//import { UserRole,
  //       AdminRole, } from '../config/roles'
class UserController {
    getAll(req, res) {
      User.find({})
        .populate({path: 'devices', select: '-__v -password'})
        .then( users => {
          return res
                  .status(200)
                  .json({status:'OK', data: {users: users}})
        })
        .catch( err => {
          return res
                  .status(500)
                  .json({ status: 'Error',
                          errors: { server: 'Lo Sentimos, no hemos podido responder tu solicitud' } })
        })
    }
}
