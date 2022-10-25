import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Button } from "@mui/material";
import { useDeleteSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import ConfirmationModal from "../ConfirmationModal";

const SuperheroesListItem = ({ superhero, onSuperheroClick }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteSuperhero, { isLoading: isDeleting }] =
    useDeleteSuperheroMutation();

  const { _id: id, nickname, images } = superhero;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <li>
        <div onClick={() => onSuperheroClick(id)}>
          <img src={images[0].url} alt={images[0].tags.join(" ")} />
          <h2>{nickname}</h2>
        </div>

        <Button type="button" onClick={openModal} disabled={isDeleting}>
          {isDeleting && <SyncLoader size={5} color="#757b7a" />} Delete
        </Button>
      </li>

      <ConfirmationModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onYes={() => deleteSuperhero(id)}
      />
    </>
  );
};

export default SuperheroesListItem;
