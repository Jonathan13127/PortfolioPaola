import './App.css'
import NavBarComponent from './components/NavBarComponent/NavbarComponent'
import LogoLoop from './components/LogoLoop'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { config } from './config/config'
import { SkillPage } from './pages/SkillPage'
import { useState } from 'react'
import { RealisationPage } from './pages/RealisationPage'
import { ContactPage } from './pages/ContactPage'
import { FadeInSection } from './components/FadeInSection';

function App() {

  const topics = [
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl rotate-2 font-thin'>
      COMMUNITY MANAGEMENT
      </div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl -rotate-3 font-thin'>
      BRAND CONTENT
      </div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl p-5 rotate-2 font-thin'>
      SMA
      </div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl p-5 -rotate-3 font-thin'>
      PRESSE & INFLUENCE
      </div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl p-5 rotate-2 font-thin'>
      PRINT
      </div>, title: "", href: '' },
    { node: <div style={{ background: config.colors.logoLoopColor, fontFamily:'Agrandir' }} className='rounded-full py-3 px-5 text-xs sm:text-xl p-5 -rotate-3 font-thin'>
      EVENT
      </div>, title: "", href: '' },
  ];

  // 1. Stockez la hauteur de la navbar
  const [navHeight, setNavHeight] = useState<number>(0);

  // 2. Fonction pour mettre à jour la hauteur
  const handleNavHeightChange = (height: number) => {
    // Nous ajoutons un petit extra (par ex. 4px) pour ne jamais cacher le haut
    setNavHeight(height);
  };

  // Convertir la hauteur en pixels pour le style CSS
  const scrollMarginTopStyle = `${navHeight}px`;

  return (
    <>
      <div className='w-full min-h-screen bg-white'>

        <NavBarComponent onHeightChange={handleNavHeightChange} />

        <FadeInSection delay={100} duration={2000}>
          <HomePage />
        </FadeInSection>

        <section id='about' className='bg-white flex flex-col items-center justify-center'
          style={{ scrollMarginTop: scrollMarginTopStyle, background: config.colors.primary }}>
          <AboutPage />
        </section>

        <div className='flex items-center bg-gradient-to-b from-[#ede8da] to-white' style={{ scrollMarginTop: scrollMarginTopStyle }}>

          <LogoLoop
            logos={topics}
            speed={60}
            direction="left"
            logoHeight={42}
            gap={48}
            hoverSpeed={60}
            scaleOnHover={false}
            fadeOut={false}
            fadeOutColor="#ffffff"
            ariaLabel="Centre d'intérêts"
            className='h-full py-5 gap-4 text-white'
          />

        </div>

        <section id='skills' className='bg-white flex flex-col justify-around'
          style={{ scrollMarginTop: scrollMarginTopStyle }}>
          {/* Contenu de la deuxième section */}
          <SkillPage />
        </section>

        <section id='achievements' className='bg-white flex flex-col justify-around'
          style={{ scrollMarginTop: scrollMarginTopStyle }}>
          <RealisationPage />
        </section>

        <section id='contact' className='bg-white flex flex-col justify-around'
          style={{ scrollMarginTop: scrollMarginTopStyle }}>
          <ContactPage />
        </section>

      </div>
    </>
  )
}

export default App
