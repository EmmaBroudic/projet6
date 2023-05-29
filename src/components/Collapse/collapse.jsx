import React, { useState } from 'react';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import Text from '../Text-collapse/text-collapse';
import './collapse.css';

function Collapse() {
  // déclarer variable et fonction
  const [buttonVisible, setButtonVisible] = useState(true);

  // fonction pour changer visibilité button
  const changeButton = () => {
    setButtonVisible(!buttonVisible);
  };

  return (
    <div className="collapse-container">
        <div className="button-container">
          <p className="titre-collapse">Fiabilité</p>
          {buttonVisible ? (
            <button className="buttonup" onClick={changeButton}>
              <img src={flechhaut} alt="flèche vers le haut" />
            </button>
          ) : (
            <button className="buttondown" onClick={changeButton}>
              <img src={flechbas} alt="flèche vers le bas" />
            </button>
          )}

          {buttonVisible && (
          <Text>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Text>
          )}
        </div>

    </div>
  );
}

export default Collapse;