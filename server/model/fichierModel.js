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
    titre: {
        type: String,
        required: true
    },
    cheminFichier: {
        type: String,
        required: true
    }
});

const Fichier = mongoose.model("fichier", schema);

module.exports = Fichier;
