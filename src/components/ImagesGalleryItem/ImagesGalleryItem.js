import { useState } from "react";

import { ReactComponent as Delete } from "../../images/icons/delete.svg";
import ConfirmationModal from "../ConfirmationModal";
import { useDeleteSuperheroImageMutation } from "../../redux/superheroes/superheroesReducer";
import { useParams } from "react-router-dom";
import s from "./ImagesGalleryItem.module.css";

const ImagesGalleryItem = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteSuperheroImage] = useDeleteSuperheroImageMutation();
  const { id: superheroId } = useParams();

  const { url, tags, publicId, width, height } = image;
  const tagsString = tags.join(" ");

  const handleImageDelete = async () => {
    await deleteSuperheroImage({ superheroId, publicId });
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <li className={s.imageGalleryItem}>
        <div className={s.thumb}>
          <button type="button" onClick={openModal} className={s.deleteButton}>
            <Delete className={s.deleteSvg} />
          </button>
          <img src={url} width={width} height={height} alt={tagsString} />
        </div>
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

export default ImagesGalleryItem;
