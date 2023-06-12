import Imagetop from '../../components/Image-top/image-top.jsx';
import Main from '../../components/Main/main.jsx';
import '../../index.css';

/* Ce bloc de code réunit les différents composants de la page home. */

function Home() {
  return (
    <div className = "app-container">
      <Imagetop />
      <Main />
    </div>
  );
}

export default Home;