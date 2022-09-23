export const Card = (props) => {
  const {
    status,
    degree,
    image,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
  } = props;
  return (
    <div>
      <p>
        {status}
        {degree}
      </p>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{dateOfBirth}</p>
      <p>{gender}</p>
      <p>{eyeColour}</p>
      <p>{hairColour}</p>
    </div>
  );
};
