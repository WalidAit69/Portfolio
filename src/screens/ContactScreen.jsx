import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import "./ContactScreen.css"


function ContactScreen({textEnter , textLeave}) {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [.5, 1], [-1100, 700]);

    function openMail(){
        const mailtoLink = `mailto:aitwalid2000@gmail.com`;

        // Open the default email client
        window.location.href = mailtoLink;
    }

    return (
        <section className='ContactScreen'>
            <motion.h1 style={{ x }} >Cantact</motion.h1>
            <div className='socials'>
                <div>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='mailto:aitwalid2000@gmail.com' target='_blank'><img src="https://sureshmurali.github.io/mail.6c167f77.svg" alt="Mail" className="sc-kjoXOD NCkNJ" /></a>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="https://www.linkedin.com/in/walidaitharma/" target="_blank"><img src="https://sureshmurali.github.io/linkedin.a72ab8af.svg" alt="Linkedin" className="sc-kjoXOD NCkNJ" /></a>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="https://github.com/WalidAit69" target="_blank"><img src="https://sureshmurali.github.io/git.c871808a.svg" alt="Github" className="sc-kjoXOD NCkNJ" /></a>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="https://www.instagram.com/walid_ait/" target="_blank" rel="noopener noreferrer"><img src="https://sureshmurali.github.io/insta.8dcf5a6e.svg" alt="Instagram" className="sc-kjoXOD NCkNJ" /></a>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="https://twitter.com/WaliidAit" target="_blank" rel="noopener noreferrer"><img src="https://sureshmurali.github.io/twitter.59d5f432.svg" alt="Twitter" className="sc-kjoXOD NCkNJ"/></a>
                </div>
            </div>
        </section>)
}

export default ContactScreen