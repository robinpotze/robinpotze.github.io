import randomNumberGenerator from '@hooks/randomNumberGenerator';

import RAD_CRCL from "./RAD_CRCL";

import '../RAD_GRID.css';

export default function RAD_GRID_CRCL() {
    return (
        <div className="rad-grid" id="rad-grid-crcl">
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
            <RAD_CRCL value={randomNumberGenerator(45, 360)} />
        </div>
    );
};