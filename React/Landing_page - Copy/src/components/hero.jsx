import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment , OrbitControls } from "@react-three/drei"
import Scene from '../../public/Scene'

function Hero()
{
    return(
        <div className="hero">

            <div className="hero__container">
            <h1>YOUR FEET <br></br>DESERVE <br></br> THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btndiv">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Category</button>
            </div>
            
            <p>Also Available On</p>

            </div>
            {/* <img className="shoes" src="../public/shoes2.png" alt="" /> */}
            <Canvas>
              <ambientLight intensity={2}/>
              <OrbitControls enableZoom={true}/>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
              <Environment preset='forest' />
              <ContactShadows position={[0,-2,0]} opacity={0.5} scale={60} color={'#000000'}/>
            </Canvas>

        </div>
    )
}

export default Hero