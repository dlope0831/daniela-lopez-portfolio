import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import ProjectCard from '../ProjectCard';

function Projects() {

  return (

    <div className="container mt-5">
    <h2 className="mb-3" id="projects">Portfolio</h2>
    <CardGroup> 
      <ProjectCard
      imgRef = "SkyNet-Watch"
      Title = "SkyNet Watch"
      Text = "Create valuable connections with your neighbors by creating post of upcoming events, commenting on other users posts, and interacting with others - all in real time."
      buttonHref = "https://polar-atoll-04436.herokuapp.com/"
      />
      <ProjectCard
      imgRef = "What-Is-The-Recipe"
      Title = "What is the Recipe?"
      Text = "Our app allows users to explore new recipes from various cuisines. The app will load the top trending video shorts from YouTube based on their search. the app is also mobile responsive, which is great for quick dinner ideas."
      buttonHref = "https://protected-atoll-82762.herokuapp.com/"
      />
      <ProjectCard
      imgRef = "Work-Day-Scheduler"
      Title = "Work Day Scheduler"
      Text = "A productivity app utilized to organize users day and prioritize their task according to deadlines."
      buttonHref = "https://dlope0831.github.io/work-day-scheduler/"
      />
      <ProjectCard
      imgRef = "Social-Network"
      Title = "Social Network"
      Text = "A web application where users can share their thoughts, react to friends thoughts, and create a friend list."
      buttonHref = "https://github.com/dlope0831/social-network"
      />
      
    </CardGroup>
    <CardGroup> 
      <ProjectCard
      imgRef = "Text-Editor-App"
      Title = "Text Editor"
      Text = "A single-page application where users are able to type their thoughts, to-do list, or random facts in a browser online or offline."
      buttonHref = "https://ancient-brushlands-24731.herokuapp.com/"
      />
    
      <ProjectCard
      imgRef = "Regex-Tutorial"
      Title = "URL Regex Tutorial"
      Text = "In this tutorial, developers will learn how the set code was built by using Regular Expression, Regex. This detailed tutorial will build a foundation of Regex knowledge. Following the tutorial, learners will have the knowledge to create their own Regex code."
      buttonHref = "https://gist.github.com/dlope0831/3069f02f2221aea3c9cf4d7996d21b22"
      />
      <ProjectCard
      imgRef = "Readme-Generator"
      Title = "Readme Generator"
      Text = "A command-line application that runs with Node.js that dynamically generates a README.md file based on input about the user’s project."
      buttonHref = "https://github.com/dlope0831/readme-generator"
      /> 
      
    </CardGroup>
    </div>
  );
  
}

export default Projects;