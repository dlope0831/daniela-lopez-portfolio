import React from "react";
import coverImage from "../../assets/images/coverImage.png"

function About () {
return (
<section>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    <h3 id="about">About</h3> 
    <h6 id="about">A highly motivated individual working towards a certification as a full-stack web developer. 
    A passion for learning and efficiency has delivered innovative solutions. Thriving in high-paced environments 
    collaborating with a team or working individually. Strong troubleshooting 
    and problem-solving skills with an analytical mindset.</h6> 
</section>
);

}

export default About;