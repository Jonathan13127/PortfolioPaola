import Wave from '../assets/wave.svg?react'
import { config } from '../config/config';

export const HomePage = () => {

    return (

        <div className='relative flex flex-col justify-center items-center h-screen overflow-hidden'>

            {/* Contenu principal centré */}
            <div className='flex flex-col items-center justify-center lg:justify-start gap-30 px-4 z-10 w-full h-full'>

                <div className='w-full flex flex-col text-center'>
                    <p
                        className='w-full self-start px-4 sm:px-6 md:mt-12 md:px-12 text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none'
                        style={{ fontFamily: 'The Seasons' }}
                    >
                        <span
                            className='text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] inline-block'
                            style={{ fontFamily: 'Hello Paris' }}
                        >
                            P
                        </span>

                        ORTFOLIO

                        <p className='w-full text-center text-lg sm:text-xl md:text-3xl pt-2 md:pt-4' style={{fontFamily: 'Agrandir'}}>
                            Communication & Social media
                        </p>

                    </p>

                </div>

                <div className='text-xl px-10 py-3 lg:text-4xl rounded-full'
                    style={{ backgroundColor: config.colors.badgeColor, fontFamily: 'Agrandir' }}>
                    Scroll to learn more !
                </div>
            </div>

            {/* Wave en arrière-plan */}
            <div className='absolute -bottom-1 left-0 right-0 w-full h-[35%] lg:h-[40%]'>
                <Wave
                    className='w-full h-full'
                    style={{ color: config.colors.primary }}
                />
            </div>
        </div>
    );
}