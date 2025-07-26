import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home'

function App() {
  const basename = import.meta.env.DEV ? '/' : '/Axon.app/'

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* Rutas adicionales se agregarán aquí conforme desarrollemos la aplicación */}
          <Route path="services" element={<div className="container-custom py-12">Página de Servicios (en desarrollo)</div>} />
          <Route path="projects" element={<div className="container-custom py-12">Página de Proyectos (en desarrollo)</div>} />
          <Route path="about" element={<div className="container-custom py-12">Página Acerca de (en desarrollo)</div>} />
          <Route path="contact" element={<div className="container-custom py-12">Página de Contacto (en desarrollo)</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
