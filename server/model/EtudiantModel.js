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


const Etudiant = sequelize.define("etudiant", {
    matricule:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    tel:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    niveau:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    parcours:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    statut:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await sequelize.sync({ force: false, alter: true });
        console.log("Tables etudiant is created successfully.");
    } catch (error) {
        console.error("Error synchronizing tables:", error);
    }
})();

module.exports = Etudiant;
