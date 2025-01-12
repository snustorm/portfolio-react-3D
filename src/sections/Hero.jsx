import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'

const Hero = () => {


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const { t } = useTranslation();
    const heroContent = t('heroContent', { returnObjects: true });


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
                {heroContent.welcome} <span className="waving-hand">👋</span>
                
            </p>
            <p className="hero_tag text-gray_gradient">
                {heroContent.intro}
            </p>
        </div>
        <div className="mt-7 w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0.9, 0, 20]} />

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            position={isMobile? [1, -6, 2] : [0.8, -4.4, 1.5]}  
                            // rotation={[0, -Math.PI, 0]} 
                            // scale = {isMobile ? 0.07 : 0.1}
                            // position = {sizes.deskPosition}
                            rotation = {[0.13, -Math.PI, 0]}
                            scale = {sizes.deskScale}
                        />
                    </HeroCamera>

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
               

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                </Suspense>
            </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
            <a href="#about" className="w-fit">
                <Button 
                    name={heroContent.button} 
                    isBeam 
                    containerClass="sm:w-auto w-full sm:min-w-96"
                />
            </a>
    </div>
    </section>
  )
}

export default Hero