import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import cardImage from "../../assets/images/SkyNet-Watch.png"
import ProjectCard from '../ProjectCard';

function Projects() {

  return (
    <div>
      <h3 id="projects">Projects</h3>
    <CardGroup> 
      <ProjectCard
      imgRef = "SkyNet-Watch"
      Title = "SkyNet Watch"
      Text = "Create valuable connections with your neighbors by creating post of upcoming events, commenting on other users posts, and interacting with others - all in real time."
      buttonHref = "https://polar-atoll-04436.herokuapp.com/"
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
    </div>
  );
  
}

export default Projects;