
const {ajout, telecharger} = require("../controller/FichierController")
const router = require("express").Router()



router.post("/ajout", ajout)
router.post("/download", telecharger)