import './main.css';
import Card from '../Card/card.jsx';
import Appartement from '../Annonces/annonces.jsx';
import Test from '../../annoncestest.js';

function Main() {
    return (
        <div className="main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Test />
            <Appartement />
        </div>
    )
}

export default Main