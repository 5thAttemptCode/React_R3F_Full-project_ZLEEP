import React from 'react'
import './style.css'


const TextBox = (props) => {

    return <div className="text-box scene-box">
        <div>
            {props.h1 !=='' && <h1>{props.h1}</h1>}
            {props.h2 !=='' && <h2>{props.h2}</h2>}
            {props.p !=='' && <p>{props.p}</p>}
        </div>
    </div>
}

export default TextBox