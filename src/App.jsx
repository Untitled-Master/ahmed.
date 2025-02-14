import './App.css'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AccordionDemo from './components/Drop/Drop'
import ProjectGrid from './components/Card/Grid'
import BioSection from './components/BioSection/BioSection'
import ModernGallery from './components/Nitch/Nitch'


function App() {
  return (
    <> 
      <Navbar />
      <Hero 
          imageSrc="https://i.pinimg.com/736x/d4/d8/98/d4d898d6a7f61fb60941b5203d2e893b.jpg"
          title="ahmed."
          subtitle="Unique Approach"
          description="Pure mathematics is, in its way, the poetry of logical ideas."
          techStack={['React', 'NodeJS', 'TailwindCSS', 'Javascript', 'Python', '+99']}
          ctaText="Explore Now"
          onCtaClick={() => window.open("https://github.com/Untitled-Master", "_blank")}
      />
      <ModernGallery />
      <BioSection />
      <ProjectGrid />
      <AccordionDemo />
      <Footer />

    </>
  )
}

export default App
