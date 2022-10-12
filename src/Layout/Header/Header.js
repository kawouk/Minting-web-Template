import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Header.css";


function Header() {
  const navigate = useNavigate();
  const [element, setElement] = useState("");
  
  useEffect(() => {
    setElement(document.getElementById("nav-bar"));
  }, [element]);

  try {

      element.style.setProperty('--navAfterTrans', '-120%');

    window.onscroll = function () { 
      element.style.setProperty('--navAfterTrans', '0%')
    };
  } catch {}

  console.log(element);

  return (
    <Navbar expand="lg" className="nav-bar" id="nav-bar" fixed="top">
      <Container fluid className="nav-bar-container">
        <Navbar.Brand onClick={() => navigate("/")} href='#home' className='nav-brand'>GOM NFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav-item-container me-auto">
            <Nav.Link className="nav-item" onClick={() => navigate("/")} href='#home'>
              HOME
            </Nav.Link>
            <Nav.Link className="nav-item" onClick={() => navigate("/")} href='#about'>
              ABOUT
            </Nav.Link>
            <Nav.Link className="nav-item" onClick={() => navigate("/")} href='#road-map' >
              ROAD MAP
            </Nav.Link>
            <Nav.Link className="nav-item" onClick={() => navigate("/")}>
              TEAM
            </Nav.Link>
            <Nav.Link className="nav-item" onClick={() => navigate("/")} href='#how-to-mint'>
              MINTING
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              onClick={() => navigate("/contact")}
            ></Nav.Link>
          </Nav>

          <div className="nav-wallet">
            CONNECT TO WALLET
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
