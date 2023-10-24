import React, { useEffect, useRef, useState } from 'react';
import './SkillsScreen.css';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

function SkillsScreen() {

    const ref1 = useRef(null);
    const isref1Inview = useInView(ref1);

    const ref2 = useRef(null);
    const isref2Inview = useInView(ref2);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isref1Inview) {
            mainControls.start("visible")
            mainControls.start("test1")
        }
        if (isref2Inview) {
            mainControls.start("visible")
        }

    }, [isref1Inview, isref2Inview])

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
    const x = useTransform(scrollYProgress, [.5, 1], [300, 200]);


    return (
        <section className='SkillsScreen'>
            {screenWidtth > 900 ? <motion.h1 style={{ x }} >SKILLS</motion.h1>:
            <h1>SKILLS</h1>}
            <div className='skills_container'>

                <div className="skills">
                    <div ref={ref1} className="skill">
                        {isref1Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: 1, delay: .5 }} className="skill">
                            <ul>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .5 }}>HTML & CSS</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .7 }}>JavaScript</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .9 }}>React</motion.li>
                            </ul>
                        </motion.div>}
                    </div>

                    <div ref={ref2} className="skill">
                        {isref2Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className="skill">
                            <ul>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .5 }}>Node js</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .7 }}>Express</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .9 }}>PHP</motion.li>
                            </ul>
                        </motion.div>}

                    </div>

                </div>

                <div className="skills">
                    <div ref={ref1} className="skill">
                        {isref1Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className="skill">
                            <ul>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .5 }}>Project Management</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .7 }}>Visual Communication</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .9 }}>Concept development</motion.li>
                            </ul>
                        </motion.div>}

                    </div>
                    <div ref={ref2} className="skill">
                        {isref2Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className="skill">
                            <ul>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .5 }}>MongoDB</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .7 }}>MySQL</motion.li>
                                <motion.li variants={{ test: { x: -50 }, test1: { x: 0 } }} initial="test" animate={mainControls} transition={{ duration: 1, delay: .9 }}>Firebase</motion.li>
                            </ul>
                        </motion.div>}

                    </div>
                </div>

            </div>
        </section>)
}

export default SkillsScreen