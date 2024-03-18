const Fichier = require("../model/fichierModel");
const path = require("path")
const mime = require('mime-types');





const ajout = async (req, res) => {
  try {
    const { titre,niveau } = req.body;
    const cheminFichier = req.file.path;
    const type = mime.lookup(cheminFichier);
    await Fichier.create({ cheminFichier, titre,niveau ,type});
    res.status(201).json("Success");
  } catch (err) {
    console.error("Erreur lors de l'ajout du fichier :", err);
    res.status(500).json("Erreur lors de l'ajout du fichier");
  }
}

const liste=async(req,res)=>
{
  // const niveau = req.params.niveau
  // const data = await Fichier.findAll({where:{niveau:niveau}})
  const data = await Fichier.findAll()
  res.json({data})
}


const supprimer = async (req, res) => {
  const id = req.params.id;

  try {
      await Fichier.destroy({ where: { id: id } });
      res.json("Supprimée avec succès");
  } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'entrée." });
  }
}


const telecharger = async (req, res) => {
  const id = req.params.id;
  try {
      const file = await Fichier.findByPk(id);
      if (!file) {
          return res.status(404).json({ message: "Fichier non trouvé." });
      }
      
      if (!file.cheminFichier) {
          return res.status(400).json({ message: "Chemin du fichier non spécifié." });
      }
      const filePath = path.join(__dirname, "..", file.cheminFichier);
      res.status(200).download(filePath);
  } catch (error) {
      console.error("Erreur lors du téléchargement du fichier :", error);
      res.status(500).json({ message: "Une erreur s'est produite lors du téléchargement du fichier." });
  }
}

module.exports = { ajout,liste,telecharger,supprimer};