import React from 'react'
import { Route } from 'react-router'
import Directory from '../../components/directory/directory'


const Userpage = ({match}) => {
    
    return (
        <div>
            <Route exact path={match.path} component={Directory}/>
        </div>
    )
}

export default Userpage
