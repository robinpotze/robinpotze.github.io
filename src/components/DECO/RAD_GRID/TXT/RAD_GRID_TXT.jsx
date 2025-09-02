import React from "react";

import RAD_TXT from "./RAD_TXT";

import '../RAD_GRID.css';

export default function RAD_GRID_TXT() {
    return (
        <div className="rad-grid" id="rad-grid-txt">
            <RAD_TXT value="090" />
            <RAD_TXT value="060" />
            <RAD_TXT value="045" />
            <RAD_TXT value="180" />
            <RAD_TXT value="150" />
            <RAD_TXT value="135" />
            <RAD_TXT value="360" />
            <RAD_TXT value="300" />
            <RAD_TXT value="270" />
        </div>
    );
};