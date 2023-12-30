import Header from './components/header'
import Hero from './components/hero'
import Heading from './components/heading'
import Featured from './components/featured'
import Footer from './components/footer'

export default function Home() {
  return (
   <main className='container'>
      <Header/>
      <Hero/>
      <Heading title="Our Featured Products" />
      <Featured/>
      <Footer/>
   </main>
  )
}
