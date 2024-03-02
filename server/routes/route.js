const upload = require("../middlware/upload")
const {ajout, liste, telecharger, inscription, login, mono, verifier, verifyJwt} = require("../controller/FichierController")
const router = require("express").Router()



router.post('/ajout', upload.single('cheminFichier'), ajout);
router.get("/liste",liste)
router.get("/telecharger/:id",telecharger)
router.post("/inscrir",inscription)
router.post("/login",login)
router.get("/:id",mono)
router.post("/verifyAuth",verifier,verifyJwt)


module.exports = router