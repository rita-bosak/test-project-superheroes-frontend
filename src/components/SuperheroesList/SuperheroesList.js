import { SyncLoader } from "react-spinners";
import { Pagination } from "@mui/material";

import SuperheroesListItem from "../SuperheroesListItem";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";
import s from "./SuperheroesList.module.css";
import { useState } from "react";

const SuperheroesList = () => {
  const [page, setPage] = useState(1);
  const { data: superheroes, isFetching } = useGetSuperheroesQuery(page);

  const handlePaginationChange = (_, paginationPage) => {
    setPage(paginationPage);
  };

  return (
    <>
      {isFetching && <SyncLoader color="#757b7a" />}
      {superheroes && (
        <ul className={s.superheroesList}>
          {superheroes.map((superhero) => {
            const { _id: id } = superhero;

            return <SuperheroesListItem key={id} superhero={superhero} />;
          })}
        </ul>
      )}
      <Pagination
        sx={{ ml: 50 }}
        count={10}
        onChange={handlePaginationChange}
      />
    </>
  );
};

export default SuperheroesList;
