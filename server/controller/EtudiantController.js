const Etudiant = require("../model/EtudiantModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




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
  
  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const utilisateur = await Etudiant.findOne({ where: { email: email } });
        // console.log(utilisateur);
        if (!utilisateur) {
            return res.status(401).json("Email invalide");
        }
        const passwordMatch = await bcrypt.compare(password, utilisateur.password);
        if (!passwordMatch) {
            return res.status(401).json("Mot de passe incorrect");
        }
        const token = jwt.sign({ id: utilisateur.id }, "jwtSecretKey", { expiresIn: 300 });
        res.json({ result: "Connexion réussie", login: true, token, utilisateur: utilisateur, id: utilisateur.id,niveau: utilisateur.niveau });
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


const mono =async(req,res)=>
{
    const id = req.params.id
    const data = await Etudiant.findByPk(id)
    res.json(data)
}

const listeEtudiant = async(req,res)=>
{
    const data = await Etudiant.findAll()
    res.json(data)
}

const modif_etudiant = async (req, res) => {
    try {
      const { matricule,nom,niveau,parcours,statut, id } = req.body;
      
      if (statut) {
        const elev = await Etudiant.findByPk(id)
        await elev.update({statut:statut})
        const newPost = {
          statut
        }
        res.status(200).json(newPost);
      }else if ( matricule)
      {
        const elev = await Etudiant.findByPk(id)
        await elev.update({niveau:niveau})
        const newPost = {matricule};
        res.status(200).json(newPost);
      }else if (nom)
      {
        const elev = await Etudiant.findByPk(id)
        await elev.update({nom:nom})
        const newPost = {
          nom
        };
        res.status(200).json(newPost);
      }else if ( parcours)
      {
        const elev = await Etudiant.findByPk(id)
        await elev.update({parcours:parcours})
        const newPost = {
          parcours
        };
        res.status(200).json(newPost);
      }else if ( niveau)
      {
        const elev = await Etudiant.findByPk(id)
        await elev.update({niveau:niveau})
        const newPost = {niveau};
        res.status(200).json(newPost);
      } else
      {
        console.log("Rien à modifier");
        res.status(200).json("Rien à modifier");
      }

    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports = {inscription,login,mono,verifier,verifyJwt,listeEtudiant,modif_etudiant}