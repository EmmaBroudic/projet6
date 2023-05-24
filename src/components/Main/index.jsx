import '../../index.css';
import Card from '../../components/Card';
import Appartement from '../../components/Annonces';
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