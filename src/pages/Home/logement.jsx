import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Carroussel from '../../components/Carroussel/carroussel.jsx';
import './logement.css';
import '../../index.css';

function Logement() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { title, description, host, location, equipments, tags } = logement;

    const nom = host.name;

    const photoIdentite = host.picture;
    
    // Utilisez l'identifiant pour récupérer les détails de l'appartement correspondant
    // et affichez-les dans votre composant
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [equipmentsVisible, setEquipmentsVisible] = useState(false);
  
    const toggleDescription = () => {
      setDescriptionVisible(!descriptionVisible);
    };
  
    const toggleEquipments = () => {
      setEquipmentsVisible(!equipmentsVisible);
    };

    return (
      <div className = "app-container">
        <Carroussel />
        <div className = "bloc-top">
            <div className = "bloc-top-titre">
                <div className = "titre-logement-un">{title}</div>
                <div className = "localisation">{location}</div>
                <div className = "tags" >{tags.map((tag, index) => (<span className = "tag" key={`${index}-${tag}`}>{tag}</span>))}</div>
            </div>
            <div className = "bloc-top-host">
                <div className = "host">{ nom }</div>
                <img src = { photoIdentite } className = "img-host" alt = "img-host" />
                <div className = "rating">***</div>
            </div>
        </div>
        <div className="bloc-bottom">
            <div className="bloc-description">
                <div className="bloc-titre">
                    <h2 className="titre-logement">Description</h2>
                    <button className="toggle-button" onClick={toggleDescription}>
                    {descriptionVisible ? 'Fermer' : 'Ouvrir'}
                    </button>
                </div>
                {descriptionVisible && <div className="texte-logement">{description}</div>}
            </div>
            <div className="bloc-equipement">
                <div className="bloc-titre">
                    <h2 className="titre-logement">Equipement</h2>
                    <button className="toggle-button" onClick={toggleEquipments}>
                    {equipmentsVisible ? 'Fermer' : 'Ouvrir'}
                    </button>
                </div>
                {equipmentsVisible && <div className = "texte-logement">
                        {equipments.map((equipment, index) => (
                            <p className="texte-equipement" key={index}>{equipment}</p>
                        ))}
                    </div>}
            </div>
        </div>

      </div>
    );
  }

export default Logement

