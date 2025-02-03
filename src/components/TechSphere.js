// TechSphere.js
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Sphere() {
  const meshRef = useRef();
  const { nodes } = useGLTF('../../public/planet/scene.gltf'); // Modèle 3D ou une sphère basique

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={0.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#00ff88" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function TechSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default TechSphere;