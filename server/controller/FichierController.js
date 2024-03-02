const Fichier = require("../model/fichierModel");
const path = require("path")
const mime = require('mime-types');
const Etudiant = require("../model/EtudiantModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




const ajout = async (req, res) => {
  try {
    const { titre } = req.body;
    const cheminFichier = req.file.path;
    const type = mime.lookup(cheminFichier);

    await Fichier.create({ cheminFichier, titre ,type});
    res.status(201).json("Success");
  } catch (err) {
    console.error("Erreur lors de l'ajout du fichier :", err);
    res.status(500).json("Erreur lors de l'ajout du fichier");
  }
}

const inscription = async (req, res) => {
  try {
    const { matricule,nom,email,tel,niveau,parcours,password } = req.body;
    const statut ="simple"
    const hashedPassword = await bcrypt.hash(password, 12)
    await Etudiant.create({matricule,nom,email,tel,niveau,parcours,password:hashedPassword,statut});
    res.status(201).json("Success");
  } catch (err) {
    console.error("Erreur lors d'inscription", err);
    res.status(500).json("Erreur lors d'inscription");
  }
}

const login=async(req,res)=>
{
    const { email, password } = req.body;
    try {
        const utilisateur = await Etudiant.findOne({ email });
        const id = utilisateur._id;
        if (!utilisateur) {
            return res.status(401).json("Email invalide");
        }
        const passwordMatch = await bcrypt.compare(password, utilisateur.password);
        if (!passwordMatch) {
            return res.status(401).json("Mot de passe inscorrect ...");
        }
        const token = jwt.sign({ id: utilisateur._id }, "jwtSecretKey", { expiresIn: 300 });
        res.json({ result: "Connexion réussie", login: true, token, utilisateur,id });
    } catch (error) {
        res.status(500).json("Erreur lors de la connexion : " + error.message);
    }
}

const verifyJwt =(req,res,next)=>
{
    const token = req.headers["access-token"]
    if(!token)
    {
        return res.json("Nous avons besoin de token")
    }else
    {
        jwt.verify(token,"jwtSecretKey",(err,decoded)=>
        {
            if(err)
            {
                res.json("Non authentifiee")
            }else
            {
                req.userId = decoded.id
                console.log(req.userId);
                next()
            }
        })
    }
}
const verifier=(req,res)=>
{
    res.header('Access-Control-Allow-Origin', '*')
    return res.json("Authentified")
}

const liste=async(req,res)=>
{
  const data = await Fichier.find()
  res.json({data})
}


const mono =async(req,res)=>
{
    const id = req.params.id
    const data = await Etudiant.find({ _id: id })
    res.json(data)
}

const telecharger=async(req,res)=>
{
  const id = req.params.id
  const file = await Fichier.findById({_id:id})
  res.status(200).download(path.join(__dirname, "..",file.cheminFichier))
}

module.exports = { ajout,liste,telecharger,inscription,login,mono,verifier,verifyJwt};