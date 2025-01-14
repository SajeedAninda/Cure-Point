import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import HomeDetails from './HomeDetails/HomeDetails';
import PatientSays from './PatientSays/PatientSays';

const Homepage = () => {
    return (
        <>
           <Hero></Hero> 
           <Services></Services>
           <HomeDetails></HomeDetails>
           <PatientSays></PatientSays>
        </>
    );
};

export default Homepage;