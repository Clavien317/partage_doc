import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

function Liste() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:9000/liste");
                console.log(res.data.data);
                const fich = res.data.data;
                setData(fich);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };
        fetchData()
    }, []);


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
            // return <img src={`http://localhost:9000/telecharger/${item._id}`} alt={item.titre} />;
        } else {
            return <h5 className='type'>Type de fichier non pris en charge </h5>;
        }
    }

    return (
        <div>
            <Header />
            <br />

            <div className="home">
                <br />
            {
            data && data.map((item, i) => (
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
                    <button onClick={() => Download(item._id)}>Download</button>
                    <div id='img'>
                    </div>
                </div>
    ))}
</div>
        </div>
    );
}

export default Liste;
