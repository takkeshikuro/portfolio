import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useScroll, useTransform, useTime } from "framer-motion";
import { degreesToRadians} from "popmotion";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(10000), { radius: 2.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Scene = () => {
  const { scrollYProgress } = useScroll();
  const time = useTime();
  const { camera } = useThree();

  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0, degreesToRadians(180)]
  );

  const distance = useTransform(scrollYProgress, [0, 1], [2, 5]);

  useFrame(() => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });

  return <Stars />;
};

const StarsCanvas = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1 
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;