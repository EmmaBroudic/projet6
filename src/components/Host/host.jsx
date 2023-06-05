import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './host.css';
import '../../index.css';

function Host() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { host } = logement;

    const nom = host.name;

    const photoIdentite = host.picture;
    

    return (
        <div className = "bloc-top-host">
            <div className = "host">{ nom }</div>
            <img src = { photoIdentite } className = "img-host" alt = "img-host" />
            <div className = "rating">***</div>
        </div>
    );
  }

export default Host