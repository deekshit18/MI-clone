import React from 'react';
import ig from "./imgg/mi2.png";
import Button from 'react-bootstrap/Button';
function Body() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    height:"80vh"
    ,
  };

  const overlayStyle = {
    position: 'absolute',
    color:"black",
    top: "25%",
    left: "7%",
    width: '100%',
    alignItems:"center",
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    // color: 'white',
    // textAlign: 'left', 
    padding: '20px',
  };

  return (
    <div style={containerStyle} className='mt-5'>
     
      <div style={overlayStyle} className='mt-5 ms-5' class="site-banner__info">
        <h2 class="site-banner__title mi-brand mi-brand--redmi fs-1">Redmi Note 12 Pro 5G</h2>
        <h4 class="site-banner__subtitle fs-3">120Hz Pro AMOLED Display</h4>
        <div class="mi-price site-banner__price mt-5">
          <span className='fs-4'>From </span>
          <strong class="notranslate fs-1"><small>₹</small>21,999</strong>
          <del class="notranslate text-secondary fs-4 ms-2">₹27,999</del>
        </div>
        <div class="site-banner__actions">
        <a href="https://www.mi.com/in/product/redmi-note-12-pro-5g/?skupanel=1" class="mi-btn mi-btn--primary mi-btn--normal mi-btn--light site-banner__link" tabindex="0">
            <span class="mi-btn__text"><Button variant="dark" className='ps-4 pe-4'>Buy Now</Button></span>
          </a>
          <a href="https://www.mi.com/in/product/redmi-note-12-pro-5g/" class="ms-5 mi-btn mi-btn--link-default mi-btn--normal mi-btn--light mi-btn--arrow-pc site-banner__link" tabindex="0" style={{textDecoration:"none",color:"black"}}>
            <span class="mi-btn__text">Learn More ></span>
          </a>
          
        </div>
      </div>
      <img style={{ width: "100%" ,height:"80vh",}} src={ig} alt="" />
    </div>
  );
}

export default Body;
