import Lottie from 'react-lottie';
import React, { useEffect, useRef } from 'react'

const Spinner = () => {
   
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: require('../../assets/9811-loading.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return (
        <div >
            <Lottie 
	    options={defaultOptions}
        height={100}
        width={100}
      />
        </div>
    )
}

export default Spinner
