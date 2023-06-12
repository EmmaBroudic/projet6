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

  const annoncesDataDeux = logement ? [{
    id: logement.id,
    titre: <h2 className = "descri-titre">{"Equipement"}</h2>,
    descriptif: logement.equipments.map((item, index) => (
    <p className="equi-text" key={`${index}-${id}+"c"`}>{item}</p>
    )),
  }] : [];


  return (
    <div className = "descri-bloc">
      <div className = "bloc-left"><ReusableCollapse data = { annoncesData } /></div>
      <div className = "bloc-right"><ReusableCollapse data = { annoncesDataDeux } /></div>
      
      
    </div>
  );
}

export default Description;