import { Link } from 'react-router-dom';
import logo from '../../images/logo-kasa.jpg';
import './header.css';
 
function Header() {
    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="logo Kasa" />
            <nav>
                <Link className="menu" to="/">Accueil</Link>
                <Link className="menu" to="/a-propos">A propos</Link>
            </nav>
        </div>
    )
}

export default Header