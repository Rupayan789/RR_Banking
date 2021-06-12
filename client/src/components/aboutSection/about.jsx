import React from 'react'
import {GrSecure} from 'react-icons/gr'
import {MdImportantDevices } from 'react-icons/md'
import {FaRegHandshake } from 'react-icons/fa'
const About = () => {
    return (
        <div className="container mx-auto md:px-20 px-4 py-3 pt-24 mb-12 md:mb-24" id="about">
            <div>
                <h1 className="text-3xl font-bold text-center mt-4 md:mt-12 mb-4 md:mb-8" data-aos="fade-up">About Us</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12" >
                    <div className="col-span-1 bg-green-300 shadow-xl border" data-aos="fade-up">
                        <div>
                            <GrSecure className="w-1/3 h-auto mx-auto p-4 rounded-full border-4 border-black m-3"/>
                        </div>
                        <h1 className="text-xl font-bold text-center mt-4 mb-6 bg-gray-100 rounded-lg w-1/2 mx-auto">Highly Secure</h1>
                        <div className="px-3 pb-2 text-md bg-black mx-4 my-2 text-white border-white border-2 rounded-lg">Your transaction are highly secure and safe,making it difficult for hackers to access any vital information</div>
                    </div>
                    <div className="col-span-1 bg-yellow-300 shadow-xl border" data-aos="fade-up">
                        <div>
                            <MdImportantDevices className="w-1/3 h-auto mx-auto p-1 rounded-full border-4 border-black m-3"/>
                        </div>
                        <h1 className="text-xl font-bold text-center mt-4 mb-6 bg-gray-100 rounded-lg w-1/2 mx-auto">Highly relaible</h1>
                        <div className="px-3 pb-2 text-md bg-black mx-4 my-2 text-white border-white border-2 rounded-lg">Our service can be accessed from any device you are working upon,be it mobile,tablet or desktop</div>
                    </div>
                    <div className="col-span-1 bg-blue-300 shadow-xl border" data-aos="fade-up">
                        <div>
                            <FaRegHandshake className="w-1/3 h-auto mx-auto p-1 rounded-full border-4 border-black m-3"/>
                        </div>
                        <h1 className="text-xl font-bold text-center mt-4 mb-6 bg-gray-100 rounded-lg w-1/2 mx-auto">Trustworthy</h1>
                        <div className="px-3 pb-2 text-md bg-black mx-4 my-2 text-white border-white border-2 rounded-lg">We have a good service and people can reach out to us in case of any problem and we will be glad to help them out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
