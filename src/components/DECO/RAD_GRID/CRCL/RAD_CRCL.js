import React from 'react';
import PropTypes from 'prop-types';

export default function RAD_CRCL({ value }) {
    const radius = 5;
    const width = 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / 360) * circumference

    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="rad-circle"
            id={'rad-circle-' + value}
        >
            <circle
                cx="6"
                cy="6"
                r={radius}
                fill="none"
                stroke="var(--c-TRNS)"
                strokeWidth={width}
            />
            <circle
                cx="6"
                cy="6"
                r={radius}
                fill="none"
                stroke="var(--c-LGHT)"
                strokeWidth={width}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                transform={`rotate(${value} 6 6)`}
            />
        </svg>
    );
};

RAD_CRCL.propTypes = {
    value: PropTypes.number.isRequired,
};