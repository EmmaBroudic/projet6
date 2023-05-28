import { infos } from '../../data/infos-a-propos/infos-a-propos.jsx';
import './text-collapse.css';

function TextCollapse(props) {

    return (
      <div className="collapse-container">
        <p className="text-collapse">{props.children}</p>
      </div>
    );
  }
  
  export default TextCollapse

  console.log(infos)