import React from "react";
import coverImage from "../../assets/images/coverImage.png"

function About () {
return (
<section>
    <h1 id="about">Daniela Lopez Portfolio!</h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
);

}

export default About;