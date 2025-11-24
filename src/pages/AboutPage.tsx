import Hello from '../assets/Hello.svg'
export const AboutPage = () => {

    return (

        <div className='lg:px-8 flex justify-around items-center'>

            <div className='w-1/2'>
                <div className="relative flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5e6d3] rounded-full -z-10"></div>
                    <div className="relative">
                        <div className="bg-[#f2f2f2] p-8 pb-22 rounded-lg transform rotate-5">
                            <div className="w-80 h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
                                    alt="Paola Malfitano"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-1/2 flex flex-1 flex-col space-y-10'>

                <div className='flex justify-center'>
                    <img src={Hello} alt="Logo" className="h-65" />
                </div>

                <div className="space-y-8 px-8 text-3xl text-gray-800 leading-relaxed">
                    <p className="text-justify">
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
                        <br/>Mon objectif : un{' '}
                        <strong>poste en communication ou événementiel</strong>{' '}
                        dans lequel mes idées se concrétisent et génèrent des résultats concrets.
                    </p>
                </div>
            </div>
        </div>
    );
}