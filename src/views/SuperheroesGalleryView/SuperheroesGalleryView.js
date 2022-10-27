import { useState } from "react";
import Modal from "react-modal";
import { Button, Typography } from "@mui/material";

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

      <Typography
        align="center"
        gutterBottom={true}
        variant="h2"
        variantMapping={{ h2: "h1" }}
      >
        Superheroes
      </Typography>

      <SuperheroesList title="Superheroes" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <Typography>
          Please, describe the Superhero and upload images. Take notice, all
          fields are required.
        </Typography>
        <SuperheroForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default SuperheroesGalleryView;
