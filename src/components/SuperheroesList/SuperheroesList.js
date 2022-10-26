import SuperheroesListItem from "../SuperheroesListItem";

const SuperheroesList = ({ superheroes }) => {
  return (
    <ul>
      {superheroes.map((superhero) => {
        const { _id: id } = superhero;

        return <SuperheroesListItem key={id} superhero={superhero} />;
      })}
    </ul>
  );
};

export default SuperheroesList;
