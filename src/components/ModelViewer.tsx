import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  OrbitControls,
  Stage,
  AsciiRenderer,
} from "@react-three/drei";

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} rotation={[0, Math.PI / -2, 0]} />
    </Center>
  );
}

export default function AsciiModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="model-container">
      <Canvas camera={{ position: [-1, 0.5, 3], fov: 20 }}>
        <color attach="background" args={["transparent"]} />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={6} adjustCamera={false}>
            <Model url={modelUrl} />
          </Stage>
        </Suspense>

        <AsciiRenderer
          fgColor="#8a393e"
          bgColor="#dfceaf"
          characters="   .:-+*=%@#/;"
          invert={false}
          resolution={0.35}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping={false}
          autoRotate
          autoRotateSpeed={8}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/martin_3d_model.glb");
