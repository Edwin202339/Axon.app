import React from 'react';

interface ModalProps {
    id: string;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, title, children, onClose }) => {
    return (
        <div id={id} className="modal-overlay active">
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
