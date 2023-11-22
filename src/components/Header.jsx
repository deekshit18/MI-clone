import React, { useState } from 'react'
import { Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import s from "./imgg/search.png";
import c from "./imgg/trolley.png";
import u from "./imgg/person.png";
import './Header.css';

function Header() {
  
  const [activeCanvas, setActiveCanvas] = useState(null);

  const toggleCanvas = (canvasId) => {
    setActiveCanvas(canvasId === activeCanvas ? null : canvasId);
  }
  return (
  <>    <Navbar style={{}} bg="light" className='fixed-top' expand="lg">
  <NavbarBrand href="#home" className='ms-5'><img style={{height:"30px"}} src="https://companieslogo.com/img/orig/XIACF-9058dc7f.png?t=1654569581" alt="" /></NavbarBrand>
  <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className='ms-5 NavLink' href="#home" onMouseEnter={() => toggleCanvas('canvas1')} >Store</NavLink>
      <NavLink className='ms-5 NavLink' href="#products">Phone</NavLink>
      <NavLink className='ms-5 NavLink' href="#support">TV & Smart Home</NavLink>
      <NavLink className='ms-5 NavLink' href="#community">Laptop & Tablet</NavLink>
      <NavLink className='ms-5 NavLink' href="#about">LifeStyle</NavLink>
     <div style={{marginLeft:"180px",display:"flex"}}>
        <NavLink  className='ms-5 NavLink' href="#store">Discover</NavLink>
        <NavLink className='ms-5 NavLink' href="#contact">Support</NavLink>
     </div>

    </Nav>
  </NavbarCollapse>
  <NavLink className='me-5'><img src={s} style={{width:"25px",height:"25px"}} alt="" /></NavLink> 
   <NavLink className='me-5' ><img src={c} style={{width:"30px",height:"30px"}} alt="" /></NavLink>
  <NavLink className='me-5'><img src={u} alt="" style={{width:"30px",height:"30px"}} /></NavLink>
  <NavbarToggle aria-controls="basic-navbar-nav" />

</Navbar>  


<div className="canvas-container">
        {activeCanvas === 'canvas1' && (
          <div className="canvas offcanvas-top" id="canvas1">
            <h5 className="offcanvas-title">Offcanvas top</h5>
            <div className="offcanvas-body">
              {/* Content for your offcanvas */}
              <p>Details about Canvas 1.</p>
            </div>
          </div>
        )}
        {activeCanvas === 'canvas2' && (
          <div className="canvas offcanvas-top" id="canvas2">
            <h5 className="offcanvas-title">Offcanvas top</h5>
            <div className="offcanvas-body">
              {/* Content for your offcanvas */}
              <p>Details about Canvas 2.</p>
            </div>
          </div>
        )}
        {activeCanvas === 'canvas3' && (
          <div className="canvas offcanvas-top" id="canvas3">
            <h5 className="offcanvas-title">Offcanvas top</h5>
            <div className="offcanvas-body">
              {/* Content for your offcanvas */}
              <p>Details about Canvas 3.</p>
            </div>
          </div>
        )}
      </div>

</>     
  )
}

export default Header