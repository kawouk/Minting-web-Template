import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './About.css'

function About() {
  return (
    <Container fluid className='about-container'>
      <Row className='about-row'>
        <Col className='about-img-col' md={6}>
        
        </Col>
        <Col className='about-content-col' md={6}>
          <div className='about-content-container'>
            <h1 className='about-title'>The rise of the legends</h1>
            <p className='about-description'>As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
            <p className='about-description'>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
            <p className='about-description'>Curabitur pharetra velit eget dignissim varius. In vulputate elit at tortor pellentesque, non pulvinar neque consequat. Aenean tristique odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat. Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget neque bibendum, eget euismod justo mollis.</p>
            <p className='about-description'>Donec tristique porttitor sem, eget fermentum elit varius nec. Donec ut orci ipsum. Morbi efficitur felis eget dapibus fermentum. Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue odio commodo at. Cras ante enim, sodales at pretium et, tempus at libero.</p>
          </div>
          <div className='nav-wallet discord-btn'>
            FIND US ON DISCORD
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About