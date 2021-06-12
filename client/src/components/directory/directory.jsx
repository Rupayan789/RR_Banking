import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { baseUrl } from '../../baseurl';
import { UpdateUsers } from '../../redux/action';
import { selectUsers, selectUserState } from '../../redux/select-user';
import { store } from '../../redux/store';
import Tablerow from '../table-row/table-row';

const Directory = ({storeData,selectUserAll}) => {
    

    useEffect(async () => {
        try
        {
            const data = await axios.get(`${baseUrl}/user`);
            storeData(data.data)
            
            // console.log(userdata)
        }
        catch(error)
        {
            console.log(error)
        }
       
        
    }, [])

    return (
        <div className="container mx-auto md:px-20 px-4 py-5 mt-10">
            <h1></h1>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Account Number
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Balance
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        selectUserAll.map((user,index)=><Tablerow user={user} key={index}/>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    storeData:(data)=>dispatch(UpdateUsers(data))
})
const mapStateToProps=state=>({
    selectUserAll:selectUsers(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Directory);
