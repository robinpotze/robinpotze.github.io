import React from "react";
import PropTypes from 'prop-types';

export default function RAD_TXT({ value }) {
    return (
        <p className='tech-small' id={'rad-text-' + value}>{value}</p>
    );
};

RAD_TXT.propTypes = {
    value: PropTypes.number.isRequired,
}