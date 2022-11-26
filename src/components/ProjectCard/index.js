import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {

    return (
       <Card>
        <Card.Img variant="top" src={`./Image/projects/${props.imgRef}.png`} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
          {props.Text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href= {props.buttonHref}>Try it, today!</Button>
        </Card.Footer>
      </Card> 
    );
}

export default ProjectCard;