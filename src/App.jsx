import About from './sections/about'
import Hero from './sections/hero'
import Navbar from './sections/navbar'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
