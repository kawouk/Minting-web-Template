import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import './Minting.css';

function Minting() {
  const navigate = useNavigate();
  return (
    <Container fluid className='minting-container'>
        <Row className='minting-row'>
            <Col xs={1}></Col>
            <Col className='minting-col-content' lg={5}>
                <div className='minting-conent-container'>
                    <h1 className='minting-title'>How to mint</h1>
                    <p className='minting-description'>As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
                    <p className='minting-description'>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
                    <p className='minting-description'>Curabitur pharetra velit eget dignissim varius. In vulputate elit at tortor pellentesque, non pulvinar neque consequat. Aenean tristique odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat. Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget neque bibendum, eget euismod justo mollis.</p>
                    <p className='minting-description'>Donec tristique porttitor sem, eget fermentum elit varius nec. Donec ut orci ipsum. Morbi efficitur felis eget dapibus fermentum. Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue odio commodo at. Cras ante enim, sodales at pretium et, tempus at libero.</p>
                    <div className='nav-wallet mint-btn' onClick={()=> navigate('/minting')}>
                        HOW TO MINT
                    </div>
                </div>
            </Col>
            <Col className='minting-col-img'lg={5}>
                <Row className='minting-exp-row'>
                    <Col className='minting-exp-col-img'xs={6}>
                        <div className='minting-exp-container'>
                            <div className='minting-exp-sub-container'>
                                <h1 className='minting-exp-step-heading'>01</h1>
                                <p className='minting-exp-description'>CONNECT YOUR WALLET</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='minting-exp-col-img'xs={6}>
                        <div className='minting-exp-container'>
                            <div className='minting-exp-sub-container'>
                                <h1 className='minting-exp-step-heading'>02</h1>
                                <p className='minting-exp-description'>SELECT YOUR QUANTITY</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='minting-exp-col-img'xs={6}>
                        <div className='minting-exp-container'>
                            <div className='minting-exp-sub-container'>
                                <h1 className='minting-exp-step-heading'>03</h1>
                                <p className='minting-exp-description'>CONFIRM THE TRANSACTION</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='minting-exp-col-img'xs={6}>
                        <div className='minting-exp-container'>
                            <div className='minting-exp-sub-container'>
                                <h1 className='minting-exp-step-heading'>04</h1>
                                <p className='minting-exp-description'>RECEIVE YOUR NFT’S</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>
  )
}

export default Minting