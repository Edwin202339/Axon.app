import { useState, useEffect } from 'react';

export const useModal = (modalId: string) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleModalOpen = (e: CustomEvent) => {
      if (e.detail === modalId) {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('openModal', handleModalOpen as EventListener);
    return () => {
      window.removeEventListener('openModal', handleModalOpen as EventListener);
    };
  }, [modalId]);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return { isOpen, closeModal };
};
