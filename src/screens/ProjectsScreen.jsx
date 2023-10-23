import React, { useEffect, useRef, useState } from 'react';
import "./ProjectsScreen.css";
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Roomsy1 from "../assets/mockups/Roomsy-Mockup1.png";
import Roomsy2 from "../assets/mockups/Roomsy-Mockup1.png";

function ProjectsScreen({ textEnter, textLeave }) {

    const navigate = useNavigate();

    const ref1 = useRef(null);
    const isref1Inview = useInView(ref1);

    const ref2 = useRef(null);
    const isref2Inview = useInView(ref2);

    const ref3 = useRef(null);
    const isref3Inview = useInView(ref3);

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

    }, [isref1Inview, isref2Inview, isref3Inview])

    const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
    const [randomText1, setRandomText1] = useState("");
    const [randomText2, setRandomText2] = useState("");
    const [randomText3, setRandomText3] = useState("");
    const [roomsy, setroomsy] = useState("roomsy");
    const [Buletin, setest] = useState("Buletin");
    const [FoodWine, setello] = useState("Food&Wine");

    const [background, setbackground] = useState(false);


    const handleMouseOver = () => {
        let interactions = 0;
        const interval = setInterval(() => {
            const randomizedText = roomsy
                .split("")
                .map((letter, index) => {
                    if (index < interactions) {
                        return roomsy[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            setRandomText1(randomizedText);

            if (interactions >= roomsy.length) clearInterval(interval)
            interactions = interactions + 1 / 3;
        }, 30);
    };

    const handlesecondMouseOver = () => {
        let interactions = 0;
        const interval = setInterval(() => {
            const randomizedText = Buletin
                .split("")
                .map((letter, index) => {
                    if (index < interactions) {
                        return Buletin[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            setRandomText2(randomizedText);

            if (interactions >= Buletin.length) clearInterval(interval)
            interactions = interactions + 1 / 3;
        }, 30);
    };

    const handlethirdMouseOver = () => {
        let interactions = 0;
        const interval = setInterval(() => {
            const randomizedText = FoodWine
                .split("")
                .map((letter, index) => {
                    if (index < interactions) {
                        return FoodWine[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            setRandomText3(randomizedText);

            if (interactions >= FoodWine.length) clearInterval(interval)
            interactions = interactions + 1 / 3;
        }, 30);
    };

    function handleRoomsyClick() {
        setbackground(true);
        document.body.style.overflowY = 'hidden';


        setTimeout(() => {
            navigate('/projects/Roomsy')
            document.body.style.overflowY = 'auto';
        }, 2000)
    }

    function handleBulletinClick() {
        setbackground(true);
        document.body.style.overflowY = 'hidden';


        setTimeout(() => {
            navigate('/projects/Buletin')
            document.body.style.overflowY = 'auto';
        }, 2000)
    }

    function handlefoodandwineClick() {
        setbackground(true);
        document.body.style.overflowY = 'hidden';


        setTimeout(() => {
            navigate('/projects/Food&Wine')
            document.body.style.overflowY = 'auto';
        }, 2000)
    }

    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress , [0,1] , [0,0]);

    return (
        <>
            <section className={'Projects_Page'}>

                {isref1Inview && <div className={`layer1 ${background && 'layer1clicked'}`}></div>}
                {isref1Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: 2, delay: .5 }} className={`left ${background && 'Projects_Page_roomsy'}`}>
                    <h4>01</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={handleRoomsyClick} className='project_name' onMouseOver={handleMouseOver} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText1 || roomsy}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack Developer • <span> React js / node js</span></h2>
                        <p>Web app project to give workplace insights using indoor localisation.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}


                {isref2Inview && <div className={`layer2 ${background ? 'layer2clicked' : ''}`} ></div>}
                {isref2Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className={`left ${background && 'Projects_Page_bulettin'}`}>
                    <h4>02</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={handleBulletinClick} className='project_name' onMouseOver={handlesecondMouseOver} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText2 || Buletin}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack Developer • <span> React js / node js</span></h2>
                        <p>Web app project to give workplace insights using indoor localisation.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}

                {isref3Inview && <div className={`layer3 ${background && "layer3clicked"}`}></div>}
                {isref3Inview && <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={mainControls} transition={{ duration: .5, delay: .5 }} className='left'>
                    <h4>03</h4>

                    <div className='project_info'>
                        <div className='project_name_arrow'>
                            <h1 onClick={handlefoodandwineClick} className='project_name foodwine' onMouseOver={handlethirdMouseOver} onMouseEnter={textEnter} onMouseLeave={textLeave}>{randomText3 || 'Food&Wine'}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <h2>Full-Stack Developer • <span> React js / node js</span></h2>
                        <p>Web app project to give workplace insights using indoor localisation.</p>
                    </div>

                    <h3>Web App</h3>
                </motion.div>}

                <div className='projects'>
                    <motion.div style={{x}} className='first_project project'>
                        <div ref={ref1} className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
                        </div>
                        <div className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy2} alt="" />
                        </div>
                    </motion.div>

                    <motion.div className='second_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
                        </div>
                        <div ref={ref2} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
                        </div>
                    </motion.div>

                    <motion.div className='third_project project'>
                        <div className={`phone ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
                        </div>
                        <div ref={ref3} className={`phone2 ${background ? "phone_clicked" : ""}`}>
                            <img src={Roomsy1} alt="" />
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