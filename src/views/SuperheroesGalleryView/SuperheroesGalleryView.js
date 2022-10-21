import { useState } from "react";
import { Button } from "@mui/material";
import SuperheroesList from "../../components/SuperheroesList";
import Modal from "../../components/Modal";

const SuperheroesGalleryView = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  return (
    <div>
      <SuperheroesList />
      <Button type="button" onClick={openModal}>
        Add Superhero
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default SuperheroesGalleryView;
