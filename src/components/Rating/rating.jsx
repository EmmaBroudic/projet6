
/*import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';*/
/*import './rating.css';
import '../../index.css';*/

import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './rating.css';

function Test() {
  library.add(faStar);

  const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL
  
  const logement = annonces.find(appartement => appartement.id === id);
  
  const { rating } = logement;

  const repeatCountRed = rating;

  console.log(id);

  console.log(rating);

  console.log(repeatCountRed);

  const repeatCountGrey = 5 - rating;

  console.log(repeatCountGrey);

  // Générer un tableau avec des éléments d'FontAwesome répétés
  const repeatedIconsRed = Array.from({ length: repeatCountRed }, (_, index) => (
    <FontAwesomeIcon className = "pad" key={index} icon={faStar} />
  ));

  // Générer un tableau avec des éléments d'FontAwesome répétés
  const repeatedIconsGrey = Array.from({ length: repeatCountGrey }, (_, index) => (
    <FontAwesomeIcon className = "pad" key={index} icon={faStar} />
  ));

  return (
    <div>
        <p className = "red">{repeatedIconsRed}</p>
        <p className = "grey">{repeatedIconsGrey}</p>
    </div>
  );
}

export default Test;/*



function Rating() {
  const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

  annonces.find(appartement => appartement.id === id);

  /*const { rating } = logement;*/

  /*const nbreEtoilesRouges = rating;
  const nbreEtoilesGrises = 5 - rating;*/
  /*const star = {<FontAwesomeIcon icon={solid("star")} />};
  const repeatString = "r".repeat(4);
  const repeatStringBis = star.repeat(4);

    return (
        <div className="rating">

            <p>{ repeatString }</p>
            <p>{ repeatStringBis }</p>
        </div>
    )
}
export default Rating;*/