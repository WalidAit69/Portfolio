import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';


function AboutScreen() {
    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress , [0,1] , [0,1000]);

    return (
        <section className='AboutScreen'>
            <motion.h1 style={{x}} >ABOUT ME</motion.h1>
            <h2>Crafting user friendly and aesthetic UI designs is not just my profession, it's my passion.</h2>
        </section>
    )
}

export default AboutScreen