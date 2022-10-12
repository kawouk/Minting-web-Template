import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Statistics.css';

function Statistics() {
  return (
    <Container fluid className="statistics-container">
        <Row className="statistics-row">
            <Col xs={1}></Col>
            <Col xs={10}>
                <Row className="statistics-sub-row">
                    <Col className="stat-col" xl={3} lg={6} md={6} sm={6} xs={12}>
                        <div className='items-container'>
                            <h1 className="statistics-title">9999</h1>
                            <h6 className="statistics-description">Total Items</h6>
                        </div>
                    </Col>
                    <Col className='stat-col' xl={3} lg={6} md={6} sm={6} xs={12}>
                        <div className='stat-other-container  '>
                            <h1 className="statistics-title">3.9k+</h1>
                            <h6 className="statistics-description">Total Owners</h6>
                        </div>  
                    </Col>
                    <Col className='stat-col' xl={3} lg={6} md={6} sm={6} xs={12}>
                        <div className='stat-other-container remove'>
                            <h1 className="statistics-title">2.4</h1>
                            <h6 className="statistics-description">Floor Price(ETH)</h6>
                        </div>
                    </Col>
                    <Col className='stat-col' xl={3} lg={6} md={6} sm={6} xs={12}>
                        <div className='stat-other-container'>
                            <h1 className="statistics-title">144k+</h1>
                            <h6 className="statistics-description">Volume Traded (ETH)</h6>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>
  )
}

export default Statistics