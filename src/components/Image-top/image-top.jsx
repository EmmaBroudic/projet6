import img1 from '../../images/IMG1_slider.jpg';
import './image-top.css';
 
function Imagetop() {
    return (
        <div className="image-top">
            <img src={img1} className="img-top" alt="img" />
            <p className="text-img-top">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Imagetop