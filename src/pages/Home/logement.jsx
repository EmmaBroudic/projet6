import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './logement.css';
import '../../index.css';

function Logement() {
    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL
  
    const logement = annonces.find(appartement => appartement.id === id);

    const { title, description, location, equipments, tags } = logement;
    // Utilisez l'identifiant pour récupérer les détails de l'appartement correspondant
    // et affichez-les dans votre composant
  
    return (
      <div className = "app-container">
        <div className = "bloc-carroussel">
            <h1>Détails de l'appartement {id}</h1>
            {/* Affichez les détails de l'appartement ici */}
            <div>ajouter composant Carroussel</div>
        </div>
        <div className = "bloc-top">
            <div className = "bloc-titre">
                <div className = "titre-logement-un">{title}</div>
                <div className = "localisation">{location}</div>
                <div className = "tag">{tags}</div>
            </div>
            <div className = "bloc-host">
                <div className = "host">Nom personne</div>
                <div className = "rating">***</div>
            </div>
        </div>
        <div className = "bloc-titre">
            <h2 className = "titre-logement">Description</h2>
        </div>
        <div className = "texte-logement">{description}</div>
        <div className = "bloc-titre">
            <h2 className = "titre-logement">Equipement</h2>
        </div>
        <div className = "texte-logement">{equipments}</div>
      </div>
    );
  }

export default Logement