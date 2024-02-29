import React from 'react'

function Header() {
  return (
    <div className='header'>
        <header>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Envoyer fichier</a></li>
                    <li><a href="">Aide</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header