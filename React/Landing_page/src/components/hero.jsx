import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment , OrbitControls } from "@react-three/drei"
import Shoes from '../../public/Shoes'

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
            <div style={{ display:"flex"}}>
                <img style={{ width: 30 , marginRight:20}} src="../public/flipcart.png" alt="" />
                <img style={{ width: 30 }} src="../public/amazon.png" alt="" />
            </div>
            </div>
            {/* <img className="shoes" src="../public/shoes2.png" alt="" /> */}
            <Canvas>
              <ambientLight intensity={2}/>
              <OrbitControls enableZoom = {false}/>
              <Suspense fallback={null}>
                <Shoes/>
              </Suspense>
              <Environment preset='city' />
              <ContactShadows position={[0,-2,0]} opacity={0.5} scale={50} color={'#000000'}/>
            </Canvas>

        </div>
    )
}

export default Hero