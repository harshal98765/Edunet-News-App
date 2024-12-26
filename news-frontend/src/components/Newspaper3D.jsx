import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Newspaper3D() {
  const groupRef = useRef();

  // Rotation Animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1; // Rotating around Y-axis
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={groupRef}>
        <mesh>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Headlines rotating around */}
        <mesh position={[2, 0, 0]}>
          <planeGeometry args={[1.8, 0.5]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        <mesh position={[-2, 0, 0]}>
          <planeGeometry args={[1.8, 0.5]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      </group>
      <OrbitControls />
    </Canvas>
  );
}

export default Newspaper3D;
