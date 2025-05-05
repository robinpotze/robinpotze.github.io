import React from "react";

import RAD_CRCL from "./RAD_CRCL";

import '../RAD_GRID.css';

export default function RAD_GRID_CRCL() {
    return (
        <div className="rad-grid" id="rad-grid-crcl">
            <RAD_CRCL value={90} />
            <RAD_CRCL value={60} />
            <RAD_CRCL value={45} />
            <RAD_CRCL value={180} />
            <RAD_CRCL value={150} />
            <RAD_CRCL value={135} />
            <RAD_CRCL value={360} />
            <RAD_CRCL value={300} />
            <RAD_CRCL value={270} />
        </div>
    );
};