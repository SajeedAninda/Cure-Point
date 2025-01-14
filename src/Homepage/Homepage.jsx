import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import HomeDetails from './HomeDetails/HomeDetails';

const Homepage = () => {
    return (
        <>
           <Hero></Hero> 
           <Services></Services>
           <HomeDetails></HomeDetails>
        </>
    );
};

export default Homepage;