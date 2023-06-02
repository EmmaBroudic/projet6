/*import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Redirection() {
    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL
    const location = useLocation(); // Obtient l'URL actuelle
    const navigate = useNavigate();

    console.log({ id, location });

    if (location.pathname !== `/logement/${id}`) {
        navigate('/error');
    }
    return (
        <div>
        <p>Aller à une autre page</p>
        </div>
    );
}

export default Redirection;*/
