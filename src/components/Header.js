import React from 'react';
import "./style.css"
import troll from "../components/images/troll face.png"

export default function Header() {
    return(
        <header>
            <header className="header">
            <img 
            src={troll} alt='' 
            className="header--image"
            />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">meme app</h4>
        </header>
        </header>
    )
}