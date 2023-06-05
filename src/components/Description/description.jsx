import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import './description.css';
import '../../index.css';

function Description() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { description } = logement;

    const [descriptionVisible, setDescriptionVisible] = useState(false);
  
    const toggleDescription = () => {
      setDescriptionVisible(!descriptionVisible);
    };

    return (
    <div className="bloc-description">
        <div className="bloc-titre">
            <h2 className="titre-logement">Description</h2>
            <button className="toggle-button" onClick={toggleDescription}>
            {descriptionVisible ? 'Fermer' : 'Ouvrir'}
            </button>
        </div>
        {descriptionVisible && <div className="texte-logement">{description}</div>}
    </div>
    );
  }

export default Description