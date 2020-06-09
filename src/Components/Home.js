// Importing packages
import React from 'react';
import { useSelector } from 'react-redux'
// Importing Components
import List from './List';
import Login from './Login';

const Home = () => {

    // Getting Auth from redux state
    const isAuth = useSelector(state => state.auth.isAuth)

    // Conditional returning, 
    // if Auth is true then return employee list
    // else login page
    if (isAuth) {
        return (
            <List />
        )
    } else {
        return (
            <Login />
        )
    }
}

export default Home;