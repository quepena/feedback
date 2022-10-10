import React from 'react'

const Cloud = (props) => {
    return (
        <svg id={props.id} viewBox="0 0 200 200" width={props.size} height={props.size} >
            <circle cx="50" cy="82" r="30" fill={props.color} />
            <circle cx="65" cy="120" r="40" fill={props.color} />
            <circle cx="110" cy="60" r="45" fill={props.color} />
            <circle cx="140" cy="105" r="60" fill={props.color} />
        </svg>
    )
}

export default Cloud