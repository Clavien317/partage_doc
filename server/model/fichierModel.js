const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("partage_doc", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log("Connected successful");
} catch (e) {
    console.log("No connected", e);
}

const Fichier = sequelize.define("fichier", {
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cheminFichier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type:
    {
        type: DataTypes.STRING,
        allowNull: true
    },
    niveau:
    {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //     model: 'etudiant',
        //     key: 'matricule'
        // }
    }
});

(async () => {
    try {
        await sequelize.sync({ force: false, alter: true });
        console.log("Tables fichier is created successfully.");
    } catch (error) {
        console.error("Error synchronizing tables:", error);
    }
})();

module.exports = Fichier;