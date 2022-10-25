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

const ConfirmationModal = ({ isOpen, onClose, onYes }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
    >
      Are you sure?
      <Button type="button" onClick={onYes}>
        Yes
      </Button>
      <Button type="button" onClick={onClose}>
        No
      </Button>
    </ReactModal>
  );
};

export default ConfirmationModal;
