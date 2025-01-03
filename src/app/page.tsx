import React from 'react'
import Header from './components/Header'
import Travel from './components/Travel'
import FeaturedBrands from './components/Featured-brands'
import BlogPage from './blog/page'

export default function page() {
  return (
    <div className ="bg-black" >
      <Header />
      <Travel />
      <FeaturedBrands />
      <BlogPage />
 
    </div>
  )
}
