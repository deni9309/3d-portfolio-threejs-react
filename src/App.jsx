import About from './sections/about'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Footer from './sections/footer'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Projects from './sections/projects'
import Testimonials from './sections/testimonials'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
