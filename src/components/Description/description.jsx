import React from 'react';
import { useParams } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import './description.css';
import '../../index.css';

function Description() {

  const { id } = useParams();

  const logement = annonces.find(appartement => appartement.id === id);

  const annoncesData = logement ? [{
    id: logement.id,
    titre: <h2 className = "descri-titre">{"Description"}</h2>,
    descriptif: <p className = "descri-text">{logement.description}</p>,
  }] : [];


  return (
    <div className = "descri-bloc">
      <ReusableCollapse data = { annoncesData } />
    </div>
  );
}

export default Description;