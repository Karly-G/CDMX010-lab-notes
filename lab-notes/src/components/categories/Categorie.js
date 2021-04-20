import React from 'react';

import './Categorie.css'

const Categorie = (props) => {
    const {text, src} = props;

    return(
        <div className="notas" >
            <a href="/notes"><img src={src} className="notas" alt="Notas" /></a>
            <h3>{text}s</h3>
        </div>
    )
};

export default Categorie;