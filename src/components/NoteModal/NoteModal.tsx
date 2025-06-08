import ReactDOM from "react-dom";
import css from "./NoteModal.module.css";
import NoteForm from "../NoteForm/NoteForm";

interface NoteModalProps {
  onClose: () => void;
}

const NoteModal = ({ onClose }: NoteModalProps) => {
  return ReactDOM.createPortal(
    <div
      className={css.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        <NoteForm onSuccess={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default NoteModal;
