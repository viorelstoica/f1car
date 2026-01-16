import { Canvas, extend } from "@react-three/fiber";
import { F1Car } from "./F1Car";
import { Environment, OrbitControls, PerspectiveCamera, Sky, ContactShadows } from "@react-three/drei";
import { useControls, Leva } from 'leva'
import { useRef, useEffect, useLayoutEffect, useMemo } from 'react'

function App() {

  const camOptions = useMemo(() => {
    return {
      x: { value: 13, min: 0, max: 50, step: 1 },
      y: { value: 6, min: 0, max: 50, step: 1 },
      z: { value: 10, min: 0, max: 50, step: 1 },
      visible: true,
      color: { value: 'lime' }
    }
  }, [])

  const avaOptions = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: 10, step: 0.1 },
      y: { value: 0, min: 0, max: 10, step: 0.1 },
      z: { value: 0, min: 0, max: 10, step: 0.1 },
      visible: true,
      color: { value: 'lime' }
    }
  }, [])

  const animOptions = useMemo(() => {
    return {
      anim: { value: 'bencao', options: ['bencao', 'armada'] }
    }
  }, [])

  

  const { cam } = useRef(null)

  const pC = useControls('Camera', camOptions)
  const pV = useControls('Viorel', avaOptions)
  const animation = useControls('animation', animOptions)

  useEffect(() => {
    console.log(cam)
    //cam.lookAt(0, 2, 0)
  }, [])

  return (
    <>
      <Leva />
      <Canvas shadows >
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Environment preset="sunset"/>
        <PerspectiveCamera makeDefault position={[pC.x, pC.y, pC.z]} />
        <OrbitControls />
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <F1Car position={[pV.x, 0.55, pV.z]}/> 
        <mesh receiveShadow scale={50} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry/>
          <meshStandardMaterial color={"white"}/>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
