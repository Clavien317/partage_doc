import React, { useState } from 'react'
import "../style.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Navbar from '../components/Navbar'

function Connect() {

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

    const submit = async (e) => {
        e.preventDefault();
        console.log(input);

        if(input.email =="admin@gmail.com" && input.password=="123")
        {
            navigate("/accueil/admin")
        }
       
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
        <h2>Veillez se connecter</h2>
        <fieldset>
            <legend>Login</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change} required/>
                    <br />
                    <br />

                    <label htmlFor="">Password</label>
                    <br />
                    <input type={type?"text":"password"} name='password' onChange={change} required/> <span onClick={txt}>{(txte?"Show":"Hide")}</span>
                    <br />
                    <br />
                    <br />
                    <button> Connect</button>
                    <br />
                    <br />
                    <a href="" className='reinit'>Mot de passe oublier</a>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Connect