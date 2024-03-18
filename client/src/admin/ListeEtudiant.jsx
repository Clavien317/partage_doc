import React, { useEffect, useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import axios from 'axios'

function ListeEtudiant() {

    const [user,setUser] = useState([])

    useEffect(()=>
    {
        liste()
    },[])

    const liste=async()=>
    {
        const response = await axios.get("http://localhost:9000/liste/etudiant")
        console.log(response.data);
        setUser(response.data)
    }

  return (
    <div>
        <NavAdmin />
        <br />
        <div className="home3">
        <h1>Liste Etudiant</h1>


        <table>
            <tr>
                <th>#</th>
                <th>Matricule</th>
                <th>Nom et prenom</th>
                <th>Email</th>
                <th>Niveau</th>
                <th>Parcours</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {
                user.map((item,index)=>
                {
                    return (
                    <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.matricule}</td>
                            <td>{item.nom}</td>
                            <td>{item.email}</td>
                            <td>{item.niveau}</td>
                            <td>{item.parcours}</td>
                            <td>{item.statut}</td>
                            <td>
                                <button><a href={`/modifier/statut/${item.id}`}>Modifier statut</a></button>
                            </td>
                        </tr>
                    </>
                    )
                })
            }
        </table>

        </div>
    </div>
  )
}

export default ListeEtudiant