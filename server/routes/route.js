const upload = require("../middlware/upload")
const {ajout, liste} = require("../controller/FichierController")
const router = require("express").Router()



router.post('/ajout', upload.single('cheminFichier'), ajout);
router.get("/liste",liste)
// router.get("/uploads/:image",fichier)

module.exports = router