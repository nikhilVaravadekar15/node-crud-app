const express = require('express')
const services = require('../services/render')

const route = express.Router()
const controller = require('../controller/controller')


/**
 * @description root route
 * @method GET
 */
route.get("/", services.homeRoute)

/**
 * @description add user route
 * @method GET
 */
route.get("/add-user", services.addUserRoute)


/**
 * @description update user route
 * @method GET
 */
route.get("/update-user", services.updateUserRoute)


/**
 * @description api route 
 */
route.post("/api/user", controller.create)
route.get("/api/users", controller.find)
route.get("/api/user/:id", controller.find)
route.put("/api/user/:id", controller.update)
route.delete("/api/user/:id", controller.delete)


module.exports = route
