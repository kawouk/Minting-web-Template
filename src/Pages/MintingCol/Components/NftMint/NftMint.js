import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NftMint.css';

function NftMint() {
  return (
    <Container fluid className="NftMintContainer" >
        <Row className='minting-collection-row'>

            <Col className='minting-collection-img-col' lg={7}>

            </Col>
            <Col className='minting-collection-content-col' lg={5}>
                <div className='minting-collection-content-container'>
                    <div className='minting-content-navigation'>
                        <h6 className='minting-nav-title minting-link' >HOME</h6>
                        <span className='minting-navigation-span'>/</span>
                        <h6 className='minting-nav-title minting-link' >COLLECTION</h6>
                        <span className='minting-navigation-span'>/</span>
                        <h6 className='minting-nav-title' >NFT GOD #3</h6>
                    </div>
                    <h1 className='minting-nft-title'>NFT GOD #3</h1>
                    <p className='minting-nft-description'>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero.</p>
                    <p className='minting-nft-description'>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient.</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default NftMint