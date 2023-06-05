import React, { useState } from 'react';
import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import next from '../../images/next.png';
import previus from '../../images/previus.png';
import './carroussel.css';

function Carroussel() {
  const { id } = useParams();

  const logement = annonces.find(appartement => appartement.id === id);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === logement.pictures.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? logement.pictures.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carroussel">
      <div>
        {logement.pictures.map((picture, index) => (
          <img
            className="slide"
            key={`${index}-${id}+"b"`}
            src={picture}
            style={{ display: index === currentSlide ? 'flex' : 'none' }}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <img src={previus} alt = "flèche vers le haut" />
      </button>
      <button className="next-button" onClick={nextSlide}>
        <img src={next} alt = "flèche vers le haut" />
      </button>
    </div>
  );
}

export default Carroussel;