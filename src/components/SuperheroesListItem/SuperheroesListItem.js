import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Button } from "@mui/material";
import Modal from "react-modal";
import { useDeleteSuperheroMutation } from "../../redux/superheroes/superheroesReducer";

Modal.setAppElement("#root");

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SuperheroesListItem = ({ superhero }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [deleteSuperhero, { isLoading: isDeleting }] =
    useDeleteSuperheroMutation();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { _id, nickname, images } = superhero;

  return (
    <>
      <li>
        <img src={images[0]} alt={images[0].alt} />
        <h2>{nickname}</h2>
        <Button type="button" onClick={openModal} disabled={isDeleting}>
          {isDeleting && <SyncLoader size={5} color="#757b7a" />} Delete
        </Button>
      </li>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        Are you sure?
        <Button type="button" onClick={() => deleteSuperhero(_id)}>
          Yes
        </Button>
        <Button type="button" onClick={closeModal}>
          No
        </Button>
      </Modal>
    </>
  );
};

export default SuperheroesListItem;
