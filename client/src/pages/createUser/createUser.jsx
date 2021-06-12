import React, { useState } from 'react'
import {BiUserPlus } from 'react-icons/bi'
import {MdEmail } from 'react-icons/md'
import {HiCurrencyRupee } from 'react-icons/hi'
import {baseUrl} from '../../baseurl'
import './styles.scss'
import axios from 'axios'
import Spinner from '../../components/spinner/spinner'
import Success from '../../components/success/success'
import Wrong from '../../components/wrong/wrong'
import Typical from 'react-typical'
const CreateUserPage = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [balance,setBalance]=useState('');
    const [successfull,setSuccessfull]=useState(false);
    const [loading,setLoading]=useState(false);
    const [newRequest,setNewRequest]=useState(true);
    const [status,setStatus]=useState(200);
    const handleSubmit=async e=>{
        e.preventDefault();
        setLoading(true)
        setNewRequest(false)
        const userPosted=await axios.post(`${baseUrl}/user`,{ username:username,email:email,balance:balance});
        console.log(userPosted)
        if(userPosted.status==200)
        {
            setStatus(userPosted.status)
            setLoading(false)
            setSuccessfull(true);
        }
        else
        {
            setStatus(userPosted.status)
            setLoading(false)
            setSuccessfull(false);
        }
        setUsername('');
        setEmail('');
        setBalance('');
        
    }
    return (
        <div className="wallpaper">
                <div className="container mx-auto grid lg:grid-cols-3 z-50">
                    <div className="lg:col-span-2">
                        <div className="px-4 lg:px-48 mt-8 mb-4 lg:my-24 text-white text-2xl lg:text-5xl font-bold">
                          RR Banking
                        </div>
                        <div className=" px-4 lg:px-48 mb-4 lg:my-24 text-white text-xl lg:text-4xl">
                        <Typical
                            steps={['Its Fast !!', 1000,'Its Secure !!',1000,'Its Relaible !!',1000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                        </div>
                    </div>
                    <div className="lg:col-span-1 h-screen bg-white  px-4 py-1 lg:py-4">
                        {
                            loading?
                            <div className="mt-8 lg:mt-12">
                                <Spinner/>
                            </div>
                            :
                            newRequest?
                            <div>
                        <h1 className="text-3xl  text-center lg:text-left mt-8 lg:mt-16">Create User</h1>
                        <div className="text-gray text-sm  text-center lg:text-left">Fill all credentials to become a member</div>
                        <div className="shadow-xl border-2 px-8 py-4 mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-start justify-between">
                                    <div className="mb-5 mt-4 w-full">
                                        <label className="font-light">Username</label>
                                        <div className="shadow bg-blue-400 flex rounded-md">
                                            <div className="py-1 pl-2  pr-1 flex items-center justify-center">
                                            <BiUserPlus/>
                                            </div>
                                            
                                            <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-4 w-full">
                                        <label className="font-light">Email</label>
                                        <div className="shadow bg-blue-400 flex rounded-md">
                                            <div className="py-1 pl-2  pr-1 flex items-center justify-center">
                                            <MdEmail/>
                                            </div>
                                            
                                            <input type="email" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-4 w-full">
                                        <label className="font-light">Initial Balance</label>
                                        <div className="shadow bg-blue-400 flex rounded-md">
                                            <div className="py-1 pl-2  pr-1 flex items-center justify-center">
                                            <HiCurrencyRupee/>
                                            </div>
                                            
                                            <input type="text" className="px-2 py-1 bg-gray-200 rounded-r-md focus:outline-none w-full" required name="balance" value={balance} onChange={(e)=>setBalance(e.target.value)}/>
                                        </div>
                                    </div>
                                   
                                    
                                </div>
                                <div className="flex justify-center items-center lg:justify-end">
                                    <button className="px-3 py-2 bg-blue-500 text-white text-xl text-center rounded-lg focus:outline-none hover:bg-blue-600">Submit</button>
                                </div>
                            </form>
                        </div>
                        </div>
                        :
                        successfull?
                        <div className="mt-5 flex flex-col justify-center">
                            <div><Success/></div>
                            <button className="px-3 py-2 bg-blue-500 text-white text-3xl text-center rounded-lg focus:outline-none hover:bg-blue-600 mt-4 mx-auto" onClick={()=>setNewRequest(true)}>Create new User</button>
                        </div>
                        
                        :
                        <div className="mt-5 flex flex-col justify-center">
                            <div><Wrong statusCode={status} createUser/></div>
                            <button className="px-3 py-2 bg-blue-500 text-white text-3xl text-center rounded-lg focus:outline-none hover:bg-blue-600 mt-4 mx-auto" onClick={()=>setNewRequest(true)}>Create new User</button>
                        </div>

                        

                        }
                        
                        
                    </div>
                </div>
           
        </div>
    )
}

export default CreateUserPage
