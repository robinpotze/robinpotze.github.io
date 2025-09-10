import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function DashLine({ colour }) {

    const [lineWidth, setLineWidth] = useState(100)

    useEffect(() => {
        const line = document.getElementById("header-line");
        return () => {
            setLineWidth(line.getBoundingClientRect().width)
        }
    })

    return (
        <svg width="100%" height="1" viewBox={`0 0 100% 1`} id='header-line'>
            <path d={`M0 1 H${lineWidth}`} stroke={colour} strokeWidth="1" strokeDasharray="32 128 128 32 128 32 128 128" fill="none" />
        </svg>
    );
}

DashLine.propTypes = {
    colour: PropTypes.string.isRequired,
}