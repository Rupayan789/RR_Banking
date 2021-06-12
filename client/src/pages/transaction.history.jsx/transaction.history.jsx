import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../baseurl'
import Spinner from '../../components/spinner/spinner'

const TransactionHistoryPage = () => {
    const [historyFetched,setHistoryFetched]=useState([])
    useEffect(async ()=>{
        const historyData=await axios(`${baseUrl}/transact/history`);
        setHistoryFetched(historyData.data);
        console.log(historyFetched)
        

    },[])

    return (
        <div className="container mx-auto px-2 md:px-20 py-3 mt-10 sm:mt-20 mb-10 md:mb-48" >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center">Transaction History</h1>
                <div className="mt-5 grid grid-col-1 md:w-2/3">
                    
                    {
                        historyFetched.length?
                        historyFetched.map((item,index)=>{
                            return <div key={index} className={`col-span-1 ${ item.status=="Failed"?'bg-red-400':'bg-green-400' } w-full px-3 py-1 shadow-md text-center text-black mb-1 rounded-md`}>{item.sender} {item.status=="Failed"?'could not send':'sent'} ₹ {item.amount} to {item.receipent}</div>
                        }):
                        <Spinner/>
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default TransactionHistoryPage
