import React from 'react'
import { useTranslation } from 'react-i18next'

const Experience = () => {


    const { t } = useTranslation();
    const experience = t('experience', { returnObjects: true });
    const workexperience = t('workexperience', { returnObjects: true });


  return (
    <section className="c-space my-20" id="work">
        <div className="w-full text-white-600">
            <h3 className="head-text">
                {experience.title}
            </h3>

            <div className="work-container">
                <div className="work-canvas flex justify-center items-centerss">
                <div className="relative m-5 lg:block hidden">
                    <div className="absolute inset-0 blur-box"></div>
                    <img
                    src="/assets/working.png"
                    alt="Working"
                    className="rounded-md shadow-lg"
                    />
                </div>
                </div>

                <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workexperience.map(({ id, icon, name, pos, duration, title, animation }, index) => (
                                <div key={id} className="work-content_container group"> 
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>
                                        <div className="work-content_bar"> </div>
                                    </div>
                                    <div className="sm: p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p> 
                                        <p className="text-sm mb-5">{pos} -- {duration}</p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Experience