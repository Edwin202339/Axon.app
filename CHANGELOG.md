# Axon.app - Registro de Cambios y Estructura del Proyecto

Este documento sirve como una guía para mantener un registro de todos los cambios y la estructura actual del proyecto Axon.app.

## Tecnologías Utilizadas
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Heroicons
- Framer Motion

## Estructura de Carpetas
```
Axon.app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── axon-logo.svg          # Logo de la empresa
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Componente de pie de página
│   │   │   └── Navbar.tsx         # Componente de navegación
│   │   └── ui/                    # Componentes de interfaz de usuario
│   ├── hooks/                     # Custom hooks
│   ├── layouts/                   # Layouts principales
│   ├── pages/                     # Páginas de la aplicación
│   ├── types/                     # Definiciones de tipos TypeScript
│   └── utils/                     # Funciones de utilidad
│   ├── App.tsx                    # Componente principal de la aplicación
│   ├── main.tsx                   # Punto de entrada de la aplicación
│   └── index.css                  # Estilos globales con Tailwind
├── .gitignore                     # Archivos ignorados por git
├── index.html                     # Archivo HTML principal
├── package.json                   # Dependencias y scripts
├── postcss.config.js              # Configuración de PostCSS
├── README.md                      # Documentación del proyecto
├── tailwind.config.js             # Configuración de Tailwind CSS
├── tsconfig.json                  # Configuración de TypeScript
└── vite.config.js                 # Configuración de Vite
```

## Registro de Cambios

### 26/07/2025 - Configuración Inicial

1. **Configuración del Repositorio Git**
   - Inicializado repositorio Git
   - Creado .gitignore básico
   - Creado README.md con información del proyecto
   - Configurado el repositorio remoto en GitHub

2. **Configuración del Proyecto React con TypeScript**
   - Creado proyecto con Vite usando el template react-ts
   - Instaladas dependencias base

3. **Configuración de Tailwind CSS**
   - Instalado Tailwind CSS y sus dependencias
   - Configurado tailwind.config.js y postcss.config.js
   - Actualizado index.css con directivas de Tailwind

4. **Dependencias Adicionales**
   - Instalado React Router DOM para la navegación
   - Instalado Heroicons para iconos
   - Instalado Framer Motion para animaciones
   - Instalado gh-pages para despliegue en GitHub Pages

5. **Estructura de Carpetas**
   - Creada estructura base de carpetas
   - Organización por características y componentes

6. **Componentes Básicos**
   - Creado Navbar.tsx para la navegación
   - Creado Footer.tsx para el pie de página
   - Creado logo en SVG

## Por Desarrollar
- Componentes de páginas principales (Home, Services, Projects, About, Contact)
- Configuración de rutas con React Router
- Implementación de temas claro/oscuro
- Configuración para despliegue en GitHub Pages
- Optimización de imágenes y recursos
- Integración de formularios de contacto
