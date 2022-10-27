import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { ReactComponent as BackSvg } from "../../images/icons/back.svg";
import ConfirmationModal from "../ConfirmationModal";
import ImagesGallery from "../ImagesGallery";
import SuperheroInfoArticle from "../SuperheroInfoArticle";
import SuperheroInfoParagraph from "../SuperheroInfoParagraph";
import { useDeleteSuperheroMutation } from "../../redux/superheroes/superheroesReducer";
import s from "./SuperheroInfo.module.css";

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

  const handleDeleteSuperhero = async () => {
    closeModal();
    try {
      await deleteSuperhero(id);
      navigate("/");
      toast.success(`${nickname} has been deleted from colletion.`);
    } catch (error) {
      toast.error("Something went wrong :( Try again!");
    }
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Link to="/" className={s.backLink}>
        <BackSvg className={s.backSvg} />
      </Link>
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
      <ImagesGallery images={images} />
      <Button
        type="button"
        onClick={openModal}
        disabled={isDeleting}
        variant="outlined"
      >
        {isDeleting && <SyncLoader size={5} color="#757b7a" />} Delete{" "}
        {nickname}
      </Button>

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
