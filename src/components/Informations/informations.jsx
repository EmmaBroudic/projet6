import React from 'react';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import { infos } from '../../data/infos/infos.jsx';
import './informations.css';

function Infos() {
  // Extraire les données spécifiques (rating et description) de chaque annonce
  const infosData = infos.map((info) => ({
    id: info.id,
    titre: <h2 className = "infos-titre">{info.title}</h2>,
    descriptif: <div className = "text-container"><p className = "infos-text">{info.text}</p></div>,
  }));

  return (
    <div className = "infos-bloc">
      <ReusableCollapse data = { infosData } />
    </div>
  );
}

export default Infos;