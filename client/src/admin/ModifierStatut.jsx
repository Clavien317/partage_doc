import React, { useEffect, useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function ModifierStatut() {

    const {id} = useParams()
    const [data,setData] = useState("")
    const [input,setInput] = useState([])
    const navigate = useNavigate()
  
  
    useEffect(()=>
    {
      getInfo()
    },[])
  
    const change = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (data[name] !== value) {
          setInput(values => ({ ...values, [name]: value, id: id }));
      }
  };
  
    const submit =async(e)=>
    {
        e.preventDefault()
        await axios.put("http://localhost:9000/modifier/etudiant",input).then(function(response)
        {
          if(response)
          {
            alert("Modifier avec success")
            navigate("/liste/etudiant")
          }else
          {
            alert("Erreur d'insertion ...")
          }
        })
    }
  
    const getInfo = async() => {
      const reponse = await axios.get(`http://localhost:9000/${id}`)
      const info = reponse.data
      console.log(info);
      setData(info)
    }


  return (
    <div>
        <NavAdmin />
        <br />
        <div className="home3">
        <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Matricule</label>
                    <br />
                    <input type="text" name='matricule' onChange={change} defaultValue={data.matricule} required/>
                    <br />
                    <br />

                    <label htmlFor="">Nom et prenom</label>
                    <br />
                    <input type="text" name='nom' onChange={change} defaultValue={data.nom} required/>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change} defaultValue={data.email} required/>
                    <br />
                    <br />

                    <label htmlFor="">Tel num</label>
                    <br />
                    <input type="text" name='tel' onChange={change} defaultValue={data.tel} required/>
                    <br />
                    <br />

                    <label htmlFor="">Parcours</label>
                    <br />
                    <select id="select2" name="parcours" onChange={change} defaultValue={data.niveau}>
                        <option value="">Selectionnez votre parcours</option>
                        <option value="GB">GB</option>
                        <option value="ASR">ASR</option>
                        <option value="IG">IG</option>
                        <option value="GID">GID</option>
                        <option value="OCC">OCC</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="">Niveau</label>
                    <br />
                    <select name="niveau" id="select2"  onChange={change} defaultValue={data.niveau}>
                        <option value="">Selectionnez votre niveau</option>
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="">Statut</label>
                    <br />
                    <select name="statut" id="select2"  onChange={change} defaultValue={data.statut} required>
                        <option value="">Selectionnez son statut</option>
                        <option value="simple">Simple</option>
                        <option value="delegue">Delegue</option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <button> Modifier</button>
                </form>
        </div>
    </div>
  )
}

export default ModifierStatut