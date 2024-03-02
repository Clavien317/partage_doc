const Fichier = require("../model/fichierModel");
const path = require("path")
const mime = require('mime-types');



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

const liste=async(req,res)=>
{
  const data = await Fichier.find()
  res.json({data})
}


const telecharger=async(req,res)=>
{
  const id = req.params.id
  const file = await Fichier.findById({_id:id})
  res.status(200).download(path.join(__dirname, "..",file.cheminFichier))
}

module.exports = { ajout,liste,telecharger};