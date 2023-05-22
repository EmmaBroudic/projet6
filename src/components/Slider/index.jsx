import img1 from '../../images/IMG1_slider.jpg';
import '../../index.scss';
 
function Slider() {
    return (
        <div className="slider">
            <img src={img1} className="img-slider" alt="img" />
            <p className="text-slider">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Slider