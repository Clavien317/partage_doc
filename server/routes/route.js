const upload = require("../middlware/upload")
const {ajout, liste, telecharger,supprimer} = require("../controller/FichierController")
const { inscription, login, mono, verifier, verifyJwt, listeEtudiant, modif_etudiant} = require("../controller/EtudiantController")
const router = require("express").Router()



router.post('/ajout', upload.single('cheminFichier'), ajout);
router.get("/liste",liste)
router.get("/telecharger/:id",telecharger)
router.post("/inscrir",inscription)
router.post("/login",login)
router.get("/liste/etudiant",listeEtudiant)
router.put("/modifier/etudiant",modif_etudiant)


router.get("/:id",mono)
router.post("/verifyAuth",verifier,verifyJwt)
router.delete("/supprimer/:id",supprimer)


module.exports = router