import React from 'react';
import Hero from './Hero/Hero';
import Shop from './Shop/Shop';
import ZX9_Speaker from '../ZX9-Speaker/ZX9_Speaker';
import ZX7_Speaker from '../ZX7-Speaker/ZX7_Speaker';
import YX1_Eaphone from '../YX1-Earphones/YX1_Eaphone';

const Homepage = () => {
    return (
        <>
           <Hero></Hero> 
           <Shop></Shop>
           <ZX9_Speaker></ZX9_Speaker>
           <ZX7_Speaker></ZX7_Speaker>
           <YX1_Eaphone></YX1_Eaphone>
        </>
    );
};

export default Homepage;