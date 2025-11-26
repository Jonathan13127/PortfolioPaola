import Hello from '../assets/Hello.svg?react'
import { FadeInSection } from '../components/FadeInSection';
import { config } from '../config/config';
import Paola from "../assets/Paola.webp"


export const AboutPage = () => {

    return (
        <div className='px-4 pb-6 lg:px-8 flex flex-col justify-center md:flex-row w-full h-screen gap-12 md:gap-0'>

            <FadeInSection className='order-2 md:order-1 w-full md:w-2/5 flex justify-center items-center' delay={500} duration={1000}>
                <div className='w-full flex justify-center px-4'>
                    <div className="relative">
                        <div className="relative">
                            <div className="bg-[#f2f2f2] p-4 sm:p-6 md:p-8 pb-12 sm:pb-16 md:pb-22 transform rotate-3 sm:rotate-5">
                                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                                    <img
                                        src={Paola}
                                        alt="Paola Malfitano"
                                        className="w-full h-full object-cover transform scale-x-[-1]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className='order-1 md:order-2 w-full md:w-2/3 h-auto flex flex-col justify-center xl:justify-start items-center '>

                <FadeInSection className='z-10 w-full h-auto' delay={100} duration={1000}>
                    <div className="w-full h-auto flex justify-center items-end gap-6">
                        <p
                            className="text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]"
                            style={{ fontFamily: "Hello Paris", lineHeight: 1 }}
                        >
                            H
                            <span
                                className="text-7xl lg:text-[6rem] xl:text-[10rem]"
                                style={{ fontFamily: "The Seasons", lineHeight: 1 }}
                            >
                                ello!
                            </span>
                        </p>

                        <p
                            className="text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] "
                            style={{ fontFamily: "The Seasons", lineHeight: 1 }}
                        >
                            I
                            <span>
                                'm
                            </span>
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection delay={100} duration={1000}>
                    <div className='text-xl sm:text-3xl w-auto px-10 py-3 rounded-full rotate-4 md:text-5xl'
                        style={{
                            backgroundColor: config.colors.badgeColor,
                            fontFamily: 'The Seasons'
                        }}>
                        Paola Malfitano
                    </div>
                </FadeInSection>

                <FadeInSection className='mt-10 sm:mt-12 w-full' delay={1000} duration={1000}>
                    <div className="w-full space-y-8 text-lg xl:text-3xl text-gray-800 leading-relaxed">
                        <p className="text-justify" style={{ fontFamily: 'Agrandir' }}>
                            Jeune diplômée d'un Master en communication, je cherche à rejoindre
                            une équipe où <strong>créativité</strong> rime avec{' '}
                            <strong>performance</strong>. Actuellement community
                            manager en alternance en agence, j'interviens sur la{' '}
                            <strong>stratégie de communication</strong>,{' '}
                            <strong>les leviers digitaux</strong>,{' '}
                            <strong>la création de contenu</strong> et{' '}
                            <strong>l'animation de communautés</strong>.
                        </p>

                        <p className="text-justify">
                            Curieuse et passionnée, j'imagine, je crée, j'analyse et j'optimise.
                            <br />Mon objectif : un{' '}
                            <strong>poste en communication ou événementiel</strong>{' '}
                            dans lequel mes idées se concrétisent et génèrent des résultats concrets.
                        </p>
                    </div>
                </FadeInSection>

            </div>
        </div>
    );
}