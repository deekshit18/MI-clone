import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5 (1).png';

function Body2() {
    const containerStyl = {
        position: 'relative',
      };
    
      const imageStyl = {
        // position: 'absolute',
        // position: 'relative',

        width: '100%',
        // height: '100%',
        // objectFit: 'cover',
      };
    
      const contentStyl = {
        position: 'absolute',
        
        top: '50%', // Adjust as needed
        left: '50%', // Adjust as needed
        // transform: 'translate(-50%, -50%)',
        textAlign: 'center', // Adjust as needed
        color: 'white', // Adjust text color as needed
      };
    
      return (
        <div className="">
          {/* First row, two images */}
          <div className="row ms-2  me-2" style={containerStyl}>
            <div className="col-md-6 mt-3" style={{ position: 'relative' }}>
              <img style={imageStyl} src={image1} alt="Image 1" />
              <div style={contentStyl}>
                {/* <h3>Image 1 Title</h3>
                <p>Image 1 Description</p> */}
              </div>
            </div>
            <div className="col-md-6 mt-3" style={{ position: 'relative' ,marginRight:"-15px"}}>
              <img style={imageStyl} src={image2} alt="Image 2" />
              <div style={contentStyl}>
                {/* <h3>Image 2 Title</h3>
                <p>Image 2 Description</p> */}
              </div>
            </div>
          </div>
    
          {/* Second row, one large image and two small images */}
          <div className="row  ms-2  me-2" style={containerStyl}>
            <div className="col-md-6 mt-3" style={{ position: 'relative' }}>
              <img style={imageStyl} src={image3} alt="Image 3" />
              <div style={contentStyl}>
                {/* <h3>Image 3 Title</h3>
                <p>Image 3 Description</p> */}
              </div>
            </div>
            <div className="col-md-3 mt-4" style={{ position: 'relative' ,marginTop:"5px"}}>
              <img style={imageStyl} src={image4} alt="Image 4" />
              <div style={contentStyl}>
                {/* <h3>Image 4 Title</h3>
                <p>Image 4 Description</p> */}
              </div>
            </div>
            <div className="col-md-3 mt-4" style={{ position: 'relative'}}>
              <img style={imageStyl} src={image5} alt="Image 5" />
              <div style={contentStyl}>
              </div>
            </div>
          </div>
        </div>
      
  );
}

export default Body2;
