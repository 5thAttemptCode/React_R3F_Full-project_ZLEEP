import React, { useEffect, useRef } from 'react'
import './style.css'
import gsap from 'gsap'


const TextBox = (props) => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.from(boxRef.current, {
        opacity: 0,
        duration: 2,
        })
    }, [])

    return <div ref={boxRef} className="text-box scene-box">
        <div>
            {props.h1 !=='' && <h1>{props.h1}</h1>}
            {props.h2 !=='' && <h2>{props.h2}</h2>}
            {props.p !=='' && <p>{props.p}</p>}
        </div>
    </div>
}

export default TextBox