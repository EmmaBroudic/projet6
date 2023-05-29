import './text-collapse.css';

function TextCollapse(props) {

    return (
      <div>
        <p className="text-collapse">{props.children}</p>
      </div>
    );
  }
  
  export default TextCollapse