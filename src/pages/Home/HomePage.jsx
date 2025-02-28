import React from 'react'
import { Hero } from './copmonents/Hero'
import { FeaturedProducts } from './copmonents/FeaturedProducts'
import { Testimonial } from './copmonents/Testimonial'
import { Faq } from './copmonents/Faq'
import { useTitle } from '../../hooks/useTitle'

export const HomePage = () => {

  useTitle("Access Latest Computer Science eBooks")
  return (
    <main>
      <div>
        <Hero/>
        <FeaturedProducts/>
        <Testimonial/>
        <Faq />
      </div>
    </main>
  )
}


