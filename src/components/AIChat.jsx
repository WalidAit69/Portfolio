import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';

function AIChat() {

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
                        AI CHAT
                    </motion.h1>
                    <motion.p
                        class="desc foodwine-desc"
                        style={{ color: "black" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >
                        AI Chat is a web-based chat application powered by advanced artificial intelligence technology. It seamlessly translates messages in real-time, enabling users to communicate effortlessly in multiple languages.                    </motion.p>
                    <motion.a href="https://ai-chat-app-six.vercel.app/" target='_blank'
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
                    <img src={"https://ucarecdn.com/d7be6d3c-f2db-4d2b-9b70-a886eef1aea3/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-2"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/a2ce5823-8068-4611-bd24-17ef63b76963/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-3"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/2f7cb204-f6cf-4c3c-b752-3249e7f69ba8/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

            </div>

        </section>
    )
}

export default AIChat