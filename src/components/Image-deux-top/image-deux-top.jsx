import img2 from '../../images/IMG2_slider.jpg';
import './image-deux-top.css';
import '../../index.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page à propos.*/

function ImageDeuxTop() {
    return (
        <div className = "image-deux-top">
            <img src = {img2} className = "img-deux-top" alt = "img" />
        </div>
    )
}

export default ImageDeuxTop