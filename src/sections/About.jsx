import { useState } from 'react';
import React from 'react'
import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const [hasCopiedWeChat, setHasCopiedWeChat] = useState(false);

    const { t } = useTranslation();
    const aboutMe = t('aboutMe', { returnObjects: true });

    const handleCopy = () => {
        navigator.clipboard.writeText('chestermongo2026@gmail.com');
        setHasCopied(true);
    
        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      };

      const handleCopyWeChat = () => {
        navigator.clipboard.writeText(' hgy635677431');
        setHasCopiedWeChat(true);
    
        setTimeout(() => {
            setHasCopiedWeChat(false);
        }, 2000);
      };

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">{aboutMe.profile_title}</p>
                        <p className="grid-subtext">{aboutMe.profile_content}</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" 
                        className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">{aboutMe.tech_title}</p>
                        <p className="grid-subtext">{aboutMe.tech_content}</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    />
                    </div>

                    <div >
                        <p className="grid-headtext">{aboutMe.remote_title}</p>
                        <p className="grid-subtext"> {aboutMe.remote_content}</p>
                        <a href="#about" className="w-fit">
                            <Button 
                                name={aboutMe.button} 
                                isBeam 
                                containerClass="w-full mt-10"
                            />
                        </a>
                    </div>

                </div>

            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                    <div>
                    <p className="grid-headtext">{aboutMe.passion_title}</p>
                    <p className="grid-subtext">{aboutMe.passion_content}</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img
                        src="assets/grid4.png"
                        alt="grid-4"
                        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                    />

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">{aboutMe.button}</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">chestermongo2026@gmail.com</p>
                        </div>
                        <div className="grid-subtext text-center flex items-center justify-center gap-2">
                            <img 
                                src="assets/wechat2.png" 
                                alt="wechat-logo" 
                                className="w-6 h-6" 
                            />
                            <span className="grid-subtex text-center">{aboutMe.wechat}</span>
                        </div>
                        <div className="copy-container" onClick={handleCopyWeChat}>
                            <img src={hasCopiedWeChat ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">hgy635677431</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About