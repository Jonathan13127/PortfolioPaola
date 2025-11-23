import { GraduationCap } from "lucide-react";
import SkillCertifications from "../assets/SkillCertifications.svg"
import Microsoft from '../assets/Microsoft.svg'
import Adobe from '../assets/adobe.svg'
import Canva from '../assets/Canva.svg'
import CapCut from '../assets/CapCut.svg'
import Google from '../assets/Google.svg'
import GPT from '../assets/GPT.svg'
import Mailchimp from '../assets/mailchimp.svg'
import Meta from '../assets/Meta.svg'
import Notion from '../assets/Notion.svg'


export const SkillPage = () => {

    const skills = [
        Canva, Meta, Notion, Adobe, CapCut, GPT, Microsoft, Google, Mailchimp
    ]

    return (
        <section className="pt-30 min-h-screen flex flex-col justify-center items-center lg:px-28">

            <div className='w-full flex gap-150'>
                <img src={SkillCertifications} alt="Logo" className="w-3xl" />
                <div className="flex flex-col justify-end">
                    <p className="text-justify text-2xl w-lg  max-w-xl">
                        Je me forme constamment à de nouveaux outils et techniques afin d’optimiser mes compétences et gagner en efficacité.
                    </p>
                </div>
            </div>


            <div className="w-full pb-12 flex justify-between gap-20">

                {/* COLONNE GAUCHE */}
                <div className="flex flex-col space-y-8 w-1/2 px-28">

                    {/* Diplôme */}
                    <div className="m-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center justify-start">
                        <GraduationCap
                            size={80}
                            className="sm:size-[120px] md:size-[150px]"
                            strokeWidth={1}
                        />

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-snug">
                            Programme Grande École (PGE) - Master,
                            Spécialisation Communication & Marketing du Luxe -
                            ESCE International Business School
                        </p>
                    </div>


                    {/* Certifications */}
                    <div className="space-y-4 pl-2">
                        {["Linkedin marketing strategy certification by Linkedin", "Certification 2"].map((c, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <img src="/icons/medal.svg" className="w-6 h-6" />
                                <span className="text-lg">{c}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                        {skills.map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-4xl flex items-center justify-center p-6 sm:p-8 h-24 sm:h-28 lg:h-32 w-full"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="min-w-[200px] min-h-[50px] max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* COLONNE DROITE — PREND TOUT L’ESPACE */}
                <div className="flex-1">

                </div>
            </div>
        </section>
    );
}