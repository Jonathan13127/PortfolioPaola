import Portfolio from '../assets/PORT.svg?react'
import Wave from '../assets/wave.svg?react'
import { config } from '../config/config';

export const HomePage = () => {

    return (
        <div className='flex flex-col justify-center items-center h-full bg-red-500'>
            
            {/* Contenu principal centré */}
            <div className='h-full flex flex-col items-center z-10'>
                <div className='lg:ml-28'>
                    <Portfolio className="w-full h-100" />
                </div>

                <div className='text-2xl lg:text-5xl text-center px-4'>
                    <p>Communication & Social media</p>
                </div>

                <div className={`text-2xl px-10 py-3 lg:text-5xl rounded-full`}
                     style={{backgroundColor: config.colors.badgeColor}}>
                    Scroll to learn more !
                </div>


            {/* Wave collée tout en bas */}
            <div className='flex justify-end'>
                <Wave style={{color:config.colors.primary}} />
            </div>

            </div>

        </div>
    );
}