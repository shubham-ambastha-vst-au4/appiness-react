import React from 'react';
import { useSelector } from 'react-redux'
import List from './List';
import Login from './Login';

const Home = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

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