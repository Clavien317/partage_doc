const upload = require("../middlware/upload")
const {ajout, liste, telecharger} = require("../controller/FichierController")
const router = require("express").Router()



router.post('/ajout', upload.single('cheminFichier'), ajout);
router.get("/liste",liste)
router.get("/telecharger/:id",telecharger)

module.exports = router