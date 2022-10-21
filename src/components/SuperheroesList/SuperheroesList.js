import SuperheroesListItem from "../SuperheroesListItem";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";

const SuperheroesList = () => {
  const { data: superheroes, error, isFetching } = useGetSuperheroesQuery();

  return (
    <div>
      {superheroes && (
        <ul>
          {superheroes.map((superhero) => (
            <SuperheroesListItem key={superhero._id} superhero={superhero} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuperheroesList;
