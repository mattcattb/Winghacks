import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../pages/Loader';

const Embre = () => {
    const embre = useGLTF("/models/embrehome.glb"); // ✅ Fixed model path

    return (
        <group>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <primitive object={embre.scene} scale={2} />
        </group>
    );
};

const EmbreCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []); // ✅ Fixed infinite loop

    return (
        <Canvas
            style={{width:"100vw", height:"100vh"}}
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [5,10,25], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* eslint-disable-next-line react/no-unknown-property */}
            <hemisphereLight intensity={3} groundColor={"black"} />
            {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight intensity={1} position={[10, 10, 10]} />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Embre isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default EmbreCanvas;
