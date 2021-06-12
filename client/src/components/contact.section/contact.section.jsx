import React from 'react'
import {BiUserPlus } from 'react-icons/bi'
import {MdEmail } from 'react-icons/md'
const Contact = () => {
    return (
        <div className="container mx-auto px-4 lg:px-48 py-3 pt-8 md::pt-24 mb-12 lg:mb-24" id="contact">
            <div className="lg:px-48 py-4 lg:mx-24">
            <h1 className="text-3xl font-bold text-center mt-4 md:mt-12 mb-4 md:mb-8" data-aos="fade-up">Contact Us</h1>
            <form data-aos="fade-up" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div className="col-span-1 mb-2">
                    <label className="font-light">First Name</label>
                    <div className="shadow bg-blue-400 flex rounded-md">
                        <div className="py-2 pl-2  pr-1 flex items-center justify-center">
                        <BiUserPlus/>
                        </div>
                        
                        <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="username"/>
                    </div>
                    </div>
                    <div className="col-span-1 mb-2">
                    <label className="font-light">Last Name</label>
                    <div className="shadow bg-blue-400 flex rounded-md">
                        <div className="py-2 pl-2  pr-1 flex items-center justify-center">
                        <BiUserPlus />
                        </div>
                        
                        <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="username"/>
                    </div>
                    </div>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div className="col-span-1 mb-2">
                    <label className="font-light">Email</label>
                    <div className="shadow bg-blue-400 flex rounded-md">
                        <div className="py-2 pl-2  pr-1 flex items-center justify-center">
                        <BiUserPlus/>
                        </div>
                        
                        <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="username"/>
                    </div>
                    </div>
                    <div className="col-span-1 mb-2 ">
                    <label className="font-light">Phone Number</label>
                    <div className="shadow bg-blue-400 flex rounded-md">
                        <div className="py-2 pl-2  pr-1 flex items-center justify-center">
                        <BiUserPlus />
                        </div>
                        
                        <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="username"/>
                    </div>
                    </div>
                    </div>
                    <div className="grid grid-cols-1">
                    <label className="font-light">Message</label>
                        <textarea className="col-span-1 border-4 rounded-lg px-4 py-2 focus:outline-none hover:bg-gray-100" style={{resize:'none'}} rows="5" placeholder="Write your message here"></textarea>
                    </div>
                    <div className="flex justify-center items-center lg:justify-end mt-4">
                        <button type="submit" className="px-3 py-2 bg-blue-500 text-white text-xl text-center rounded-lg focus:outline-none hover:bg-blue-600">Submit</button>
                    </div>
            </form>
            </div>
            
        </div>
    )
}

export default Contact
