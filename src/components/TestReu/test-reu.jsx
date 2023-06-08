import React from 'react';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import { annonces } from '../../data/annonces/annonces.jsx';

function MyComponent() {
  // Extraire les données spécifiques (rating et description) de chaque annonce
  const annoncesData = annonces.map((annonce) => ({
    id: annonce.id,
    titre: annonce.title,
    descriptif: annonce.description,
  }));

  return (
    <div>
      <h1>Composant 1</h1>
      <ReusableCollapse data={annoncesData} />

      {/* Autres instances de ReusableCollapse avec différentes sources de données */}
    </div>
  );
}

export default MyComponent;