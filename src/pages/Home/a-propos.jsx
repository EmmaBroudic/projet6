import ImageDeuxTop from '../../components/Image-deux-top/image-deux-top.jsx';
import Collapse from '../../components/Collapse/collapse.jsx';
import '../../index.css';


function Home() {
  return (
    <div className = "app-container">
      <ImageDeuxTop />
      <Collapse />
    </div>
  );
}

export default Home;