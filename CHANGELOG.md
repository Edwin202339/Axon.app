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

## 26/07/2025 - Configuración de Enrutamiento y GitHub Pages

1. **Configuración para GitHub Pages**
   - Añadido script de despliegue en package.json
   - Configurado base URL en vite.config.ts
   - Adaptado Router para trabajar con GitHub Pages

2. **Configuración de Enrutamiento**
   - Implementado React Router DOM
   - Creado MainLayout para estructura común de páginas
   - Configuradas rutas básicas en App.tsx

3. **Creación de Página Principal**
   - Desarrollada página de inicio con secciones Hero, Servicios y CTA
   - Añadidas animaciones con Framer Motion

## Por Desarrollar
- Páginas adicionales (Services, Projects, About, Contact)
- Implementación de temas claro/oscuro
- Optimización de imágenes y recursos
- Integración de formularios de contacto
