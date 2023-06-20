import React, { useState } from 'react';
import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import next from '../../images/next.png';
import previus from '../../images/previus.png';
import './carroussel.css';

/* Dans un premier temps, ce bloc de code sélectionne l'identifiant
indiqué dans l'url afin de retrouver les données correpondant au
logement sélectionné
Ensuite, une action .map est effectuée sur les images afin de les afficher
dans un carroussel.*/

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

  const photo = logement.pictures;

return (
  <div>
    {logement.pictures.length < 2 ? (
          <div className="carroussel-slide">
            <img
              className="slide"
              src = { photo }
              alt = { "img1" }
            />
          </div>
    ) : (
          <div>
            <div className="carroussel-slide">
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
              <img className = "prev" src={previus} alt = "flèche vers le haut" />
            </button>
            <button className="next-button" onClick={nextSlide}>
              <img className = "next" src={next} alt = "flèche vers le haut" />
            </button>
            <p className = "num">{currentSlide + 1}/{logement.pictures.length}</p>
          </div>
        )
      }
    </div>
  );
}

export default Carroussel;