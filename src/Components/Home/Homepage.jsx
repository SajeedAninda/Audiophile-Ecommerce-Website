import React from 'react';
import Hero from './Hero/Hero';
import Shop from './Shop/Shop';
import ZX9_Speaker from '../ZX9-Speaker/ZX9_Speaker';

const Homepage = () => {
    return (
        <>
           <Hero></Hero> 
           <Shop></Shop>
           <ZX9_Speaker></ZX9_Speaker>
        </>
    );
};

export default Homepage;