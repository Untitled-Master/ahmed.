import './App.css'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <> 
      <Hero 
          imageSrc="https://i.pinimg.com/1200x/0e/a0/71/0ea07191b9f4ee4c77e040c212e7211c.jpg"
          title="Ahmed."
          subtitle="Unique Approach"
          description="Pure mathematics is, in its way, the poetry of logical ideas."
          techStack={['React', 'NodeJS', 'TailwindCSS', 'Javascript', 'Python', '+99']}
          ctaText="Explore Now"
          onCtaClick={() => {/* custom handler */}}
      />
    </>
  )
}

export default App
