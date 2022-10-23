import { SyncLoader } from "react-spinners";

import SuperheroesListItem from "../SuperheroesListItem";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";

const SuperheroesList = () => {
  const { data: superheroes, isFetching } = useGetSuperheroesQuery();

  return (
    <div>
      {isFetching && <SyncLoader color="#757b7a" />}
      {superheroes && (
        <ul>
          {superheroes.map((superhero) => {
            const { _id } = superhero;

            return <SuperheroesListItem key={_id} superhero={superhero} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default SuperheroesList;
