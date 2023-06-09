import React from 'react';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import { infos } from '../../data/infos/infos.jsx';

function Infos() {
  // Extraire les données spécifiques (rating et description) de chaque annonce
  const infosData = infos.map((info) => ({
    id: info.id,
    titre: info.title,
    descriptif: info.text,
  }));

  return (
    <div>
      <ReusableCollapse className = "infos" data = { infosData } />
    </div>
  );
}

export default Infos;