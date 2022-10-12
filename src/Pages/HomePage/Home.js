import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Components/Slider/Slider';
import Statistics from './Components/Statistics/Statistics';
import About from '../AboutPage/About';
import RoadMap from '../RoadMap/RoadMap';
import Minting from './Components/MintingPage/Minting';
import Divider from '../../Layout/Divider/Divider';
import './Home.css';

function Home() {

  return (
    <Container fluid className='home-container'>
      <Row className='home-row'xs={12} id='home'>
      <Col xs={1}></Col>
      <Col className='home-slider-col' xs={10}>
        <h1 className='home-title'>NFT GODS</h1>
        <div className='home-slider-container'> 
          <Slider/>
        </div>

        <div className='collection-container'>
          <h3 className='collection-description'>
              Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </h3>
          <div className='nav-wallet collection-btn'> SEE WHOLE COlLECTION</div>
        </div>
      </Col>
      <Col xs={1}></Col>
      </Row>
      <Row className='home-statistics-row'>
        <Statistics/>
      </Row>
      <Row className='home-about-row' id='about'>
        <About/>
      </Row>
      <Row className='home-roadmap-row' id='road-map'>
        <RoadMap />
      </Row>
      <Divider/>
      <Row className='home-roadmap-row' id='how-to-mint'>
        <Minting />
      </Row>
    </Container>
  )
}

export default Home