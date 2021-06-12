import axios from 'axios';
import Lottie from 'react-lottie';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { baseUrl } from '../../baseurl';
import { selectConditionally, selectIdFromUsername, selectUserById, selectUsers } from '../../redux/select-user';
import Spinner from '../spinner/spinner';
import './styles.scss'
import Check from '../check/check';
import Wrong from '../wrong/wrong';

const UserProfile = ({ selectUser, isLoading, selectUserAll ,match,selectUserExceptOne}) => {
 
    const [receiver,setReceiver]=useState('');
    const [amount,setAmount]=useState('');
    const [balance,setBalance]=useState('');
    const [isSuccessfull,setSuccessfull]=useState(false)
    const [isPaymentPending,setPaymentPending]=useState(false);
    const [newrequest,setNewRequest]=useState(true);
    const [status,setStatus]=useState(200);
    useEffect(() => {
        console.log(selectUser)
        setBalance(selectUser[0].balance)
        
    }, [])

    const defaultOptions={

    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        // console.log(getIdfromUsername(receiver))
        // setAmount('');
        // setReceiver('')
        setNewRequest(false)
        console.log(baseUrl)
        setPaymentPending(true);
        const jsonData=await axios.post(`${baseUrl}/transact/${match.params.userID}`,{
            userId:getIdfromUsername(receiver),
            amount:amount
        });
        console.log(jsonData)
        setBalance(balance-amount)
        if(jsonData.status==200)
        {
            setPaymentPending(false);
            setSuccessfull(true);
        }
        else
        {
            setStatus(jsonData.status)
            setPaymentPending(false);
            setSuccessfull(false)
        }
        
        setAmount('')
    }
    const getIdfromUsername=(username)=>{
        const selectedUser=selectUserAll.filter((each)=>each.username==username);
        return selectedUser[0]._id;
    }
    const makeNewTransaction=()=>{
        setNewRequest(true)
    }
    
    return (
        <div className="container mx-auto md:px-20 px-4 py-5 mt-10">
            <div className="grid lg:grid-cols-3 ">
                <div className=" px-5 py-4 mx-auto">
                    <div className="mx-5  my-5 shadow px-5 py-4 flex flex-col items-center">
                        <div className="profile-image"/>
                        <h1 className="text-center text-xl font-bold my-4">{selectUser[0].username}</h1>
                        <div className="bg-blue-100 rounded-lg">
                            <ul className="text-sm px-5 py-2">
                                <li className="py-1 flex flex-col items-start">
                                    <span className="font-bold">Email</span>
                                    <span>{selectUser[0].email}</span>
                                </li>
                                <li className="py-1 flex flex-col items-start">
                                    <span className="font-bold">Account Number</span>
                                    <span>{selectUser[0].accountNumber}</span>
                                </li>
                                <li className="py-1 flex flex-col items-start">
                                    <span className="font-bold">Balance</span>
                                    <span>₹ {balance}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 px-5 py-4">
                    <div className="">
                        <h1 className="text-2xl text-center mt-5 mb-8 font-bold">Transact</h1>
                    </div>
                    {
                        newrequest?
                        <form method="POST" className="flex flex-col align-end justify-end mb-10" onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2 lg:gap-28">
                            <div className="col-span-1 flex flex-col bg-gray-400 px-5 py-4 rounded-md">
                                <label  className="block text-2xl font-medium text-gray-700 mb-5">
                                    Select the Receiver
                                </label>
                                <select className="py-2 px-1 rounded-md text-gray-400 focus:outline-none" name="receiver" id="" required onChange={(e)=>setReceiver(e.target.value)}>
                                    <option value="" selected disabled>Select a User</option>
                                    {
                                        selectUserExceptOne.map((each, index) => <option key={index}>{each.username}</option>)
                                    }
                                </select>
                            </div>
                            <div  className="col-span-1 bg-gray-400 px-5 py-4 rounded-md mt-5 lg:mt-0">
                                <label className="block text-2xl font-medium text-gray-700 mb-5">
                                    Enter the Amount
                                </label>
                                <input className="w-full px-2 py-1 rounded-md focus:outline-none" required type="text" placeholder="amount" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                            </div>
                            
                        </div>
                        <button type="submit" className="px-4 py-3 text-xl bg-blue-400 hover:bg-blue-600 rounded-md mt-5 text-white font-bold ml-auto focus:outline-none">Pay Now</button>
                    </form>:
                    isPaymentPending?
                        <Spinner/>:
                        isSuccessfull?<Check handler={makeNewTransaction}/>:<Wrong statusCode={status} handler={makeNewTransaction}/>
                                }
                    
                    
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    selectUser: selectUserById(ownProps.match.params.userID)(state),
    isLoading: state.isLoading,
    selectUserAll: selectUsers(state),
    selectUserExceptOne:selectConditionally(ownProps.match.params.userID)(state)
})

export default connect(mapStateToProps)(UserProfile)
