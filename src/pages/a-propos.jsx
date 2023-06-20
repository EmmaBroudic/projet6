import ImageDeuxTop from '../components/Image-deux-top/image-deux-top.jsx';
import Informations from '../components/Informations/informations.jsx';
import '../index.css';

/* Ce bloc de code réunit les différents composants de la page à propos. */

function Apropos() {
  return (
    <div className = "app-container">
      <ImageDeuxTop />
      <Informations />
    </div>
  );
}

export default Apropos;