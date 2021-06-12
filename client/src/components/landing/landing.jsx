import React from 'react'
import CustomButton from '../button/button'
import Lottie from 'react-lottie';
const Landing = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: require('../../assets/63568-mobile-banking.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="container mx-auto px-2 md:px-20 py-3 mt-10 sm:mt-20 mb-10 ">
            <div className="landing-section lg:flex lg:items-center lg:justify-between">
                <div className="content lg:w-1/2 w-full">
                    <div className="flex flex-col items-center lg:block">
                        <div className="text-center lg:text-left lg:text-2xl" >We bring</div>
                        <h1 className="text-center lg:text-left text-5xl md:text-6xl sm:w-2/3">Transaction at your finger tips</h1>
                        <div className="my-5">
                            <CustomButton landing="true"><a href="#services">Get Started</a></CustomButton>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="image">
                <div className="md:hidden">
                <Lottie 
                    options={defaultOptions}
                    height={350}
                    width={350}
                />
                </div>
                <div className="hidden md:inline">
                <Lottie 
                    options={defaultOptions}
                    height={500}
                    width={500}
                />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
