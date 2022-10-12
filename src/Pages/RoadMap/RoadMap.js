import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Divider from '../../Layout/Divider/Divider';
import Footstep from './Components/Footstep/Footstep';
import RoadSlider from './Components/RoadSlider/RoadSlider';
import './RoadMap.css'



function RoadMap() {
  return (
    <Container fluid className='roadmap-container'>
      <Divider/>
      <Row ClassName='roadmap-title-row'>
        <h1 className='roadmap-title'>ROADMAP</h1>
      </Row>
      <Row className='roadmap-foot-step'>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Footstep/>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row className='roadmap-road-slider'>
        <Col xs={1}></Col>
        <Col xs={10}>
          <RoadSlider/>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

export default RoadMap