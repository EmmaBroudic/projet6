import img1 from '../../images/IMG1_slider.jpg';
import './image-top.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page home.*/

function Imagetop() {
    return (
        <div className = "image-top">
            <img src = {img1} className = "img-top" alt = "img" />
            <h1 className = "text-img-top">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Imagetop