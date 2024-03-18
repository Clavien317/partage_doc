import React, { useState } from 'react'
import "../style.css"
import axios  from "axios"
import {useNavigate} from "react-router-dom"
import Navbar from '../components/Navbar'



function Inscrir() {
    const [input,setInput] = useState([])
    const [txte,setTxte] = useState(true)
    const [type,setType] = useState(false)
    const navigate = useNavigate()

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
    }

    const submit =async(e)=>
    {
        e.preventDefault()
        await axios.post("http://localhost:9000/inscrir",input).then(function(response)
        {
          if(response)
          {
            console.log("Tout va bien");
          }else
          {
            alert("Erreur d'insertion ...")
          }
    
        });
        console.log(input);
        navigate("/login")
    }


    const txt=()=>
    {
        setTxte(!txte)
        setType(!type)
    }
  return (
    <>
    <Navbar />
    <div className='inscrir'>
        <br />
        <h2>Effectuer votre inscription</h2>
        <fieldset>
            <legend>INSCRIPTION</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Matricule</label>
                    <br />
                    <input type="text" name='matricule' onChange={change} required/>
                    <br />
                    <br />

                    <label htmlFor="">Nom et prenom</label>
                    <br />
                    <input type="text" name='nom' onChange={change} required/>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change} required/>
                    <br />
                    <br />

                    <label htmlFor="">Tel num</label>
                    <br />
                    <input type="text" name='tel' onChange={change} required/>
                    <br />
                    <br />

                    <label htmlFor="">Parcours</label>
                    <br />
                    <select name="parcours" id=""  onChange={change} required>
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
                    <select name="niveau" id=""  onChange={change} required>
                        <option value="">Selectionnez votre niveau</option>
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="">Password</label>
                    <br />
                    <input type={type?"text":"password"} name='password' onChange={change}  required/> <span onClick={txt}>{(txte?"Show":"Hide")}</span>
                    <br />
                    <br />
                    <br />
                    <button> S'inscrir</button>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Inscrir