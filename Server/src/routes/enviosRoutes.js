const {handlerGetEnvioXID, handlerPostEnvio} = require('../handlers/handlerEnvios');
const {handlerAllEnvios} = require ('../handlers/handlerAllEnvios');
const {handlerAllEnviosByUser} = require("../handlers/handlerAllEnviosByUser ")
const {Router} = require("express")
const cotizarHandler = require("../handlers/enviospost")
const {handlerBorrar} = require("../handlers/handlerBorrar")
const envios = Router()

envios.post("/price", cotizarHandler) 
envios.post("/", handlerPostEnvio) //req.body
envios.get("/", handlerAllEnvios) // req.query
envios.get("/user/:userEmail",handlerAllEnviosByUser)
envios.get("/:id",handlerGetEnvioXID) // req.params
envios.delete("/eliminar/:id", handlerBorrar)


envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.param

module.exports = envios;