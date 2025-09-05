import PropTypes from 'prop-types';

import RAD_GRID_CRCL from './CRCL/RAD_GRID_CRCL';
import RAD_GRID_TXT from './TXT/RAD_GRID_TXT';

import './RAD_GRID.css';

export default function RAD_GRID({ type }) {

    switch (type) {
        case 'CRCL':
            return <RAD_GRID_CRCL />;
        case 'TXT':
            return <RAD_GRID_TXT />;
        default:
            return null;
    }
};

RAD_GRID.propTypes = {
    type: PropTypes.string.isRequired,
};