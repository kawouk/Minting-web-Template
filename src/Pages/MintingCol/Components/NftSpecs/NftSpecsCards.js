import React ,{ useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NftSpecsCards() {
  const  [quantity,setQuantity]=useState(1);
  const  [price,setPrice]=useState(2.25);
  const  [totalPrice,setTotalPrice]=useState(2.25);
  const  [remaining,setRemaining]=useState(344);
  const  [totalNfts,setTotalNfts]=useState(999);
  const title = [
    {
        t: 'PRICE',
        number: price,
        unit: 'ETH', 
    },
    {
        t: 'REMAINING',
        number: remaining + '/' +totalNfts ,
        unit: '', 
    },
    {
        t: 'QUANTITY',
        number: quantity,
        unit: '', 
    },
    {
        t: 'TOTAL PRICE',
        number: totalPrice,
        unit: 'ETH + GAS', 
    },
  ];
  useEffect(() => {
    setTotalPrice(price*quantity);
  },[quantity]);
  return (
    <Container fluid >
        <Row>
        {title.map((card,index)=>{
            return (
                <Col xs={6} className='nft-spec-sub-col' key={index} >
                    
                    <div className='nft-spec-sub-container'>
                        <h5 className='nft-spec-sub-title' >{card.t}</h5>
                        <div className='nft-spec-number-container'>
                            <button onClick={() => {
                            if(quantity != 1){
                                setQuantity(quantity-1)
                            }
                            }} 
                            id={'minus-btn-' + index }
                            className='nft-spec-btn'
                            >-</button>
                            <h4 className='nft-spec-number'>{card.number}  {card.unit}</h4>

                            <button 
                            onClick={() => {setQuantity(quantity+1)}}
                            id={'plus-btn-'+ index }
                            className='nft-spec-btn'
                            >+</button>
                        </div>
                        
                    </div>
                </Col>
            )
        })}
        <div className='mint-now mint-btn'>
            MINT NOW
        </div>
        </Row>
    </Container>
  )
}

export default NftSpecsCards