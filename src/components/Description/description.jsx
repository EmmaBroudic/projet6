import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import './description.css';
import '../../index.css';

function Description() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    console.log(logement);
    console.log("Poppie");

    const { description } = logement;

    const [descriptionVisible, setDescriptionVisible] = useState(false);
  
    const toggleDescription = () => {
      setDescriptionVisible(!descriptionVisible);
    };

    return (
    <div className="bloc-description">
        <div className="bloc-titre">
            <h2 className="titre-logement">Description</h2>
            {descriptionVisible ? (
              <button className = "buttonup" onClick = {() => toggleDescription(descriptionVisible)}>
                <img src={flechhaut} alt = "flèche vers le haut" />
              </button>
            ) : (
              <button className = "buttondown" onClick={() => toggleDescription(descriptionVisible)}>
                <img src = {flechbas} alt = "flèche vers le bas" />
              </button>
            )}
        </div>
        {descriptionVisible && <div className="texte-logement">{description}</div>}
    </div>
    );
  }

export default Description