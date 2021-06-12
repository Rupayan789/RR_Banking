import React from 'react'
import Lottie from 'react-lottie';

const Check = (props) => {
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: require('../../assets/6687-check.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                        />    
            </div>
            <div className="mt-5 mx-auto px-5 py-3 text-3xl font-bold text-center">
                Payment Successfull!
            </div>
            <div className="mt-5 mb-10 px-1 py-1 flex items-center justify-center">
                <button className="px-4 py-3 mx-auto text-xl bg-blue-400 hover:bg-blue-600 rounded-md mt-5 text-white font-bold ml-auto focus:outline-none" onClick={props.handler}>New Transaction</button>
            </div>
        </div>
        
    )
}

export default Check
