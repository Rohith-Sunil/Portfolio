import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useState } from "react"; // Added useState
import Loader from "../components/Loader";
import Rohith from "../components/Rohith";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [animationName, setAnimationName] = useState("walk");

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />{" "}
          {/* Fixed typo */}
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          <Suspense fallback={<Loader />}>
            <Rohith
              position={isMobile ? [0, -1.5, 0] : [0.5, -0.1, 0.0]}
              scale={isMobile ? 0.00055 : 0.0007}
              animationName={animationName}
            />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
