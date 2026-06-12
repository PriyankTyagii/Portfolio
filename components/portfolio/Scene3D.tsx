"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

/* ---------------- Starfield ---------------- */
function Starfield({ count = 2000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [new THREE.Color("#a78bfa"), new THREE.Color("#22d3ee"), new THREE.Color("#e879f9"), new THREE.Color("#ffffff")]
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 18
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.015
    ref.current.rotation.x += delta * 0.004
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  )
}

/* ---------------- Morphing core ---------------- */
function Core() {
  const group = useRef<THREE.Group>(null!)
  const wire = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.12
    group.current.rotation.z = Math.sin(t * 0.2) * 0.08
    wire.current.rotation.y = -t * 0.18
    wire.current.rotation.x = t * 0.07
    const pulse = 1 + Math.sin(t * 1.2) * 0.025
    group.current.scale.setScalar(pulse)
  })

  return (
    <group ref={group} position={[2.4, 0.2, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.35, 24]} />
        <MeshDistortMaterial
          color="#6d28d9"
          emissive="#4c1d95"
          emissiveIntensity={0.55}
          roughness={0.15}
          metalness={0.85}
          distort={0.42}
          speed={2}
        />
      </mesh>
      <mesh ref={wire} scale={1.55}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  )
}

/* ---------------- Floating debris ---------------- */
function Debris() {
  const shapes = useMemo(
    () => [
      { geo: "torus", pos: [-3.6, 1.6, -2], color: "#22d3ee", scale: 0.5 },
      { geo: "octa", pos: [-2.6, -1.8, -1], color: "#e879f9", scale: 0.35 },
      { geo: "torus", pos: [4.6, -1.6, -3], color: "#a78bfa", scale: 0.4 },
      { geo: "octa", pos: [0.6, 2.4, -4], color: "#22d3ee", scale: 0.45 },
      { geo: "box", pos: [-4.8, -0.2, -3.5], color: "#a78bfa", scale: 0.3 },
    ] as const,
    []
  )
  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.4 + i * 0.3} rotationIntensity={1.4} floatIntensity={1.6}>
          <mesh position={s.pos as unknown as THREE.Vector3} scale={s.scale}>
            {s.geo === "torus" ? (
              <torusGeometry args={[1, 0.32, 16, 48]} />
            ) : s.geo === "octa" ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <boxGeometry args={[1.2, 1.2, 1.2]} />
            )}
            <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.35} roughness={0.25} metalness={0.7} wireframe={s.geo === "octa"} />
          </mesh>
        </Float>
      ))}
    </>
  )
}

/* ---------------- Camera rig: mouse parallax + scroll ---------------- */
function Rig() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 7))
  useFrame((state) => {
    const scroll = typeof window !== "undefined" ? window.scrollY / window.innerHeight : 0
    target.current.set(state.pointer.x * 0.6, state.pointer.y * 0.4 + scroll * -1.2, 7 + scroll * 1.5)
    camera.position.lerp(target.current, 0.04)
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene3D() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 6]} intensity={60} color="#a78bfa" />
      <pointLight position={[-6, -3, 4]} intensity={40} color="#22d3ee" />
      <Starfield />
      <Core />
      <Debris />
      <Rig />
      <fog attach="fog" args={["#050208", 12, 30]} />
    </Canvas>
  )
}
