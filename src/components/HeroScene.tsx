import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Sphere, Environment, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
    meshRef.current.position.y = Math.sin(time / 1.5) / 3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#6366F1"
        attach="material"
        distort={0.5}
        speed={4}
        roughness={0}
        metalness={0.9}
      />
    </Sphere>
  );
}

export default function HeroScene() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedSphere />
      <Environment preset="city" />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}