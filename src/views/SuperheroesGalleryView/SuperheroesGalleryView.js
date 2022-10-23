import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import SuperheroesList from "../../components/SuperheroesList";
import SuperheroForm from "../../components/SuperheroForm";

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SuperheroesList />
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
