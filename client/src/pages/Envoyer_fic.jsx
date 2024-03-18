import React, { useState } from 'react';
import Header from '../components/Header';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"



function Envoyer_fic() {

  const navigate = useNavigate()
const local = JSON.parse(localStorage.getItem("token"));
console.log(local);
  const [input, setInput] = useState({});

  if(local !=null)
{
  const id = local[1];
}
else
{
  navigate("/login")
}

const id = local[1];
const niveau = local[2]

  const recup = (e) => {
    const { name, value, files } = e.target;
    setInput(values => ({ ...values, [name]: files ? files[0] : value,niveau:niveau}));
  }



  const valid = async (e) => {
    e.preventDefault();

    console.log(input);


    if (!input.titre || !input.cheminFichier || !input.niveau) {
      console.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    const formData = new FormData();
    formData.append('titre', input.titre);
    formData.append('cheminFichier', input.cheminFichier);
    formData.append('niveau', input.niveau);

    try
    {
      await axios.post("http://localhost:9000/ajout", formData);
      console.log("Fichier envoyé avec succès !");
      if(id!=null)
      {
        navigate(`/liste/${id}/visiteur`)
      }else
      {
        console.log("ID n'existe pas");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier :", error);
    }
  }

  return (
    <div>
      <Header />

      <div className="home">
        <br />
        <br />
        <br />
        <br />
        <h3>Envoyer votre fichier ou document</h3>
        <br />
        <br />
        <form onSubmit={valid}>
          <label>Importer votre fichier</label>
          <br />
          <input type="file" onChange={recup} name="cheminFichier" required/>
          <br />
          <label>Titre</label>
          <br />
          <input type="text" onChange={recup} name="titre" required/>
          <br />
          {/* <label>Pour niveau</label>
          <br />
          <select name="niveau" id='niveau' onChange={recup} required>
              <option value="">Selectionnez votre niveau</option>
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
          </select> */}
          <br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default Envoyer_fic;
