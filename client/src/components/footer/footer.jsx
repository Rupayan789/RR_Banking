import React from 'react'
import { FaInstagramSquare , FaFacebookSquare ,FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="container bg-gray-400 pt-8 pb-4 mx-auto">
            <div className="text-center text-sm md:text-lg pb-2">Copyright&#169; Rupayan Creations. All Rights Reserved </div>
            
            <div className="text-center text-sm md:text-lg pb-2 flex items-center justify-center"><span className="mr-4">My social handles </span><a className="mr-4"
            href=""><FaInstagramSquare style={{height:'20px',width:'20px'}}/></a><a className="mr-4" href=""><FaFacebookSquare style={{height:'20px',width:'20px'}}/></a><a href=""><FaLinkedin style={{height:'20px',width:'20px'}}/></a></div>
        </div>
    )
}

export default Footer
