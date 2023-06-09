import ImageDeuxTop from '../../components/Image-deux-top/image-deux-top.jsx';
import Informations from '../../components/Informations/informations.jsx';
import '../../index.css';


function Home() {
  return (
    <div className = "app-container">
      <ImageDeuxTop />
      <Informations />
    </div>
  );
}

export default Home;