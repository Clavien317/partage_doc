import React, { useState } from 'react';
import Header from '../components/Header';
import axios from "axios";
import {useNavigate} from "react-router-dom"



const local = JSON.parse(localStorage.getItem("token"));
const id = local[1];
function Envoyer_fic() {
  const [input, setInput] = useState({});
  const navigate = useNavigate()
  const recup = (e) => {
    const { name, value, files } = e.target;
    setInput(values => ({ ...values, [name]: files ? files[0] : value }));
  }

  const valid = async (e) => {
    e.preventDefault();
    if (!input.titre || !input.cheminFichier) {
      console.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    const formData = new FormData();
    formData.append('titre', input.titre);
    formData.append('cheminFichier', input.cheminFichier);
    console.log(input);
    try
    {
      await axios.post("http://localhost:9000/ajout", formData);
      console.log("Fichier envoyé avec succès !");
      navigate(`/liste/${id}`)
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier :", error);
    }
  }

  return (
    <div>
      <Header />
      <div className="home">
        <h3>Envoyer votre fichier ou document</h3>
        <br />
        <br />
        <form onSubmit={valid}>
          <label>Importer votre fichier</label>
          <br />
          <input type="file" onChange={recup} name="cheminFichier" />
          <br />
          <label>Titre</label>
          <br />
          <input type="text" onChange={recup} name="titre" value={input.titre || ''} />
          <br />
          <br />
          <br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Envoyer_fic;
