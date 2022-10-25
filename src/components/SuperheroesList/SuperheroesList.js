import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import SuperheroesListItem from "../SuperheroesListItem";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";

const SuperheroesList = () => {
  const { data: superheroes, isFetching } = useGetSuperheroesQuery();
  const navigate = useNavigate();

  const navigateToSuperheroById = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      {isFetching && <SyncLoader color="#757b7a" />}

      {superheroes && (
        <ul>
          {superheroes.map((superhero) => {
            const { _id: id } = superhero;

            return (
              <SuperheroesListItem
                key={id}
                superhero={superhero}
                onSuperheroClick={navigateToSuperheroById}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SuperheroesList;
