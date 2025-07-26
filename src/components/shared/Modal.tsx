import React from 'react';

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ id, title, children, onClose, isOpen }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} id={id}>
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
