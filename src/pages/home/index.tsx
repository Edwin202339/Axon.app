import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="bg-light dark:bg-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-custom py-20 md:py-28">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white mb-6">
              Soluciones tecnológicas para impulsar tu negocio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              En Axon.app desarrollamos aplicaciones, páginas web y automatizamos procesos para mejorar la eficiencia de tu empresa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn btn-primary">
                Contáctanos
              </a>
              <a href="/services" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                Nuestros servicios
              </a>
            </div>
          </motion.div>
        </div>
        {/* Decorative blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer en el mundo digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Desarrollo de Aplicaciones</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creamos aplicaciones web y móviles a medida, adaptadas a las necesidades específicas de tu negocio.
              </p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Diseño de Páginas Web</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Diseñamos sitios web atractivos, responsivos y optimizados para SEO que representan la imagen de tu marca.
              </p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Automatización de Procesos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimizamos tus procesos empresariales mediante soluciones de automatización que aumentan la eficiencia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-white/90">
            Solicitar una consulta gratuita
          </a>
        </div>
      </section>
    </div>
  );
}
