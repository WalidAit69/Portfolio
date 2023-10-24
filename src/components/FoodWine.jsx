import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';
import screen1 from "../assets/screenshots/foodwine-screen1.png";
import screen2 from "../assets/screenshots/foodwine-screen2.png";
import screen3 from "../assets/screenshots/foodwine-screen3.png";


function FoodWine() {

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
            <div className="foodwine_background"></div>
            <div className="foodwine_first_layer"></div>
            <div className="foodwine_second_layer"></div>
            <div className="foodwine_third_layer"></div>

            <motion.hr
                class="border-bottom"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, delay: 1.4, ease: 'easeInOut' }}
            ></motion.hr>

            <div className="content foodwine">
                <div class="text">
                    <motion.p
                        class="subtitle"
                        style={{ color: "black" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >Web App</motion.p>

                    <motion.h1
                        class="foodwinetitle title"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                    >
                        Food&Wine
                    </motion.h1>
                    <motion.p
                        class="desc"
                        style={{ color: "black" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >
                        FOOD&WINE is a cutting-edge culinary platform that brings together the best of food and wine.                    </motion.p>
                    <motion.a href="https://foodwine-v1.vercel.app/" target='_blank'
                        class="readmore foodwinereadmore"
                        style={{ color: "black", borderBottomColor: "#000" }}
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

export default FoodWine