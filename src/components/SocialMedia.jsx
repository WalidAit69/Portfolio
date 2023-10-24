import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';


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
                <div class="text socialmedia-text">
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

                    <motion.div className='accounts'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 3, ease: 'easeInOut' }}>
                        <h3>Use this demo account to sign in</h3>
                        <h4>Email : demo@gmail.com</h4>
                        <h4>Password : demodemo</h4>
                    </motion.div>

                </div>

                <motion.div
                    class="img-1"
                    initial={{ width: 0 }}
                    animate={{ width: "450px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/b1a02aa5-54ac-4e00-823d-8a18e24a187c/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-2"
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/83ff556a-00be-4c7b-9d55-ae0d51e1ec75/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-3"
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/8b049f00-4fc1-4fb0-86a7-0a834512d7b1/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

            </div>

        </section>
    )
}

export default SocialMedia