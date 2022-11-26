import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardImage from "../../assets/images/SkyNet-Watch.png"

function Projects() {
  <h3 id="projects">Projects</h3> 
  return (
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={cardImage} />
        <Card.Body>
          <Card.Title>SkyNet Watch</Card.Title>
          <Card.Text>
          Create valuable connections with your neighbors by creating post of upcoming events, 
          commenting on other users posts, and interacting with others - all in real time.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href='https://polar-atoll-04436.herokuapp.com/'>Try it, today!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
  
}

export default Projects;