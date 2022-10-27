import { SyncLoader } from "react-spinners";
import { Pagination } from "@mui/material";

import SuperheroesListItem from "../SuperheroesListItem";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";
import s from "./SuperheroesList.module.css";
import { useState } from "react";

const SuperheroesList = ({ title }) => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isFetching } = useGetSuperheroesQuery({ page, limit });

  const paginationCount = Math.ceil(data && data.collectionLength / limit);

  const handlePaginationChange = (_, paginationPage) => {
    setPage(paginationPage);
  };

  const conditionListRender = data && data.superheroes && !isFetching;

  return (
    <>
      {isFetching && <SyncLoader color="#757b7a" />}
      {conditionListRender && (
        <>
          <ul className={s.superheroesList}>
            {data.superheroes.map((superhero) => {
              const { _id: id } = superhero;

              return <SuperheroesListItem key={id} superhero={superhero} />;
            })}
          </ul>
          <Pagination
            count={paginationCount}
            onChange={handlePaginationChange}
            sx={{ justifyContent: "center" }}
            className={s.pagination}
          />
        </>
      )}
    </>
  );
};

export default SuperheroesList;
