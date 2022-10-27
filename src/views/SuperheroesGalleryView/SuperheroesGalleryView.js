import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { SyncLoader } from "react-spinners";

import SuperheroesList from "../../components/SuperheroesList";
import SuperheroForm from "../../components/SuperheroForm";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";
import s from "./SuperheroesGalleryView.module.css";

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

const SuperheroesGalleryView = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { data: superheroes, isFetching } = useGetSuperheroesQuery();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button
        type="button"
        variant="outlined"
        onClick={openModal}
        className={s.addSuperheroBtn}
        sx={{ mt: 2, mb: 4 }}
      >
        Add New Superhero!
      </Button>

      {isFetching && <SyncLoader color="#757b7a" />}
      {superheroes && <SuperheroesList superheroes={superheroes} />}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <SuperheroForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default SuperheroesGalleryView;
