import React, { useState } from 'react';
import { infos } from '../../data/infos/infos.jsx';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import './collapse.css';

function Collapse() {
  
  const [infosState, setInfosState] = useState(infos); // Utilisez l'état initial depuis "infos.jsx"

  const toggleVisibility = (id) => {
    setInfosState((prevState) =>
      prevState.map((info) => {
        if (info.id === id) {
          return { ...info, visible: !info.visible }; // Inverse la visibilité de l'élément cliqué
        }
        return info;
      })
    );
  };

  return (
    <div className="collapse-container">
      {infosState.map((info) => (
        <div className="button-container" key={info.id}>
          <h2 className="titre-collapse">{info.title}</h2>
          {info.visible ? (
            <button className="buttonup" onClick={() => toggleVisibility(info.id)}>
              <img src={flechhaut} alt="flèche vers le haut" />
            </button>
          ) : (
            <button className="buttondown" onClick={() => toggleVisibility(info.id)}>
              <img src={flechbas} alt="flèche vers le bas" />
            </button>
          )}

          {info.visible && (
            <p>{info.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;