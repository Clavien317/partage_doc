import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Liste() {
    const [data, setData] = useState([]);
    const [userInfo,setUserInfo] = useState("")
    const {id} = useParams()
    const history = useNavigate();
    const [niv,setNiv] = useState("")
    // const local = JSON.parse(localStorage.getItem("token"));


    const verifyAuth = () => {
      axios
        .post(
          "http://localhost:9000/verifyAuth",
          {},
          {
            headers: {
              "access-token": localStorage.getItem("token"),
            },
          })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    setTimeout(() => {
      if (verifyAuth) {
        if (localStorage.getItem("token") != null) {
          console.log("Voici notre token :", localStorage.getItem("token"));
        } else {
          history("/login");
        }
      }
    }, 2);
    const information=async()=>
    {
      try
      {
        const Info = await axios.get(`http://localhost:9000/${id}`)
        setNiv(Info.data.niveau)
        setUserInfo(Info.data)
        console.log("À PROPOS DE CE USER", Info.data);

      }catch(e)
      {
        console.log(" Erreur de liste info user",e);
      }
    }

    useEffect(() => {
        fetchData()
        information()
    }, []);


    const fetchData = async () => {
      try {
        
          const res = await axios.get(`http://localhost:9000/liste`);
          // console.log(res.data.data);
          const fich = res.data.data;
          setData(fich);
      } catch (error)
      {
          console.error("Erreur lors de la récupération des données :", error);
      }
  }


    const Download = async(id)=>
    {
        const img = document.getElementById("img")
        const a = document.createElement("a")
        a.href = `http://localhost:9000/telecharger/${id}`
        img.appendChild(a)
        a.click()
        a.style.display= "none"
    }

    const typeFich = (item) => {
        if (item.type && item.type.startsWith('application/pdf')) {
            return <h5 className='type'>Fichier pdf</h5>
        } else if (item.type && item.type.startsWith('image')) {
            return <h5 className='type'>Fichier image</h5>
        } else {
            return <h5 className='type'>Type de fichier non pris en charge </h5>;
        }
    }

    const deconnecter = () => {
      localStorage.removeItem("token");
      history("/login");
    };

    const supprimer=async(id)=>
    {
      await axios.delete(`http://localhost:9000/supprimer/${id}`)
      alert("Supprimeee successful")
      fetchData()
    }

    return (
        <div>
            <Header />
            <br />
            <div className="home">
              <div className="profil">
                <div className="photo"></div>
                  <div>
                    <h2>{userInfo.nom}</h2>
                    <h4>{userInfo.email}</h4>
                    <h4>{userInfo.matricule}</h4>
                    <h4>{userInfo.niveau}  {userInfo.parcours}</h4>
                    <h4>{userInfo.statut}</h4>
                  </div>

                <button className='deconnect' onClick={()=>deconnecter()}>Deconnecter</button>
              </div>
                <div className="liste">
                  {
                  data && data.map((item, i) => (
                      item.niveau ==niv ? (
                      <>
                      {
                        userInfo.statut ==="delegue"?
                        (<>
                          <div key={i} className='fich'>
                            <button className='supprimer' onClick={()=>supprimer(`${item.id}`)}>X</button>
                            <h3>{item.titre}</h3>
                            {typeFich(item)}
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Ipsa quaerat consequuntur expedita. Autem, vel nulla magnam
                                quas ullam natus officiis doloribus sint aliquid iste vitae, 
                                consectetur voluptates, excepturi ex omnis?
                            </p>
                            <br />
                            <button onClick={() => Download(item.id)}>Download</button>
                            <div id='img'>
                            </div>
                        </div>
                        </>):(
                        <>
                          <div key={i} className='fich'>
                            <h3>{item.titre}</h3>
                            {typeFich(item)}
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Ipsa quaerat consequuntur expedita. Autem, vel nulla magnam
                                quas ullam natus officiis doloribus sint aliquid iste vitae, 
                                consectetur voluptates, excepturi ex omnis?
                            </p>
                            <br />
                            <button onClick={() => Download(item.id)}>Download</button>
                            <div id='img'>
                            </div>
                        </div>
                        </>)
                      }
                        
                      </>):("")
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Liste;
