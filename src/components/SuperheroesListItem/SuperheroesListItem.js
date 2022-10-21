const SuperheroesListItem = ({ superhero }) => {
  const { nickname, images } = superhero;

  return (
    <li>
      <img src={images[0]} alt={images[0].alt} />
      <h2>{nickname}</h2>
    </li>
  );
};

export default SuperheroesListItem;
