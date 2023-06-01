import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-page'); // Naviguer vers une autre page
  };

  return (
    <div>
      <button onClick={handleClick}>Aller à une autre page</button>
    </div>
  );
}

export default MyComponent()