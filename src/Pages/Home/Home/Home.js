import React from 'react';
import Banner from '../Banner/Banner';
import useAuth from '../../../Authorization/hooks/useAuth';
const Home = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <Banner/>
    );
};

export default Home;