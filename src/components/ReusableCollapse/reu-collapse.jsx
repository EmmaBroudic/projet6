import React, { useState } from 'react';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import './collapse.css';

function ReusableCollapse({ data }) {
  const [infosState, setInfosState] = useState(data);

  const toggleVisibility = (id) => {
    setInfosState((prevState) =>
      prevState.map((info) => {
        if (info.id === id) {
          return { ...info, visible: !info.visible };
        }
        return info;
      })
    );
  };

  return (
    <div className="collapse-container">
      {infosState.map((info) => (
        <div key={info.id}>
          <div className="button-container">
            <h2 className="titre-collapse">{info.titre}</h2>
            {info.visible ? (
              <button className="buttonup" onClick={() => toggleVisibility(info.id)}>
                <img src={flechhaut} alt="flèche vers le haut" />
              </button>
            ) : (
              <button className="buttondown" onClick={() => toggleVisibility(info.id)}>
                <img src={flechbas} alt="flèche vers le bas" />
              </button>
            )}
          </div>
          {info.visible && <p className="texte-collapse" style={{ display: 'block' }}>{info.descriptif}</p>}
        </div>
      ))}
    </div>
  );
}

export default ReusableCollapse;