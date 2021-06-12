import React, { useRef, useState } from 'react'
import './styles.scss'
import { FaBars, FaBook } from "react-icons/fa";
import { MdFeaturedPlayList ,MdContactPhone} from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [sidebar,setSidebar]=useState(false);
   const menuRef=useRef(null);
   const handleClick=(e)=>{
  
       setSidebar(!sidebar)
   }
    return (
        <div className="container mx-auto px-4 md:mt-10 py-3 sm:px-20">
            <div className="navbar flex justify-between items-center">
                <Link to="/">
                <div className="logo text-2xl">RR Banking</div>
                </Link>
                
                <div className="nav-elements">
                    <ul className="hidden sm:flex justify-between items-center">
                        <li className="sm:ml-5 hover:text-blue-400"><a href="/#services">Services</a></li>
                        <li className="sm:ml-5 hover:text-blue-400"><a href="/#about">About Us</a></li>
                        <li className="sm:ml-5 hover:text-blue-400"><a href="/#contact">Contact Us</a></li>
                    </ul>
                    <div className="menu-btn-wrapper sm:hidden">
                        <div className="menu-btn" onClick={handleClick}>
                        <FaBars size={28}/>
                        </div>
                        <IconContext.Provider value={{ color: '#fff', size: '28px' }}>
                            <div>
                                <div className={`sidebar pl-5 pr-8 ${sidebar?'open':''}`}>
                                    <div className="mb-10 flex items-center justify-start mt-2 mr-2" onClick={handleClick}><AiOutlineCloseSquare size={42}/></div>
                                    <div className="sidebar-content mt-20">
                                        <ul className="flex flex-col items-left justify-between text-white">
                                            
                                        <li className="mb-10 flex items-center justify-start "><FaBook /> <span className="ml-5 hover:text-black"><a href="/#services" onClick={handleClick}>Services</a></span></li>
                                            <li className="mb-10 flex items-center justify-start "><MdFeaturedPlayList /><span className="ml-5 hover:text-black"><a href="/#about"  onClick={handleClick}>About Us</a></span></li>
                                            <li className="mb-10 flex items-center justify-start "><MdContactPhone /><span className="ml-5 hover:text-black"><a href="/#contact"  onClick={handleClick}>Contact Us</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;