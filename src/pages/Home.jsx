import Nav          from '../components/Nav'
import Hero         from '../components/Hero'
import Services     from '../components/Services'
import Products     from '../components/Products'
import Portfolio    from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Process      from '../components/Process'
import FAQ          from '../components/FAQ'
import CtaBand      from '../components/CtaBand'
import Footer       from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <CtaBand />
      <Footer />
    </>
  )
}
