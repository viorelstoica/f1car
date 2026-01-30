import { Canvas, extend } from "@react-three/fiber";
import { F1Car } from "./F1Car";
import { Environment, OrbitControls, PerspectiveCamera, Sky, ContactShadows } from "@react-three/drei";
import { useControls, Leva } from 'leva'
import { useRef, useEffect, useLayoutEffect, useMemo } from 'react'

function App() {

  return (
    <>
      <Canvas shadows >
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Environment preset="sunset"/>
        <PerspectiveCamera makeDefault position={[1, 1, 10]} />
        <OrbitControls />
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <F1Car position={[0, 0.55, 0]}/> 
        <mesh receiveShadow scale={50} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry/>
          <meshStandardMaterial color={"white"}/>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
