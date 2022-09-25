export const FavoritesList = (props) => {
  const { image, name } = props;
  return (
    <div>
      <ul>
        <img src={image} alt={name} />
        <p>{name}</p>
      </ul>
    </div>
  );
};
