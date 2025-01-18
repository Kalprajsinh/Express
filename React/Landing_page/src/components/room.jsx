import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, PointerLockControls } from '@react-three/drei';
import { Suspense } from "react";
import Plant from '../../public/Plant';
import Plant2 from '../../public/Plant';
import Sphere from '../../public/Sphere';

const RoomSimulation = () => {
    const mountRef = useRef(null);

    const [popup, setPopup] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [plantModel, setPlantModel] = useState(null);

    const earthRadius = 0.85;

    const convertToCartesian = (radius, theta, phi) => {
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        return [x, y, z];
    };

    const plantPosition = useMemo(() => convertToCartesian(earthRadius + 0.1, Math.PI / 1, Math.PI / 1), []);
    const plantPosition2 = useMemo(() => convertToCartesian(earthRadius + 0.1, Math.PI / 6, Math.PI / 2), []);
    const plantPosition3 = useMemo(() => convertToCartesian(earthRadius + 0.1, Math.PI / 2, Math.PI / 2), []);
    const plantPosition4 = useMemo(() => convertToCartesian(earthRadius + 0.1, Math.PI / 4, Math.PI / 8), []);

    const plantTexts = {
        "Rose": "Roses are known for their fragrant flowers and come in various colors. They are often associated with love and beauty.",
        "Sunflower": "Sunflowers are known for their large, yellow flowers that turn to face the sun. They are symbolic of warmth and positivity.",
        "Aloe vera": "Aloe vera is known for its medicinal properties, especially in treating skin conditions. It is a succulent plant with thick, fleshy leaves.",
        "Neem Tree": "Neem trees are known for their medicinal properties and are used in traditional medicine. They have a variety of uses in agriculture and skincare."
    };

    const handleClick = (plantType, model) => {
        setTitle(plantType);
        setText(plantTexts[plantType] || "Information not available.");
        setPlantModel(model);
        setPopup(true);
    };

    useEffect(() => {
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 1.6, 10); // Position the camera farther from the origin

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Room creation (large cube)
        const roomGeometry = new THREE.BoxGeometry(20, 10, 20); // Increased size of the room
        const roomMaterial = new THREE.MeshStandardMaterial({
            color: 0x00FF00,  // Green color for the walls
            side: THREE.BackSide
        });
        const room = new THREE.Mesh(roomGeometry, roomMaterial);
        scene.add(room);

        // Lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(2, 5, 2);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Handle cleanup on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={mountRef}>
            <Canvas>
                <ambientLight intensity={2} />
                <OrbitControls enableZoom={true} />
                <PointerLockControls /> {/* Enable user movement */}
                <Suspense fallback={null}>
                    <Sphere />
                    <mesh
                        position={plantPosition}
                        rotation={[Math.PI / -2, 0, 0]}
                        scale={[0.05, 0.05, 0.05]}
                        onClick={() => handleClick("Rose", <Plant />)}
                    >
                        <Plant />
                    </mesh>
                    <mesh
                        position={plantPosition2}
                        rotation={[Math.PI / 2, Math.PI / 4, Math.PI / -2]}
                        scale={[0.05, 0.05, 0.05]}
                        onClick={() => handleClick("Sunflower", <Plant2 />)}
                    >
                        <Plant2 />
                    </mesh>
                    <mesh
                        position={plantPosition3}
                        rotation={[Math.PI / 3, Math.PI / 2, Math.PI / -2]}
                        scale={[0.05, 0.05, 0.05]}
                        onClick={() => handleClick("Aloe vera", <Plant2 />)}
                    >
                        <Plant2 />
                    </mesh>
                    <mesh
                        position={plantPosition4}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.05, 0.05, 0.05]}
                        onClick={() => handleClick("Neem Tree", <Plant2 />)}
                    >
                        <Plant2 />
                    </mesh>
                </Suspense>
                <Environment preset="forest" />
                <PointerLockControls />
                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={50} color={'#000000'} />
            </Canvas>

            {popup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-model">
                            <Canvas>
                                <ambientLight intensity={2} />
                                <OrbitControls enableZoom={true} />
                                <Suspense fallback={null}>
                                    <mesh
                                        scale={[0.5, 0.5, 0.5]}
                                        onClick={() => handleClick("Aloe vera", <Plant2 />)}
                                    >
                                        <Plant />
                                    </mesh>
                                </Suspense>
                                <Environment preset="forest" />
                                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={50} color={'#000000'} />
                            </Canvas>
                        </div>
                        <div className="popup-info">
                            <h2 className="popup-title">{title}</h2>
                            <p className="popup-text">{text}</p>
                            <button
                                className="popup-close"
                                onClick={() => setPopup(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomSimulation;
