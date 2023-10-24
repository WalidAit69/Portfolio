import React, { useEffect, useRef, useState } from 'react';
import "./ProjectsScreen.css";
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Roomsy1 from "../assets/mockups/Roomsy-Mockup1.png";
import Roomsy2 from "../assets/mockups/Roomsy-Mockup2.png";
import Buletin1 from "../assets/mockups/BuletinMockup1.png";
import Buletin2 from "../assets/mockups/BuletinMockup2.png";
import foodwine1 from "../assets/mockups/foodwinemockup1.png";
import foodwine2 from "../assets/mockups/foodwinemockup2.png";
import social1 from "../assets/mockups/SocialMockup1.png";
import social2 from "../assets/mockups/SocialMockup2.png";



function ProjectsScreen({ textEnter, textLeave }) {

    const navigate = useNavigate();

    const ref1 = useRef(null);
    const isref1Inview = useInView(ref1);

    const ref2 = useRef(null);
    const isref2Inview = useInView(ref2);

    const ref3 = useRef(null);
    const isref3Inview = useInView(ref3);

    const ref4 = useRef(null);
    const isref4Inview = useInView(ref4);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isref1Inview) {
            mainControls.start("visible")
        }
        if (isref2Inview) {
            mainControls.start("visible")
        }
        if (isref3Inview) {
            mainControls.start("visible")
        }
        if (isref4Inview) {
            mainControls.start("visible")
        }

    }, [isref1Inview, isref2Inview, isref3Inview, isref4Inview])

    const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
    const [randomText1, setRandomText1] = useState("");
    const [randomText2, setRandomText2] = useState("");
    const [randomText3, setRandomText3] = useState("");
    const [randomText4, setRandomText4] = useState("");

    const [background, setbackground] = useState(false);


    const randomizeText = (originalText, setRandomText) => {
        let interactions = 0;
        const interval = setInterval(() => {
            const randomizedText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < interactions) {
                        return originalText[index];
                    }
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                })
                .join("");
            setRandomText(randomizedText);

            if (interactions >= originalText.length) {
                clearInterval(interval);
            }
            interactions += 1 / 3;
        }, 30);
    };

    function handleClick(e) {
        setbackground(true);
        document.body.style.overflowY = 'hidden';
        if (e === "Roomsy") {
            setTimeout(() => {
                navigate('/projects/Roomsy')
                document.body.style.overflowY = 'auto';
            }, 1500)
        }
        if (e === "Buletin") {
            setTimeout(() => {
                navigate('/projects/Buletin')
                document.body.style.overflowY = 'auto';
            }, 1500)
        }
        if (e === "Food&Wine") {
            setTimeout(() => {
                navigate('/projects/Food&Wine')
                document.body.style.overflowY = 'auto';
            }, 1500)
        }
        if (e === "socialmedia") {
            setTimeout(() => {
                navigate('/projects/socialmedia')
                document.body.style.overflowY = 'auto';
            }, 1500)
        }
    }

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 0]);

    return (
        <>
            <section className={'Projects_Page allprojects'}>

                {isref1Inview && <div className={`layer1 ${background && 'layer1clicked'}`}></div>}
                {isref1Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: 2, delay: .5 }} className={`left ${background && 'Projects_Page_roomsy'}`}>
                    <h4>01</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={(e)=>handleClick("Roomsy")} className='project_name' onMouseOver={() => randomizeText("roomsy", setRandomText1)} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText1 || "roomsy"}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack • <span> React js / node js</span></h2>
                        <p>web application dedicated to simplifying the booking process for accommodations.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}


                {isref2Inview && <div className={`layer2 ${background ? 'layer2clicked' : ''}`} ></div>}
                {isref2Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className={`left ${background && 'Projects_Page_bulettin'}`}>
                    <h4>02</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={(e)=>handleClick("Buletin")} className='project_name' onMouseOver={() => randomizeText("Buletin", setRandomText2)} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText2 || "Buletin"}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack • <span> React js / node js</span></h2>
                        <p>Buletin is a dynamic and user-friendly web application designed to serve as a versatile platform for blogging and delivering the latest news.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}

                {isref3Inview && <div className={`layer3 ${background && "layer3clicked"}`}></div>}
                {isref3Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className='left'>
                    <h4>03</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={(e)=>handleClick("Food&Wine")} className='project_name foodwine' onMouseOver={() => randomizeText("FoodWine", setRandomText3)} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText3 || 'Food&Wine'}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack • <span> React js / node js</span></h2>
                        <p>FOOD&WINE is a cutting-edge culinary platform that brings together the best of food and wine.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}

                {isref4Inview && <div className={`layer4 ${background && "layer4clicked"}`}></div>}
                {isref4Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className='left'>
                    <h4>04</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={(e)=>handleClick("socialmedia")} className='project_name socialmedia' onMouseOver={() => randomizeText("SocialMedia", setRandomText4)} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText4 || 'SocialMedia'}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack • <span> React js / node js</span></h2>
                        <p>social media app is a modern web application that creates a feature-rich and interactive platform for social networking.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}

                <div className='projects'>
                    <motion.div style={{ x }} className='first_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
                        </div>
                        <div ref={ref1} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy2} alt="" />
                        </div>
                    </motion.div>

                    <motion.div className='second_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={Buletin1} alt="" />
                        </div>
                        <div ref={ref2} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={Buletin2} alt="" />
                        </div>
                    </motion.div>

                    <motion.div className='third_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={foodwine1} alt="" />
                        </div>
                        <div ref={ref3} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={foodwine2} alt="" />
                        </div>
                    </motion.div>

                    <motion.div className='third_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={social1} alt="" />
                        </div>
                        <div ref={ref4} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={social2} alt="" />
                        </div>
                    </motion.div>
                </div>



            </section>

            <section className={`Projects_Page ${background ? 'bulettin_animate' : ''}`}>
            </section>
        </>
    )
}

export default ProjectsScreen