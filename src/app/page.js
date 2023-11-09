import Image from 'next/image'
import styles from './styles/index.module.scss'
import Header from './components/header'
import Hero from './components/hero'
import HeroHeading from './components/heroHeading'
import Heading from './components/heading'
import Featured from './components/featured'
import Footer from './components/footer'

export default function Home() {
  return (
   <main className='container'>
      <Header/>
      <Hero/>
      <HeroHeading/>
      <Heading title="Our Featured Products" />
      <Featured/>
      <Footer/>
   </main>
  )
}
