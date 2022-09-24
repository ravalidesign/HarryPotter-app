import "./Card.css";
export const Card = (props) => {
  const {
    character,
    status,
    degree,
    image,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    handleSaveFavorite,
  } = props;
  return (
    <div className="card-content">
      <button onClick={() => handleSaveFavorite(character)}>add</button>
      <div className="card-content-left">
        <img src={image} alt={name} />
      </div>
      <div className="card-content-right">
        <p>
          {status}
          {degree}
        </p>
        <p>{name}</p>
        <p>{dateOfBirth}</p>
        <p>{gender}</p>
        <p>{eyeColour}</p>
        <p>{hairColour}</p>
      </div>
    </div>
  );
};
