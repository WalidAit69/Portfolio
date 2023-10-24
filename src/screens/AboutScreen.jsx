import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';


function AboutScreen() {
    const [screenWidtth, setscreenWidtth] = useState(window.innerWidth);

    useEffect(() => {
        function handleresize() {
            setscreenWidtth(window.innerWidth);
        }
        window.addEventListener("resize", handleresize);


        return () => {
            window.removeEventListener("resize", handleresize);
        }

    }, [window.innerWidth])


    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [200, 600]);

    return (
        <section className='AboutScreen'>
            {screenWidtth > 900 ? <motion.h1 style={{x}} >ABOUT ME</motion.h1>
            : <h1>ABOUT ME</h1>}
            <h2>Crafting user friendly and aesthetic UI designs is not just my profession, it's my passion.</h2>
        </section>
    )
}

export default AboutScreen