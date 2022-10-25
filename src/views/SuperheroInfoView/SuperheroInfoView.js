import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import { useGetSuperheroByIdQuery } from "../../redux/superheroes/superheroesReducer";
import SuperheroInfo from "../../components/SuperheroInfo";

const SuperheroInfoView = () => {
  const { id } = useParams();
  const { data: superheroById, isFetching } = useGetSuperheroByIdQuery(id);

  return (
    <>
      {isFetching && <SyncLoader color="#757b7a" />}
      {superheroById && <SuperheroInfo superhero={superheroById} />}
    </>
  );
};

export default SuperheroInfoView;
