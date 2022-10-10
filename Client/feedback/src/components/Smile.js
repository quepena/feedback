import React from 'react'

const Smile = (props) => {
    return (
        <svg id={props.id} viewBox="0 0 200 200" width={props.size} height={props.size} >
            <circle cx="100" cy="100" fill={props.color} r="78"/>
            <g>
                <circle cx="60" cy="82" r="6" fill='white' />
                <circle cx="60" cy="100" r="15" fill={props.color} />
                <circle cx="80" cy="82" r="6" fill='white' />
                <circle cx="80" cy="100" r="15" fill={props.color} />
                <circle cx="70" cy="110" r="10" fill="white" />
                <circle cx="70" cy="100" r="12" fill={props.color} />
                <rect display="none" x="95" y="23" width="200" height="155" fill={props.color} />
            </g>
        </svg>
    )
}

export default Smile