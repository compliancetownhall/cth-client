import React from 'react'
import ArticleList from '../Blogs/Blogs'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'

function Homepage() {
  return (
    <React.Fragment>
    
     <Navbar/>
     <Hero/>
     <Features/>
     <ArticleList/>
     <Footer/>
    </React.Fragment>
  )
}

export default Homepage