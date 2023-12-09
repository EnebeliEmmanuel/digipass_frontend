import React from 'react'
import Hero from "./Hero"
import Features from "./Features"
import Works from "./Works"
import Explore from "./Explore"
import Organisation from "./Organisation"

const HomePage = () => {
  return (
    <div>
          <Hero />
          <Features />
          <Works />
          <Explore />
          <Organisation />
    </div>
  )
}

export default HomePage;