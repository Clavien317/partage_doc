import React from 'react'

function NavAdmin() {
  return (
    <div className='header'>
    <header>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li><a href="/accueil/admin">Accueil</a></li>
                    <li><a href="/liste/etudiant">Liste etudiant</a></li>
                    <li><a href="/liste/livre">Liste livre</a></li>
                    <li><a href="">Aide</a></li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default NavAdmin