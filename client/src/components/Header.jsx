import React from 'react'

function Header() {

  const local = JSON.parse(localStorage.getItem("token"));
  const id = local[1];

  return (
    <div className='header'>
        <header>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li><a href={`/connected/${id}`}>Home</a></li>
                    <li><a href={`/envoyer/${id}/delegue`}>Envoyer fichier</a></li>
                    <li><a href={`/liste/${id}/visiteur`}>Liste</a></li>
                    <li><a href="">Aide</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header