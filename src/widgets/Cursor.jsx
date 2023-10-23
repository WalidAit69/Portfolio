import { useEffect, useState } from 'react'
import { motion } from "framer-motion"


function Cursor({cursorVariant , setcursorVariant}) {

    const [mousePosition, setmousePosition] = useState({
        x: 0,
        y: 0
    });


    useEffect(() => {
        const mouseMove = (e) => {
            setmousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 7,
            y: mousePosition.y - 7,
        },
        text: {
            x: mousePosition.x - 37.5,
            y: mousePosition.y - 37.5,
            height: 75,
            width: 75,
            backgroundColor: "red",
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "tween", ease: "backOut" }}
        ></motion.div>)
}

export default Cursor