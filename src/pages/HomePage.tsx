import portfolio from '../assets/PORT.svg'
import wave from '../assets/wave.svg'
import { config } from '../config/config';

export const HomePage = () => {

    return (

        <section className='relative flex flex-col justify-evenly min-h-screen'>

            <div className='-translate-y-20'>
                <div className='lg:ml-28 z-0 relative'>
                    <img src={portfolio} alt="Logo" className="h-65" />
                </div>

                <div className='text-2xl w-full flex items-center justify-center lg:text-5xl mt-5 relative z-0'>
                    <p>Communication & Social media</p>
                </div>
            </div>

            <div className="flex justify-center items-center relative z-10 -translate-y-40">
                <div className={`text-2xl px-10 py-3 lg:text-5xl rounded-full`}
                style={{backgroundColor: config.colors.badgeColor}}>
                    Scroll to learn more !
                </div>
            </div>

            {/* Image wave en arrière-plan */}
            <div className='lg:block absolute -bottom-2 left-0 w-full z-0'>
                <img src={wave} alt="Wave" className="w-full" />
            </div>

        </section>
    );
}