import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import HomeDetails from './HomeDetails/HomeDetails';
import PatientSays from './PatientSays/PatientSays';
import ExpertDoctors from './ExpertDoctors/ExpertDoctors';

const Homepage = () => {
    return (
        <>
           <Hero></Hero> 
           <Services></Services>
           <HomeDetails></HomeDetails>
           <PatientSays></PatientSays>
           <ExpertDoctors></ExpertDoctors>
        </>
    );
};

export default Homepage;