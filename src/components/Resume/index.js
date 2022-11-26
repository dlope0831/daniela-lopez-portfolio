import React from "react";
import { Button } from "react-bootstrap";

import resumeDoc from "../../assets/files/Daniela Lopez - Resume.pdf"
function Resume () {
    return (
        <div>
        <h3 id="resume">Resume</h3>
        <p>Feel free to download my resume by pressing the following link below. </p>
        <a href={resumeDoc} download="Daniela-Lopez-Resume" target='_blank'>
        <Button>Download Here</Button>
        </a>
        </div>
    )
};

export default Resume;