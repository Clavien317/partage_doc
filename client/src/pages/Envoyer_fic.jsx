import React from 'react'
import Header from '../components/Header'

function Envoyer_fic() {
  return (
    <div>
        <Header />
        <div className="home">
            <h3>Envoyer votre ficher ou document</h3>
            <br />
            <br />
            <form action="">
                <label htmlFor="">Importer votre fichier</label>
                <br />
                <input type="file" name="" id="" />
                <br />

                <label htmlFor="">Titre</label>
                <br />
                <input type="text" name="" />
                <br />

                <label htmlFor="">Type</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <br />
                <br />
                <button>Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Envoyer_fic