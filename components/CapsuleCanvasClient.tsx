"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CapsuleModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/puuhaus-esimerkki.jpg");

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
  }, [texture]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    const targetRoll = progress * Math.PI * 4.25;
    const targetY = -0.22 + Math.sin(progress * Math.PI * 2) * 0.18;
    const targetX = Math.sin(progress * Math.PI * 1.2) * 0.28;
    const targetZ = Math.sin(progress * Math.PI * 2) * 0.05;

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRoll, 0.07);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.07);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, targetZ, 0.07);
    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.06);
  });

  const glassMaterial = (
    <meshPhysicalMaterial
      color="#f28a12"
      metalness={0.05}
      roughness={0.035}
      transparent
      opacity={0.28}
      transmission={0.42}
      thickness={0.6}
      clearcoat={1}
      clearcoatRoughness={0.04}
      depthWrite={false}
    />
  );

  const darkGlassMaterial = (
    <meshPhysicalMaterial
      color="#050505"
      metalness={0.12}
      roughness={0.08}
      transparent
      opacity={0.5}
      transmission={0.18}
      thickness={0.45}
      clearcoat={1}
      clearcoatRoughness={0.05}
      depthWrite={false}
    />
  );

  return (
    <group position={[0, -0.05, 0]}>
      <mesh receiveShadow position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.55, 96]} />
        <shadowMaterial transparent opacity={0.28} />
      </mesh>

      <mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.018, 12, 180]} />
        <meshBasicMaterial color="#f28a12" transparent opacity={0.58} />
      </mesh>

      <mesh position={[0, -0.91, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.011, 12, 180]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.14} />
      </mesh>

      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.78, 0.78, 3.55, 96, 1, false]} />
          {glassMaterial}
        </mesh>

        <mesh castShadow position={[-1.78, 0, 0]}>
          <sphereGeometry args={[0.78, 96, 48]} />
          {glassMaterial}
        </mesh>

        <mesh castShadow position={[1.78, 0, 0]}>
          <sphereGeometry args={[0.78, 96, 48]} />
          {darkGlassMaterial}
        </mesh>

        <mesh position={[1.78, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.62, 0.035, 18, 96]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.85} />
        </mesh>

        <mesh position={[-1.78, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.62, 0.018, 18, 96]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.42} />
        </mesh>

        <mesh position={[0, 0.01, 0.79]}>
          <boxGeometry args={[2.68, 1.18, 0.035]} />
          <meshPhysicalMaterial color="#050505" roughness={0.16} metalness={0.35} clearcoat={0.8} />
        </mesh>

        <mesh position={[0, 0.01, 0.82]}>
          <planeGeometry args={[2.52, 1.05]} />
          <meshBasicMaterial map={texture} toneMapped={false} transparent opacity={0.94} />
        </mesh>

        <mesh position={[0, -0.56, 0.84]}>
          <planeGeometry args={[2.72, 0.12]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.22} />
        </mesh>
      </group>
    </group>
  );
}

export default function CapsuleCanvasClient({ progress }: { progress: number }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.32, 5.2], fov: 35 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[-4, 4, 4]} intensity={2.8} color="#ff9b28" castShadow />
      <directionalLight position={[4, 2.5, 5]} intensity={1.8} color="#ffffff" />
      <pointLight position={[2.4, 0.4, 1.4]} intensity={3.2} color="#f28a12" />
      <pointLight position={[-2.4, -0.4, 1.2]} intensity={1.6} color="#f28a12" />
      <CapsuleModel progress={progress} />
    </Canvas>
  );
}
