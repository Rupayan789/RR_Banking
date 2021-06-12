import React from 'react'
import About from '../../components/aboutSection/about'
import Contact from '../../components/contact.section/contact.section'
import Feature from '../../components/feature/feature'
import Footer from '../../components/footer/footer'
import Landing from '../../components/landing/landing'
import Navbar from '../../components/navbar/navbar'

const Homepage = () => {
    return (
        <div>
           
            <Landing/>
            <Feature/>
            <About/>
            <Contact/>
            
        </div>
    )
}

export default Homepage
