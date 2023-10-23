import { useEffect, useState } from 'react'
import '../App.css'
import ParticlesBackground from '../components/ParticlesBackground'
import Cursor from '../widgets/Cursor'
import LandingScreen from '../screens/LandingScreen'
import AboutScreen from '../screens/AboutScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
import SkillsScreen from '../screens/SkillsScreen'
import ContactScreen from '../screens/ContactScreen'




function MainPage() {
    const [cursorVariant, setcursorVariant] = useState("default")

    const textEnter = () => {
        setcursorVariant("text")
    }

    const textLeave = () => {
        setcursorVariant("default")
    }


    
    return (
        <>
            <ParticlesBackground></ParticlesBackground>
            <Cursor cursorVariant={cursorVariant} setcursorVariant={setcursorVariant}></Cursor>
            <LandingScreen textEnter={textEnter} textLeave={textLeave}></LandingScreen>
            <AboutScreen></AboutScreen>
            <ProjectsScreen textEnter={textEnter} textLeave={textLeave}></ProjectsScreen>
            <SkillsScreen></SkillsScreen>
            <ContactScreen textEnter={textEnter} textLeave={textLeave}></ContactScreen>
        </>)
}

export default MainPage