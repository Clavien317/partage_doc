const Fichier = require("../model/fichierModel");

const ajout = async (req, res) => {
  try {
    const { titre } = req.body;
    const cheminFichier = req.file.path;
    await Fichier.create({ cheminFichier, titre });
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

module.exports = { ajout,liste};
