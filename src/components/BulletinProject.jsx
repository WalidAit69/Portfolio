import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';


function BulletinProject() {

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
            <div className="bulletin_background"></div>
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
                <div class="text buletin-text">
                    <motion.p
                        class="subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >Web App</motion.p>

                    <motion.h1
                        class="title bulletintitle"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                    >
                        Bulletin
                    </motion.h1>
                    <motion.p
                        class="desc"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
                    >
                        Buletin is a dynamic and user-friendly web application designed to serve as a versatile platform for blogging and delivering the latest news. <br />
                        It provides an intuitive interface for bloggers and journalists to create and publish content, including articles, opinion pieces, and news updates.
                    </motion.p>
                    <motion.a href="https://buletin-v2.vercel.app/" target='_blank'
                        class="readmore buletinreadmore"
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
                    <img src={"https://ucarecdn.com/763f4f6e-f2a5-4a2d-a2da-a3e8154c7c6b/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-2"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/e4dbe56c-bd0a-4ff4-abad-1e099517611c/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

                <motion.div
                    class="img-3"
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
                >
                    <img src={"https://ucarecdn.com/d9e43e54-ed65-4523-bb96-d735dce74768/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
                </motion.div>

            </div>

        </section>
    )
}

export default BulletinProject