import { createPortal } from "react-dom";

import "@styles/components/Modal.scss";

export default ({ children, closeModal }) => {
  return createPortal(
    <div onClick={closeModal} className="modal">
      {children}
    </div>,
    document.body
  );
};
