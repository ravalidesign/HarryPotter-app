import "./FavoriteList.css";
export const FavoritesList = (props) => {
  const { image, name, handleDeleteFavoriteCharacters } = props;
  return (
    <div className="list-container">
      <ul>
        <img src={image} alt={name} />
        <p>{name}</p>
        <button onClick={() => handleDeleteFavoriteCharacters(name)}>
          borrar
        </button>
      </ul>
    </div>
  );
};
