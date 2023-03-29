import React from 'react';
import { useModal } from '../../context/Modal';
import ContactForm from './ContactModal';
import contact from '../graphics/contact.png';

export default function ContactModal({ onModalClose }) {
  const { setModalContent } = useModal();

  const handleClose = () => {
    setModalContent(null);
    if (typeof onModalClose === 'function') onModalClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Contact Me</h2>
        <ContactForm onFormSubmit={handleClose} />
      </div>
    </div>
  );
}

// function ContactButton() {
//   const { setModalContent, setOnModalClose } = useModal();

//   const openModal = () => {
//     setOnModalClose(null);
//     setModalContent(<ContactModal />);
//   };

//   return (
//     <button className="open-modal-button" onClick={openModal}>
//       Contact Me
//     </button>
//   );
// }

// export default ContactButton;
