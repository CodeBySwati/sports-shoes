import React from 'react'
import {Hero, PopularProducts, SuperQuality, Services, SpecialOffers, CustomerReviews, Subscribe, Footer} from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative'>
      <Nav></Nav>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero></Hero>
      </section>
      <section className='padding'>
        <PopularProducts></PopularProducts>
      </section>
      <section className='padding'>
        <SuperQuality></SuperQuality>
      </section>
      <section className='padding-x py-10'>
        <Services></Services>
      </section>
      <section className='padding'>
        <SpecialOffers></SpecialOffers>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews></CustomerReviews>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe></Subscribe>
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer></Footer>
      </section>
    </main>
  )
}

export default App