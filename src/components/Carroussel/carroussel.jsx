import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './carroussel.css';

function Carroussel() {
    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL
  
    const logement = annonces.find(appartement => appartement.id === id);

    // Utilisez l'identifiant pour récupérer les détails de l'appartement correspondant
    // et affichez-les dans votre composant
  
    return (
      <div className = "carroussel">
        {logement.pictures.map((picture, title, index) => (<img className="images-galerie" key={id} src={picture} alt={`${title + index + 1}`} />))}       
      </div>
    );
  }

export default Carroussel
