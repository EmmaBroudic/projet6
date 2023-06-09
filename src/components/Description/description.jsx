import React from 'react';
import { useParams } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import './description.css';

function Description() {

  const { id } = useParams();

  const logement = annonces.find(appartement => appartement.id === id);

  // Extraire les données spécifiques (rating et description) de chaque annonce
  const annoncesData = logement ? [{
    id: logement.id,
    titre: "Description",
    descriptif: logement.description,
  }] : [];

  return (
    <div>
      <ReusableCollapse data = { annoncesData } />
    </div>
  );
}

export default Description;