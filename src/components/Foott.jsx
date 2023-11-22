import React from 'react'
import './Foott.css';

function Foott() {
  return (
    <div>
        <footer className='mt-5'>
        <div class="footer-content">
        <div class="footer-column">
            <ul>
                <li>Support</li>
                <li><a href="#">Online Help</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Shipping FAQ</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Mi Exchange</a></li>
                <li><a href="#">Bulk Orders</a></li>
                <li><a href="#">User Guide</a></li>
                <li><a href="#">Laptop Drivers</a></li>
                <li><a href="#">Mi Screen Protect</a></li>
                <li><a href="#">Mi Extended Warranty</a></li>
                <li><a href="#">Mi Complete Protect</a></li>
                <li><a href="#">Certification</a></li>
                <li><a href="#">Service Centre</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <ul>
                <li>SHOP AND LEARN</li>
                <li><a href="#">Xiaomi Phones</a></li>
                <li><a href="#">Redmi Phones</a></li>
                <li><a href="#">TV's</a></li>
                <li><a href="#">Laptops and Tablets</a></li>
                <li><a href="#">Audio</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Smart Home</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <ul>
                <li>RETAIL STORE</li>
                <li><a href="#">Mi Home</a></li>
                <li><a href="#">Mi Authorized Store</a></li>
                <li><a href="#">Mi Store Franchise</a></li>
                {/* <!-- Add other retail store links here --> */}
            </ul>
        </div>

        <div class="footer-column">
            <ul>
                <li>ABOUT US</li>
                <li><a href="#">Xiaomi</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">User Agreement</a></li>
                <li><a href="#">Integrity & Compliance</a></li>
                <li><a href="#">CSR and Disclosures</a></li>
                <li><a href="#">E-Waste Management</a></li>
                <li><a href="#">In The Press</a></li>
                <li><a href="#">Trust Center</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Smartphone Quality</a></li>
                <li><a href="#">TV Quality</a></li>
                <li><a href="#">Service Quality</a></li>
            </ul>
        </div>


        <div class="footer-column">
<strong>
                <li>Follow MI</li>
    
</strong>            <div class="follow-mi-icons me-5">
                <a href="#" target="_blank"><i class="fa-brands fa-square-facebook text-light fs-3 me-3"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-square-instagram text-light fs-3 me-3"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-square-x-twitter text-light fs-3 me-5"></i></a>
            </div>
        

        <div class="footer-column stay-in-touch">
        <strong>
                <li>Let's stay in touch</li>
    
</strong> 
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>        </div>

        <div class="footer-column">
            <div class="mi-app-card">
                <img className='mt-2' style={{height:"80px",width:"80px"}} src="https://i03.appmifile.com/32_operator_in/22/11/2022/9b4d58f78a203b82a56bdd11692d4ba1.png?f=webp" alt="Mi App Icon"/>
                <strong>
                <li> Get mi store app
</li>
    
</strong> 
                <p style={{fontSize:"12px"}}>Scan for our up-to-date information for a better shopping experience.</p>
                <hr/>
                <a href="#" target="_blank"><img style={{width:"30px"}} src="https://logospng.org/download/play-store/logo-play-store-4096.png" class="play-store-icon" alt="Download on Google Play"/></a>
                <a href="#" target="_blank" className='text-light'>Download on Google Play</a>
            </div>
        </div>
        </div>
    </div>
    <hr/>

    <div class="bottom-section">
        <p class="copyright-info mb-3">&copy; 2010 - 2023 Xiaomi. All Rights Reserved</p>
        <p class="sitemap-info">Sitemap</p>
        <p class="india-info ">India / India<i class="ms-3 fa-solid fa-globe"></i></p>
    </div>
        </footer>
    </div>
  )
}

export default Foott