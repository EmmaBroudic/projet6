import logo from '../../images/logo-kasa-blanc.png';
import './footer.css';

/*Ce bloc de code correspond au footer du site web.
Il est visible sur toutes les pages du site web. Y compris les
pages d'erreur.*/

function Footer() {
    return (
        <div className = "footer">
            <img src = {logo} className = "footer-logo" alt = "logo Kasa" />
            <p className = "footer-text">© 2020 Kasa. All right reserved</p>
        </div>
    )
}

export default Footer