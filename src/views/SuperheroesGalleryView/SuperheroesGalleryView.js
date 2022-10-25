import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { SyncLoader } from "react-spinners";

import SuperheroesList from "../../components/SuperheroesList";
import SuperheroForm from "../../components/SuperheroForm";
import { useGetSuperheroesQuery } from "../../redux/superheroes/superheroesReducer";

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
  const navigate = useNavigate();

  const navigateToSuperheroById = (id) => {
    navigate(`/${id}`);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {isFetching && <SyncLoader color="#757b7a" />}
      {superheroes && (
        <SuperheroesList
          superheroes={superheroes}
          onSuperheroClick={navigateToSuperheroById}
        />
      )}
      <Button type="button" onClick={openModal}>
        Add Superhero
      </Button>

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
