import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MintingCol.css';
import NftMint from './Components/NftMint/NftMint';
import NftSpecs from './Components/NftSpecs/NftSpecs';

function MintingCol() {
  return (
    <Container fluid className='minting-collection-container'>
        <Row className='minting-nft-row'>
            <Col xs={1}></Col>
            <Col lg={9} className='minting-nft-col'>
                <NftMint />
            </Col>
            <Col xs={2}></Col>
        </Row>
        <Row className='minting-nft-specs-row'>
        <Col xs={1}></Col>
            <Col lg={9} className='minting-nft-col'>
                <NftSpecs/>
            </Col>
            <Col xs={2}></Col>
        </Row>
    </Container>
  )
}

export default MintingCol