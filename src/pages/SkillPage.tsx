import Microsoft from '../assets/Microsoft.svg?react'
import Adobe from '../assets/adobe.svg?react'
import Canva from '../assets/Canva.svg?react'
import CapCut from '../assets/CapCut.svg?react'
import Google from '../assets/Google.svg?react'
import GPT from '../assets/GPT.svg?react'
import Mailchimp from '../assets/mailchimp.svg?react'
import Meta from '../assets/Meta.svg?react'
import Notion from '../assets/Notion.svg?react'
import PhotoShop from '../assets/Photoshop.svg?react'
import AdobeIllustrator from '../assets/Adobe_Illustrator.svg?react'
import AdobeIndesign from '../assets/Adobe_InDesign.svg?react'
import Chapeau from '../assets/Chapeau.svg?react'
import Medal from '../assets/Medal.svg?react'
import Tableau from '../assets/Tableau.png'
import { config } from "../config/config";
import { FadeInSection } from "../components/FadeInSection";


export const SkillPage = () => {

    const skills = [
        Canva, Meta, Notion, Adobe, CapCut, GPT, Microsoft, Google, Mailchimp
    ]

    return (
        <div className="min-h-screen flex flex-col justify-start items-cente px-6">

            <div className='w-full h-full flex-col flex xl:flex-row justify-around items-center gap-10'>

                <FadeInSection className="w-auto h-full" delay={100} duration={1000}>

                    <div className='w-auto h-full px-3'>

                        <p className='w-full flex items-end text-6xl md:text-7xl lg:text-[6rem] leading-none' style={{ fontFamily: 'The Seasons', lineHeight:1 }}>

                            <span className='text-8xl md:text-9xl lg:text-[10rem] inline-block'
                                style={{ fontFamily: 'Hello Paris', lineHeight:1 }}>
                                S
                            </span>

                            kills &
                        </p>

                        <br />

                        <p className='h-full pl-8 text-6xl md:text-7xl lg:text-[6rem] inline-block' style={{ fontFamily: 'The Seasons' }}>
                            Certification
                        </p>

                    </div>
                </FadeInSection>

                <FadeInSection className="w-full self-end" delay={500} duration={1000}>
                    <div className="w-full h-full flex flex-col sm:flex-row justify-center items-end">
                        <p className="text-lg w-full text-center " style={{ fontFamily: 'Agrandir' }}>
                            Je me forme constamment à de nouveaux outils et techniques afin d’optimiser mes compétences et gagner en efficacité.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            <FadeInSection className="w-full mt-10" delay={900} duration={1000}>
                <div className="w-full flex flex-col lg:flex-row justify-between gap-20">

                    {/* COLONNE GAUCHE */}
                    <div className="flex flex-col w-full px-4 lg:w-1/2 space-y-8 items-center lg:items-start">

                        {/* Diplôme */}
                        <div className="w-full h-auto flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">

                            {/* Chapeau responsive */}
                            <div className="flex justify-start lg:justify-center">
                                <Chapeau className="w-20 h-auto" />
                            </div>

                            {/* Texte */}
                            <p className="w-auto text-base text-center">
                                Programme Grande École (PGE) - Master,
                                <br />
                                Spécialisation Communication & Marketing du Luxe -
                                <br />
                                ESCE International Business School
                            </p>

                        </div>

                        {/* Certifications */}
                        <div className="space-y-4 pl-2">
                            {["Graphic design masterclass (Ps, Ai, Id) by L. Marsh", "Marketing with Canva by Canva", "Linkedin marketing strategy certification by Linkedin"].map((c, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <Medal className="w-6 h-6" />
                                    <span className="text-xs md:text-lg">{c}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: config.colors.primary }} className="shadow-2xl w-auto h-1/2 p-6 rounded-3xl w-full">

                            <div className="h-1/5 w-full flex justify-center items-center gap-6">
                                <div className="h-full w-1/3 flex items-center justify-center">
                                    <Canva className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-1/3 flex items-center justify-center">
                                    <Meta className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-1/3 flex items-center justify-center">
                                    <Notion className="h-full w-full object-contain" />
                                </div>
                            </div>

                            <div className="h-1/5 w-full flex justify-center items-center gap-6">
                                <div className="h-full w-fit flex items-center justify-center">
                                    <Meta className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-fit flex items-center justify-center">
                                    <Notion className="h-full w-full object-contain" />
                                </div>
                            </div>

                            <div className="h-1/5 w-full flex justify-around items-center gap-6">
                                <div className="h-full w-fit flex items-center justify-center">
                                    <PhotoShop className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-fit flex items-center justify-center">
                                    <AdobeIllustrator className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-fit flex items-center justify-center">
                                    <AdobeIndesign className="h-full w-full object-contain" />
                                </div>
                            </div>

                            <div className="h-1/5 w-full flex justify-center items-center gap-6">
                                <div className="h-full w-1/2 flex items-center justify-center">
                                    <Microsoft className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-1/2 flex items-center justify-center">
                                    <Google className="h-full w-full object-contain" />
                                </div>
                            </div>

                            <div className="h-1/5 w-full flex justify-center items-center gap-6">
                                <div className="h-full w-fit flex items-center justify-center">
                                    <Canva className="h-full w-full object-contain" />
                                </div>
                                <div className="h-full w-fit flex items-center justify-center">
                                    <Meta className="h-full w-full object-contain" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* COLONNE DROITE */}
                    <div className="lg:w-1/2 h-auto flex justify-center items-start">
                        <img src={Tableau} className="object-contain" />
                    </div>

                </div>

            </FadeInSection>

        </div>
    );
}