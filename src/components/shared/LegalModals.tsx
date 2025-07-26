import React from 'react';
import Modal from './Modal';

const LegalModals: React.FC = () => {
  return (
    <>
      <Modal id="modal-privacy-policy-overlay" title="Política de Privacidad">
        <h4>Introducción</h4>
        <p>En Axon.app, nos comprometemos a proteger su privacidad...</p>
        {/* ...contenido de política de privacidad... */}
      </Modal>

      <Modal id="modal-terms-conditions-overlay" title="Términos y Condiciones">
        <h4>Aceptación de los Términos</h4>
        <p>Al acceder y utilizar los servicios de Axon.app...</p>
        {/* ...contenido de términos y condiciones... */}
      </Modal>

      <Modal id="modal-cookies-policy-overlay" title="Política de Cookies">
        <h4>¿Qué son las Cookies?</h4>
        <p>Las cookies son pequeños archivos de texto...</p>
        {/* ...contenido de política de cookies... */}
      </Modal>
    </>
  );
};

export default LegalModals;
