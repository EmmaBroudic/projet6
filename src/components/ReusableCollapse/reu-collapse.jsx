import React, { useState } from 'react';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import './reu-collapse.css';

/* Ce bloc de code permet d'afficher ou de masquer les éléments de textes
présentés sous un élément de titre, et ce, à l'aide d'images flèches vers
le haut ou flèches vers le bas.
 */

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
    <div>
      {infosState.map((info) => (
        <div className="collapse-container" key={info.id}>
          <div className="button-container">
              <div className = "title">{info.titre}</div>
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
          {info.visible && (
          <div className = "text-descript" style={{ display: info.visible ? 'block' : 'none' }}>
            {info.descriptif}
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReusableCollapse;