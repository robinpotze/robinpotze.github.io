import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function randomNumberGenerator(min, max) {
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
        }, 856);
        return () => clearInterval(interval);
    }, [min, max]);

    return randomNumber;
}

randomNumberGenerator.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}