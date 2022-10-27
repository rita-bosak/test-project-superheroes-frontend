import { Pagination } from "@mui/material";
import SuperheroesListItem from "../SuperheroesListItem";
import s from "./SuperheroesList.module.css";

const SuperheroesList = ({ superheroes }) => {
  return (
    <>
      <ul className={s.superheroesList}>
        {superheroes.map((superhero) => {
          const { _id: id } = superhero;

          return <SuperheroesListItem key={id} superhero={superhero} />;
        })}
      </ul>
      <Pagination sx={{ ml: 50 }} count={10} />
    </>
  );
};

export default SuperheroesList;
