import ReactModal from "react-modal";
import { Button } from "@mui/material";

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

const ConfirmationModal = ({ isOpen, onClose, onYes, message }) => {
  const handleYesClick = () => {
    onYes();
    onClose();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
    >
      {message}
      <Button type="button" onClick={handleYesClick}>
        Yes
      </Button>
      <Button type="button" onClick={onClose}>
        No
      </Button>
    </ReactModal>
  );
};

export default ConfirmationModal;
