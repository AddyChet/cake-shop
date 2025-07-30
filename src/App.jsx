import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TopPicks from './components/TopPicks'
import ExploreRange from './components/ExploreRange'
import RewardsSignup from './components/RewardsSignup'
import DeliveryCTA from './components/DeliveryCTA'
import EasyIdeas from './components/EasyIdeas'
import LocationCard from './components/LocationCard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className='mt-15 '>
        <TopPicks />
      </div>
      <ExploreRange />
      <RewardsSignup />
      <DeliveryCTA />
      <EasyIdeas />
      <LocationCard />
      <Footer />
    </div>
  )
}

export default App