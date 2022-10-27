import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";

import SuperheroesList from "../../components/SuperheroesList";
import SuperheroForm from "../../components/SuperheroForm";
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

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        onClick={openModal}
        sx={{ mt: 2, mb: 4 }}
      >
        Add New Superhero!
      </Button>

      <SuperheroesList />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <SuperheroForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default SuperheroesGalleryView;
