import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NftSpecs.css'
import NftSpecsCards from './NftSpecsCards';

function NftSpecs() {
  return (
    <Container fluid className='minting-nft-specs-container'>
        <Row className='nft-specs-row'>
            <Col className='nft-specs-user-col' lg={8}>
                <h5 className='nft-user-heading'>PUBLIC MINT IS LIVE</h5>
                <NftSpecsCards/> 
            </Col>
            <Col className='nft-specs-admin-col' lg={4}></Col>
        </Row>
    </Container>
  )
}

export default NftSpecs