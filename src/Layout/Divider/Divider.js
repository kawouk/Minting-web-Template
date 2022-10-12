import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiCircle} from 'react-icons/bi';
import './Divider.css';

function Divider() {
  return (
    <Container fluid className='divider-container'>
        <Row className='divider-row'>
            <Col className='divider-col-space' xs={5}></Col>
            <Col className='divider-col-img' xs={2}>
                <div className='divider-sub-container'>
                    <BiCircle className='divider-icon'/>
                    <div className='divider-square-container'></div>
                    <BiCircle className='divider-icon'/>
                </div>
            </Col>
            <Col className='divider-col-space' xs={5}></Col>
        </Row>
    </Container>
  )
}

export default Divider