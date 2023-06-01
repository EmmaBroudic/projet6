import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './carroussel.css';

function Logement() {
    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL
  
    const images = annonces.find(appartement => appartement.id === id);

    const { pictures } = images;
    // Utilisez l'identifiant pour récupérer les détails de l'appartement correspondant
    // et affichez-les dans votre composant
  
    return (
      <div className = "carroussel">
        <div className="images-galerie">
            {images.pictures.map((picture, index) => (<img key={index} src={picture} alt={`Image ${index + 1}`} />))}
        </div>
      </div>
    );
  }

export default Logement
