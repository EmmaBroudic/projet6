import React, { useState } from 'react';
import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './carroussel.css';

function Carroussel() {
    const { id } = useParams();
  
    const logement = annonces.find(appartement => appartement.id === id);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide(currentSlide === logement.pictures.length - 1 ? 0 : currentSlide + 1);
    };

    console.log(logement.pictures.length);
    console.log('hello');

    console.log(nextSlide);

    console.log('hello2');

    console.log(currentSlide);

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? logement.pictures.length - 1 : currentSlide - 1);
    };

    console.log(prevSlide);
  
    return (
      <div className = "carroussel">
        <div className="slides-container">
          {logement.pictures.map((picture, title, index) => (
            <div
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              key={`${index}-${title}-${id}+"b"`}
              style={{
                backgroundImage: `url(${picture})`,
              }}
            ></div>
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>
        Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
        Next
        </button>
      </div>
    );
  }

export default Carroussel
