import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';
import screen1 from "../assets/screenshots/roomsyscreen1.png"
import screen2 from "../assets/screenshots/roomsyscreen2.png"
import screen3 from "../assets/screenshots/roomsyscreen3.png"

function RoomsyProject() {

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
      <div className="roomsy_background"></div>
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
        <div class="text roomsy-text">
          <motion.p
            class="subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
          >Web App</motion.p>

          <motion.h1
            class="roomsytitle title"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
          >
            Roomsy
          </motion.h1>
          <motion.p
            class="desc"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 2.8, ease: 'easeInOut' }}
          >
            Roomsy is a streamlined web application dedicated to simplifying the booking process for accommodations. Whether you're looking for a hotel room, vacation rental, or any other lodging, Roomsy offers a user-friendly platform that allows users to search, compare, and book a wide range of options with ease.
          </motion.p>
          <motion.a href="https://roomsy-v2.vercel.app/" target='_blank'
            class="readmore roomsyreadmore"
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

export default RoomsyProject