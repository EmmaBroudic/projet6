import './error.css';
import '../../index.css';

/*Ce bloc de code correspond à la page "error".
Ce sont les éléments que l'utilisateur verra affiché
s'il se trompe d'url.*/

function Error() {
    return (
        <div className = "error">
            <p className = "error-quatre-cent-quatre">404</p>
            <p className = "message-error">Oups ! La page que vous demandez n'existe pas.</p>
            <a className = "retour-home" href = "http://localhost:3000/">Retourner sur la page d'accueil</a>
        </div>
    )
}
 
export default Error