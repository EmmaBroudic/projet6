import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/index">Accueil</Link>
            <Link to="/test">Questionnaire</Link>
        </nav>
    )
}

export default Header