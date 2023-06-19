import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-kasa.jpg';
import './header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="logo Kasa" />
            <nav>
                <NavLink exact className="menu-left" activeClassName="active" to="/">Accueil</NavLink>
                <NavLink className="menu-right" activeClassName="active" to="/a-propos">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;