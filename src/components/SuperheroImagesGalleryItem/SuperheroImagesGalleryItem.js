import { useState } from "react";

import { ReactComponent as Delete } from "../../images/icons/delete.svg";
import ConfirmationModal from "../ConfirmationModal";
import { useDeleteSuperheroImageMutation } from "../../redux/superheroes/superheroesReducer";

import s from "./SuperheroImagesGalleryItem.module.css";
import { useParams } from "react-router-dom";

const SuperheroImagesGalleryItem = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { id: superheroId } = useParams();
  const [deleteSuperheroImage] = useDeleteSuperheroImageMutation();

  const { url, tags, publicId } = image;
  const tagsString = tags.join(" ");

  const handleImageDelete = async () => {
    await deleteSuperheroImage({ superheroId, publicId });
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <li>
        <img src={url} alt={tagsString} />
        <button type="button" className={s.deleteButton} onClick={openModal}>
          <Delete className={s.deleteSvg} />
        </button>
      </li>

      <ConfirmationModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        message="Remove this image?"
        onYes={handleImageDelete}
      />
    </>
  );
};

export default SuperheroImagesGalleryItem;
