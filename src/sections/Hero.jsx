import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'

const Hero = () => {


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full border-2 border-orange-400 flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
                Hi, I am Chester <span className="waving-hand">👋</span>
                
            </p>
            <p className="hero_tag text-gray_gradient">
                Building Web3 Infra / Dapps
            </p>
        </div>
        <div className="mt-7 w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                    <HackerRoom 
                        // position={isMobile? [1, -6, 2] : [2, -8, 2]}  
                        // rotation={[0, -Math.PI, 0]} 
                        // scale = {isMobile ? 0.07 : 0.1}
                        position = {sizes.deskPosition}
                        rotation = {[0, -Math.PI, 0]}
                        scale = {sizes.deskScale}
                    />

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition} />
                    </group>
               

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero