import { useState } from "react";
import { ReactComponent as Delete } from "../../images/icons/delete.svg";
import ConfirmationModal from "../ConfirmationModal";

import s from "./SuperheroImagesGalleryItem.module.css";

const SuperheroImagesGalleryItem = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  const { url, tags } = image;
  const tagsString = tags.join(" ");

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
        // onYes={}
      />
    </>
  );
};

export default SuperheroImagesGalleryItem;
