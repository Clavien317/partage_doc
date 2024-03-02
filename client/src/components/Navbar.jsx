import React from 'react'

function Navbar() {
  return (
    <div className='header'>
    <header>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/inscrir">S'inscrir</a></li>
                    <li><a href="/login">Se connecter</a></li>
                    <li><a href="">Aide</a></li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default Navbar