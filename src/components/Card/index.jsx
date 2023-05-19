import data from '../../annonces.json';

const MyComponent = () => {
  return (
    <div>
      <h1>Données JSON :</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;