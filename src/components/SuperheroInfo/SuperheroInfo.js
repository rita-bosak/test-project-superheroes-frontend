import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ConfirmationModal from "../ConfirmationModal";
import SuperheroImagesGallery from "../SuperheroImagesGallery";
import SuperheroInfoArticle from "../SuperheroInfoArticle";
import SuperheroInfoParagraph from "../SuperheroInfoParagraph";
import { useDeleteSuperheroMutation } from "../../redux/superheroes/superheroesReducer";

const SuperheroInfo = ({ superhero }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteSuperhero, { isLoading: isDeleting }] =
    useDeleteSuperheroMutation();
  const navigate = useNavigate();

  const {
    _id: id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = superhero;

  const handleDeleteSuperhero = () => {
    deleteSuperhero(id);
    navigate("/");
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div>
        <SuperheroInfoArticle title={nickname}>
          <SuperheroInfoParagraph title="Nickname" info={nickname} />
          <SuperheroInfoParagraph title="Real Name" info={real_name} />
          <SuperheroInfoParagraph
            title="Origin Description"
            info={origin_description}
          />
          <SuperheroInfoParagraph title="Superpowers" info={superpowers} />
          <SuperheroInfoParagraph title="Catch Phrase" info={catch_phrase} />
        </SuperheroInfoArticle>
        <SuperheroImagesGallery images={images} />
        <Button
          type="button"
          onClick={openModal}
          disabled={isDeleting}
          variant="outlined"
        >
          {isDeleting && <SyncLoader size={5} color="#757b7a" />} Delete{" "}
          {nickname}
        </Button>
      </div>

      <ConfirmationModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        message="Are you sure?"
        onYes={handleDeleteSuperhero}
      />
    </>
  );
};

export default SuperheroInfo;
