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

    const downloadFile = async (fileName) => {
        const url = `/1709278250107-Capture dâÃ©cran 2024-02-18 140531.png`;
        const response = await fetch(url);
        const blob = await response.blob();
        const urlObject = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = urlObject;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <Header />
            <br />
            <div className="home">
                {data && data.map((item, i) => (
                    <div key={i} className='fichier'>
                        <h3>{item.titre}</h3>
                        <h4>{item.cheminFichier}</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa quaerat consequuntur expedita. Autem, vel nulla magnam
                             quas ullam natus officiis doloribus sint aliquid iste vitae, 
                             consectetur voluptates, excepturi ex omnis?
                        </p>
                        <br />
                        <button onClick={() => downloadFile(item.cheminFichier)}>Download</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Liste;
