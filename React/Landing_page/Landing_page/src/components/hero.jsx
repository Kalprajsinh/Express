import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Plant from '../../public/Shoes';
import Earth from "../../public/Earth";

function Hero() {
    // Radius of the Earth model
    const earthRadius = 1; // Adjust this to match the scale of your Earth model

    // Function to convert spherical coordinates to Cartesian coordinates
    const convertToCartesian = (radius, theta, phi) => {
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        return [x, y, z];
    };

    // Position of the plant on the Earth's surface
    const plantPosition = useMemo(() => {
        const theta = Math.PI / 4; // Angle around the Y-axis
        const phi = Math.PI / 4; // Angle from the Z-axis
        return convertToCartesian(earthRadius + 0.1, theta, phi); // Slightly above the Earth's surface
    }, []);

    return (
        <div className="hero">
            <Canvas>
                <ambientLight intensity={2} />
                <OrbitControls enableZoom={true} />
                <Suspense fallback={null}>
                    <Earth />
                    <mesh position={plantPosition}>
                        <Plant />
                    </mesh>
                </Suspense>
                <Environment preset="forest" />
                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={50} color={'#000000'} />
            </Canvas>
        </div>
    );
}

export default Hero;


// import { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
// import Earth from "../../public/Earth";

// function InfoPanel({ planet, onClose }) {
//     if (!planet) return null;

//     return (
//         <div className="info-panel">
//             <div className="info-panel-content">
//                 <span className="close" onClick={onClose}>&times;</span>
//                 <h2>{planet.name}</h2>
//                 <p>{planet.info}</p>
//             </div>
//         </div>
//     );
// }

// function SearchBar({ onSearch }) {
//     const [query, setQuery] = useState('');

//     const handleSearch = () => {
//         onSearch(query);
//         setQuery(''); 
//     };

//     return (
//         <div className="search-bar">
//             <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search for a planet..."
//             />
//             <button onClick={handleSearch}>Search</button>
//         </div>
//     );
// }

// function Hero() {
//     const [selectedPlanet, setSelectedPlanet] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');

//     const planets = [
//         { name: "Earth", info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.", position: [0, 0, 0] },
//         { name: "Mars", info: "Mars is the fourth planet from the Sun and is known as the Red Planet.", position: [2, 0, 0] },
//         { name: "Venus", info: "Venus is the second planet from the Sun and is similar in structure to Earth.", position: [-2, 0, 0] },
//         // Add more planets as needed
//     ];

//     const handleClick = (planet) => {
//         setSelectedPlanet(planet);
//     };

//     const closePopup = () => {
//         setSelectedPlanet(null);
//     };

//     const handleSearch = (query) => {
//         const foundPlanet = planets.find(planet => planet.name.toLowerCase() === query.toLowerCase());
//         if (foundPlanet) {
//             setSelectedPlanet(foundPlanet);
//             // Logic to animate the globe to the found planet's position can be added here
//         } else {
//             alert("Planet not found!");
//         }
//     };

//     // Filter out the unselected planet from the list
//     const filteredPlanets = selectedPlanet ? planets.filter(planet => planet.name == selectedPlanet.name) : planets;

//     return (
//         <div className="hero">
//             <SearchBar onSearch={handleSearch} />
//             <Canvas>
//                 <ambientLight intensity={2} />
//                 <OrbitControls enableZoom={true}/>
//                 <Suspense fallback={null}>
//                     {filteredPlanets.map((planet, index) => (
//                         <Earth key={index} position={planet.position} onClick={() => handleClick(planet)} scale={3}/>
//                     ))}
//                 </Suspense>
//                 <Environment preset="forest" />
//                 <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={50} color={'#000000'} />
//             </Canvas>

//             <InfoPanel planet={selectedPlanet} onClose={closePopup} />
//         </div>
//     );
// }
 
// export default Hero;

