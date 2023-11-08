import Image from 'next/image'
import styles from './styles/index.module.scss'
import Header from './components/header'
import Hero from './components/hero'
import HeroHeading from './components/heroHeading'
import Heading from './components/heading'

export default function Home() {
  return (
   <main className='container'>
      <Header/>
      <Hero/>
      <HeroHeading/>
      <Heading title="Our Featured Products" />
   </main>
  )
}
