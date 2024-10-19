import About from './sections/about'
import Contact from './sections/contact'
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
      <Contact />
      <Footer />
    </main>
  )
}

export default App
