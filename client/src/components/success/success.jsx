import React from 'react'
import Lottie from 'react-lottie'
const Success = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: require('../../assets/11048-edited-blue-check-mark.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="mx-auto mt-5">
          <Lottie 
	    options={defaultOptions}
        height={350}
        width={350}
      />  
        </div>
    )
}

export default Success
