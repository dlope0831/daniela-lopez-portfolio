import React from "react";
import coverImage from "../../assets/images/cover/coverImage.png"

    function About () {
        return (
        <div className="container mt-5">
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <h2 className="mb-3" id="about">About Me</h2>
            <p>
                A highly motivated individual working towards a certification as a full-stack web developer. 
            A passion for learning and efficiency has delivered innovative solutions. Thriving in high-paced environments 
            collaborating with a team or working individually. Strong troubleshooting 
            and problem-solving skills with an analytical mindset.
            </p> 
        </div>
        );
    }
        
        
    export default About;
