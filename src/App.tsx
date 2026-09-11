import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Blurb from './components/Blurb.tsx'
import Portfolio from './components/Portfolio.tsx'
import Shop from './components/Shop.tsx'
import Connect from './components/Connect.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Blurb />
        <Portfolio />
        <Shop />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
