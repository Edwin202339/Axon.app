import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Desactivamos la regla no-explicit-any solo para esta declaración
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        THREE: typeof THREE & {
            EffectComposer: new (renderer: THREE.WebGLRenderer) => {
                addPass: (pass: any) => void;
                render: () => void;
                setSize: (width: number, height: number) => void;
            };
            RenderPass: new (scene: THREE.Scene, camera: THREE.Camera) => any;
            UnrealBloomPass: new (
                resolution: THREE.Vector2,
                strength: number,
                radius: number,
                threshold: number
            ) => {
                resolution: { set: (width: number, height: number) => void };
            };
        };
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const CosmicRiver: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        
        // Utilizamos THREE directamente de la importación
        // Pero dejamos la referencia global para las extensiones
        const globalTHREE = window.THREE;

        // Creación de la escena
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.075);
        
        // Configuración de la cámara
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3;
        
        // Renderer con antialiasing y fondo transparente
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Creamos un efecto de partículas más sutil, como en la imagen de referencia
        
        // Partículas cuadradas para el fondo (como en la imagen)
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 400;  // Menos partículas para un efecto más sutil
        const particlePositions = new Float32Array(particleCount * 3);
        
        // Distribuimos las partículas por todo el espacio, pero concentradas en el centro
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Distribución más dispersa con énfasis en el centro
            const x = (Math.random() - 0.5) * 30;
            const y = (Math.random() - 0.5) * 30;
            const z = (Math.random() - 0.5) * 30 - 15; // Más profundidad
            
            particlePositions[i3] = x;
            particlePositions[i3 + 1] = y;
            particlePositions[i3 + 2] = z;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        
        // Material con forma cuadrada y color azul claro
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.4, // Partículas más grandes para que parezcan cuadrados
            color: new THREE.Color(0x76a9ff),
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        
        // Añadimos un punto brillante central (como en la imagen de referencia)
        const centerGeometry = new THREE.BufferGeometry();
        const centerPositions = new Float32Array(3);
        
        // Posicionamos el punto central
        centerPositions[0] = 0;
        centerPositions[1] = 0;
        centerPositions[2] = -15;
        
        centerGeometry.setAttribute('position', new THREE.BufferAttribute(centerPositions, 3));
        
        const centerMaterial = new THREE.PointsMaterial({
            size: 3.5,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const centerPoint = new THREE.Points(centerGeometry, centerMaterial);
        scene.add(centerPoint);

        // Post-procesamiento para efectos visuales
        const composer = new globalTHREE.EffectComposer(renderer);
        const renderPass = new globalTHREE.RenderPass(scene, camera);
        composer.addPass(renderPass);

        // Efecto bloom para dar brillo a las partículas, más sutil
        const bloomPass = new globalTHREE.UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.5,    // intensidad más baja
            0.4,    // radio
            0.1     // umbral
        );
        composer.addPass(bloomPass);

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            
            const elapsed = clock.getElapsedTime();
            
            // Animación muy sutil de rotación
            particles.rotation.z += 0.0005;
            
            // Pulsación suave del punto central
            const pulse = Math.sin(elapsed * 0.5) * 0.2 + 0.8;
            centerMaterial.opacity = 0.8 * pulse;
            centerMaterial.size = 3.5 * pulse;
            
            // Renderizado con post-procesamiento
            composer.render();
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(width, height);
            composer.setSize(width, height);
            
            // Actualizar el efecto bloom
            bloomPass.resolution.set(width, height);
        };

        window.addEventListener('resize', handleResize);

        const currentMount = mountRef.current;

        return () => {
            window.removeEventListener('resize', handleResize);
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
            
            // Limpieza de recursos
            scene.clear();
            particleGeometry.dispose();
            particleMaterial.dispose();
            centerGeometry.dispose();
            centerMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} id="bg-canvas" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1, 
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #000000, #010105)' 
    }} />;
};

export default CosmicRiver;
