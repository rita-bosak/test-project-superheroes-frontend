import SuperheroesListItem from "../SuperheroesListItem";

const SuperheroesList = ({ superheroes, onSuperheroClick }) => {
  return (
    <ul>
      {superheroes.map((superhero) => {
        const { _id: id } = superhero;

        return (
          <SuperheroesListItem
            key={id}
            superhero={superhero}
            onSuperheroClick={onSuperheroClick}
          />
        );
      })}
    </ul>
  );
};

export default SuperheroesList;
