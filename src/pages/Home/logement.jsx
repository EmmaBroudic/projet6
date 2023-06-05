import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import Carroussel from '../../components/Carroussel/carroussel.jsx';
import Titre from '../../components/Logement-titre/logement-titre.jsx';
import Host from '../../components/Host/host.jsx';
import Description from '../../components/Description/description.jsx';
import Equipment from '../../components/Equipments/equipments.jsx';
import './logement.css';
import '../../index.css';

function Logement() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { title } = logement;

    console.log( title);

    /*const nom = host.name;

    const photoIdentite = host.picture;*/
    
    // Utilisez l'identifiant pour récupérer les détails de l'appartement correspondant
    // et affichez-les dans votre composant
    /*const [descriptionVisible, setDescriptionVisible] = useState(false);*/
   

    return (
      <div className = "app-container">
        <Carroussel />
        <div className = "bloc-top">
            <Titre />
            <Host />            
        </div>
        <div className="bloc-bottom">
            <Description />
            <Equipment />
        </div>

      </div>
    );
  }

export default Logement

