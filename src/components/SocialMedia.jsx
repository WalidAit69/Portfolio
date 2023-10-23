import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';
import screen1 from "../assets/screenshots/SocialScreen1.png";
import screen2 from "../assets/screenshots/SocialScreen2.png";
import screen3 from "../assets/screenshots/SocialScreen3.png";


function SocialMedia() {

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            width: '100%',
            left: '0%',
        });

    }, [controls]);

    return (
        <section className='Projects_page'>
            <div className="socialmedia_background"></div>
            <div className="roomsy_first_layer"></div>
            <div className="roomsy_second_layer"></div>
            <div className="roomsy_third_layer"></div>

            <motion.hr
                class="border-bottom"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, delay: 1.4, ease: 'easeInOut' }}
            ></motion.hr>

            <div className="content">
                <div class="text">
                    <motion.p
                        class="subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >Web App</motion.p>

                    <motion.h1
                        class="socialmediatitle title"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                    >
                        Social Media
                    </motion.h1>
                    <motion.p
                        class="desc"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >
                        social media app is a modern web application that creates a feature-rich and interactive platform for social networking.
                    </motion.p>
                    <motion.a href="https://green-social-media.vercel.app/" target='_blank'
                        class="readmore socialreadmore"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >Live Demo</motion.a>

                </div>

                <motion.div
                    class="img-1"
                    initial={{ width: 0 }}
                    animate={{ width: "450px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={screen1} alt="" />
                </motion.div>

                <motion.div
                    class="img-2"
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={screen2} alt="" />
                </motion.div>

                <motion.div
                    class="img-3"
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={screen3} alt="" />
                </motion.div>

            </div>

        </section>
    )
}

export default SocialMedia