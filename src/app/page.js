import Image from 'next/image'
import styles from './styles/index.module.scss'
import Header from './components/header'
import Hero from './components/hero'
import HeroHeading from './components/heroHeading'
import Products from './components/products'

export default function Home() {
  return (
   <main className='container'>
      <Header/>
      <Hero/>
      <HeroHeading/>
      <Products/>
   </main>
  )
}
