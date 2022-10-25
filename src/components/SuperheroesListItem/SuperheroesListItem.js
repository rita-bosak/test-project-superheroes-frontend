const SuperheroesListItem = ({ superhero, onSuperheroClick }) => {
  const { _id: id, nickname, images } = superhero;

  return (
    <li>
      <div onClick={() => onSuperheroClick(id)}>
        <img src={images[0].url} alt={images[0].tags.join(" ")} />
        <h2>{nickname}</h2>
      </div>
    </li>
  );
};

export default SuperheroesListItem;
