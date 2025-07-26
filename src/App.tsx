import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CosmicRiver from './components/animations/CosmicRiver';
import Modal from './components/modals/Modal';
import WebDevModal from './components/modals/WebDevModal';
import MobileAppModal from './components/modals/MobileAppModal';
import CloudSolutionsModal from './components/modals/CloudSolutionsModal';
import PortfolioModal1 from './components/modals/PortfolioModal1';
import PortfolioModal2 from './components/modals/PortfolioModal2';
import PortfolioModal3 from './components/modals/PortfolioModal3';
import ContactForm from './components/modals/ContactForm';

type ModalType = 
    | 'web-dev-modal' 
    | 'mobile-app-modal' 
    | 'cloud-solutions-modal' 
    | 'custom-software-modal'
    | 'ai-integration-modal'
    | 'maintenance-modal'
    | 'enterprise-apps-modal'
    | 'backend-modal'
    | 'frontend-modal'
    | 'multiplatform-modal'
    | 'portfolio-modal-1' 
    | 'portfolio-modal-2' 
    | 'portfolio-modal-3'
    | 'contact-form-modal'
    | null;

function App() {
    const [modal, setModal] = useState<ModalType>(null);

    const openModal = (modalId: ModalType) => {
        setModal(modalId);
    };

    const closeModal = () => {
        setModal(null);
    };

    useEffect(() => {
        const handleModalOpen = (e: Event) => {
            const target = e.target as HTMLElement;
            const modalId = target.closest('[data-modal]')?.getAttribute('data-modal');
            if (modalId) {
                openModal(modalId as ModalType);
            }
        };

        document.addEventListener('click', handleModalOpen);
        return () => {
            document.removeEventListener('click', handleModalOpen);
        };
    }, []);

    const renderModalContent = () => {
        switch (modal) {
            case 'web-dev-modal':
                return <WebDevModal />;
            case 'mobile-app-modal':
                return <MobileAppModal />;
            case 'cloud-solutions-modal':
                return <CloudSolutionsModal />;
            case 'portfolio-modal-1':
                return <PortfolioModal1 />;
            case 'portfolio-modal-2':
                return <PortfolioModal2 />;
            case 'portfolio-modal-3':
                return <PortfolioModal3 />;
            case 'contact-form-modal':
                return <ContactForm />;
            default:
                return null;
        }
    };
    
    const getModalTitle = () => {
        switch (modal) {
            case 'web-dev-modal':
                return "Desarrollo Web";
            case 'mobile-app-modal':
                return "Aplicaciones Móviles";
            case 'cloud-solutions-modal':
                return "Soluciones en la Nube";
            case 'custom-software-modal':
                return "Software a Medida";
            case 'ai-integration-modal':
                return "Integración de IA";
            case 'maintenance-modal':
                return "Mantenimiento y Soporte";
            case 'enterprise-apps-modal':
                return "Aplicaciones para Empresas";
            case 'backend-modal':
                return "Desarrollo Backend";
            case 'frontend-modal':
                return "Desarrollo Frontend";
            case 'multiplatform-modal':
                return "Aplicaciones Multiplataforma";
            case 'portfolio-modal-1':
                return "Plataforma E-commerce";
            case 'portfolio-modal-2':
                return "App de Banca Móvil";
            case 'portfolio-modal-3':
                return "SaaS en la Nube";
            case 'contact-form-modal':
                return "Contáctanos";
            default:
                return "";
        }
    }

    return (
        <>
            <CosmicRiver />
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Technologies />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />

            {modal && (
                <Modal id={modal} title={getModalTitle()} onClose={closeModal}>
                    {renderModalContent()}
                </Modal>
            )}
        </>
    );
}

export default App;
