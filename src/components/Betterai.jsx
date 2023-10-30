import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';


function Betterai() {
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
            <div className="betterai_background"></div>
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
                        Better AI
                    </motion.h1>
                    <motion.p
                        class="desc foodwine-desc"
                        style={{ color: "black" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >
                        Better AI is a versatile web application powered by advanced artificial intelligence technology. It empowers users to effortlessly create images, videos, sounds, code, and engage in natural conversations, making it a dynamic and creative tool for a wide range of applications. Whether you need content generation, multimedia creation, or interactive chatbots, Better AI offers a powerful and user-friendly solution to enhance productivity and creativity
                    </motion.p>
                    <motion.a href="https://better-ai-five.vercel.app/" target='_blank'
                        class="readmore foodwinereadmore"
                        style={{ color: "black", borderBottomColor: "#000" }}
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
                    <img src={"https://ucarecdn.com/de9f1090-8362-47a0-95b8-7575b7c40bfe/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-2"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/1f2cd262-901a-4ed3-8030-96227bcf7608/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-3"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/483071d1-7ca7-4b8d-9955-eaca751362a2/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

            </div>

        </section>
    )
}

export default Betterai