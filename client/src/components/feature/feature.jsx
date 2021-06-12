import React from 'react'
import { useHistory } from 'react-router'
import CustomButton from '../button/button'
import './styles.scss'

const Feature = () => {
    const history=useHistory();
    return (
        <div className="container mx-auto md:px-20 px-4 py-3 pt-24 mb-12 " id="services">
             <div className="mt-4">
                    <h1 className="text-3xl font-bold text-center" data-aos="fade-up">Our Services</h1>
                    
                </div>
            <div className="mt-8 grid grid-cols-1  lg:grid lg:grid-cols-3  lg:gap-20">
               
                <div className="card shadow-xl border mb-10 " data-aos="fade-up">
                    <div>
                        <div className="card-image1"></div>
                    </div>
                    <h1 className="text-2xl text-center mt-5"><CustomButton onClick={()=>history.push('/users')}>View all Users</CustomButton></h1>
                </div>
                <div className="card shadow-xl border mb-10"  data-aos="fade-up">
                    <div>
                        <div className="card-image2"></div>
                    </div>
                    
                    <h1 className="text-2xl text-center mt-5"><CustomButton onClick={()=>history.push("/transaction/history")}>View Transaction History</CustomButton></h1>
                </div>
                <div className="card shadow-xl border mb-10"  data-aos="fade-up">
                    <div>
                        <div className="card-image3"></div>
                    </div>
                    
                    <h1 className="text-2xl text-center mt-5"><CustomButton onClick={()=>history.push("/users/create")}>Create new User</CustomButton></h1>
                </div>
            </div>

        </div>
    )
}

export default Feature
