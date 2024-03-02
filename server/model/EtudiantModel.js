const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/partage_file";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Base de données connectée!");
    })
    .catch((err) => {
        console.error("Erreur de connexion à la base de données:", err);
    });

const schema = new mongoose.Schema({
    matricule:
    {
        type: String,
        required: true,
        unique:true
    },
    nom: {
        type: String,
        required: true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    tel:
    {
        type:String,
        required:true
    },
    niveau:
    {
        type:String,
        required:true
    },
    parcours:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    statut:
    {
        type:String,
        required:true
    }
});

const Etudiant = mongoose.model("etudiant", schema);

module.exports = Etudiant;
