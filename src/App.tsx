import './App.css'
import NavBarComponent from './components/NavBarComponent/NavbarComponent'
import LogoLoop from './components/LogoLoop'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { config } from './config/config'
import { SkillPage } from './pages/SkillPage'

function App() {

  const topics = [
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 rotate-2 font-semibold'>COMMUNITY MANAGEMENT</div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 -rotate-3 font-semibold'>BRAND CONTENT</div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 rotate-2 font-semibold'>SMA</div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 -rotate-3 font-semibold'>PRESSE & INFLUENCE</div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 rotate-2 font-semibold'>PRINT</div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.badgeColor }} className='rounded-full p-5 -rotate-3 font-semibold'>EVENT</div>, title: "", href: '' },
  ];


  return (
    <>

      <div className='hidden md:block w-full min-h-screen bg-white'>

        <NavBarComponent />

        <div style={{ background: config.colors.primary }}
          className={`pt-20 min-h-screen`}>

          <HomePage />

          <section id='about' className='bg-white flex flex-col justify-around min-h-screen'>
            <AboutPage />
          </section>

          <div className='h-32 lg:h-50 flex items-center bg-white'>

            <LogoLoop
              logos={topics}
              speed={60}
              direction="left"
              logoHeight={42}
              gap={48}
              hoverSpeed={60}
              scaleOnHover={false}
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
              className='h-full'
            />

          </div>

          <section id='achievements' className='bg-gradient-to-b from-white to-[#ede8da] flex flex-col justify-around min-h-screen'>
            {/* Contenu de la deuxième section */}
            <SkillPage />
          </section>

        </div>

      </div>

      <div style={{ background: config.colors.primary }}
        className='md:hidden min-h-screen flex items-center justify-center text-lg'>
          <span className='font-semibold text-center px-20'>
            Merci d'utilisez un écran plus grand pour voir le portfolio de Paola
          </span>
      </div>

    </>
  )
}

export default App
