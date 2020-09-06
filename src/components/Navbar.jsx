import React from 'react'
import Button from '@material-ui/core/Button';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav__left">
                <a href="#">INICIO</a>
            </div>
            <div className="nav__right">
                <a href="#">CONTACT</a>
                <Button variant="outlined" href="/CV-OscarUmana.pdf" target="_blank">Descargar CV</Button>
            </div>
        </div>
    )
}

export default Navbar
