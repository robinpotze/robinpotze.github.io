import randomNumberGenerator from '@hooks/randomNumberGenerator';

import RAD_TXT from "./RAD_TXT";

import '../RAD_GRID.css';

export default function RAD_GRID_TXT() {
    return (
        <div className="rad-grid" id="rad-grid-txt">
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
            <RAD_TXT value={randomNumberGenerator(45, 360)} />
        </div>
    );
};