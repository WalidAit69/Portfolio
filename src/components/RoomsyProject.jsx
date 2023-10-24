import React, { useEffect } from 'react';
import "./Projects.css";
import "./Bulletin.css";
import { motion, useAnimation } from 'framer-motion';


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
          <img src="https://ucarecdn.com/5a7ad0be-bf7a-4c63-9013-6fb3e8f4c17e/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
        </motion.div>

        <motion.div
          class="img-2"
          animate={{ width: "300px" }}
          transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
        >
          <img src={"https://ucarecdn.com/ff88663b-ac7d-4895-b384-039769df0823/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
        </motion.div>

        <motion.div
          class="img-3"
          animate={{ width: "300px" }}
          transition={{ duration: 1.0, delay: 2.2, ease: 'easeInOut' }}
        >
          <img src={"https://ucarecdn.com/feb5fbce-8cd3-4aac-82d0-7a99f983719c/-/preview/1000x1000/-/quality/smart/-/format/auto/"} alt="" />
        </motion.div>

      </div>

    </section>
  )
}

export default RoomsyProject