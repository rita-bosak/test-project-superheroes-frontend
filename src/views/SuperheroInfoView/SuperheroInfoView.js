import SuperheroInfo from "../../components/SuperheroInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSuperheroById } from "../../redux/superheroes/superheroesSelectors";

const SuperheroInfoView = () => {
  const { id } = useParams();
  const superheroById = useSelector((state) => getSuperheroById(state, id));

  return <SuperheroInfo superhero={superheroById} />;
};

export default SuperheroInfoView;
