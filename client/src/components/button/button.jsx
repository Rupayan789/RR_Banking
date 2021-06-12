import React from 'react'

const CustomButton = (props) => {
    return (
        <div className={`px-4 py-3 sm:mr-auto bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 ${props.landing?'w-60':'w-30'} rounded-md text-white`} {...props}>
            <button {...props} className={`${props.landing?'text-3xl':'text-xl'} focus:outline-none`}>{props.children}</button>
        </div>
    )
}

export default CustomButton
