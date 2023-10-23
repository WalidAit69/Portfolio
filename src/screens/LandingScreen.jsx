import React, { useEffect } from 'react';
import './LandingScreen.css';
import { motion, useScroll, useTransform } from 'framer-motion';



function LandingScreen() {

    return (
        <section className='landing_page'>

            <div className="third-block"></div>

            <div className='name'>
                <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >Walid Ait Harma</motion.h1>
                <motion.h2 initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>Full-Stack Web Developer</motion.h2>

            </div>
        </section>
    )
}

export default LandingScreen

