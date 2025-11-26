import Carousel from '../components/Carousel'
import { config } from '../config/config'


export const RealisationPage = () => {

    return (
        <div className="min-h-screen w-full flex flex-col gap-8 px-8 pb-8" style={{ background: config.colors.primary }}>

            <p className="self-center text-center px-8 text-6xl leading-none" style={{ fontFamily: 'The Seasons' }}>
                <span className="text-8xl" style={{ fontFamily: 'Hello Paris' }}>
                    M
                </span>
                es réalisations

                <p className="w-full text-2xl text-center">
                    Community Management
                </p>

            </p>

            <p className="text-base sm:text-[20px] text-justify w-full" style={{ fontFamily: 'Agrandir' }}>
                Dans le cadre de mes missions chez Eliophot, je développais et gérais la stratégie digitale de l’agence ainsi que de plusieurs clients. Je créais des contenus engageants, j’animais et modérais les communautés (FR/EN), tout en assurant la gestion des plannings éditoriaux. Je suivais les performances grâce à des reportings mensuels, ce qui me permettait d’optimiser continuellement les contenus.
            </p>

            <div className="w-full h-screen">

                <div className='hidden lg:flex w-full h-full'>
                    <Carousel widthPercent={35} heightPercent={90} backgroundColor='white' autoplay={true} loop={true} />
                </div>

                {/* Mobile et Tablettes */}
                <div className='md:flex lg:hidden w-full h-full'>
                    <Carousel widthPercent={100} heightPercent={90} backgroundColor='white' autoplay={true} loop={true} />
                </div>

            </div>
        </div>
    )
}