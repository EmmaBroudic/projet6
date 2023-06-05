import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import './equipments.css';
import '../../index.css';

function Logement() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { equipments } = logement;

    const [equipmentsVisible, setEquipmentsVisible] = useState(false);
  
    const toggleEquipments = () => {
      setEquipmentsVisible(!equipmentsVisible);
    };

    return (
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
    );
  }

export default Logement