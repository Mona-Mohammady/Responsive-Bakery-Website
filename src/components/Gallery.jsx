import React, { Component } from 'react'

import "../cssfiles/gallery.css"
import imag1 from "../images/img5.jpg";
import imag2 from "../images/img3.jpg";
import imag3 from "../images/img4.jpg";
import imag4 from "../images/bkk.jpg";
import imag5 from "../images/bkoffers.jpg";
import imag7 from "../images/kit-img.jpg";


export default class Gallery extends Component {
  render() {
    return (
     <>
      <div className='cov'>
        <div className="Sec1">
          <h1>Gallery</h1>
          <p>Awesome gallery showcasing our artisan bakings.</p>
        </div>
      </div>

<div className="gallery-mar">
      <div className="gallery-containar">
      <div className='item'>
            <div className='layer'>
            <img src={imag7}></img>
          
        
        </div>
    </div>
        
    <div className='item'>
            <div className='layer'>
            <img src={imag4}></img>
           
        
        </div>
    </div>
    <div className='item'>
            <div className='layer'>
            <img src={imag5}></img>
           
        
        </div>
    </div>
   
    </div>
    
     
    <div className="gallery-containar">
      <div className='item'>
            <div className='layer'>
            <img src={imag1}></img>
          
        
        </div>
    </div>
        
    <div className='item'>
            <div className='layer'>
            <img src={imag2}></img>
           
        
        </div>
    </div>
    <div className='item'>
            <div className='layer'>
            <img src={imag3}></img>
           
        
        </div>
    </div>
   
    </div>
    </div>
     



    <div className="last-containar">

<div className="D first">
    <h4>About us</h4>
    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.
       I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
       <p>We are the champions! We are the most amazing theme of all time, yeah.</p>
  </div>
<div className="D second">
  <h4>Why we are special?</h4>
  <ul>
    <li>Our magical recipe.</li>
    <div className="brdr"></div>
    <li>We care about environment.</li>
    <div className="brdr"></div>
    <li>We are trusted by all.</li>
    <div className="brdr"></div>
    <li>Social media loves us!</li>
    <div className="brdr"></div>
    <li>This list is super easy to create.</li>
  </ul>
  
  </div>
<div className="D third">
  <h4>Opening Hours</h4>
  <ul>
    <li>Monday 10AM - 9PM</li>
    <div className="brdr"></div>
    <li>Tuesday 10AM - 9PM</li>
    <div className="brdr"></div>
    <li>Wednesday 10AM - 9PM</li>
    <div className="brdr"></div>
    <li>Thursday 10AM - 10PM</li>
    <div className="brdr"></div>
    <li>Friday 10AM - 10PM</li>
    <div className="brdr"></div>
    <li>Weekends 10AM - 11PM</li>
    
  </ul>
  
  
  
  </div>
<div className="D fourth">
  <h4>Contact Details</h4>
  <span> <i class="fa-solid fa-location-dot"></i> </span> <span> Manchester Road 123-78B, <span>Silictown 7854MD, Great Countr. </span> </span>
         <br></br>
        <span><i class="fa-solid fa-phone"></i></span> <span>+46 123 456 789</span>
        <br></br>
        <span>  <i class="fa-solid fa-envelope"></i> </span> <span> hello@sitename.com </span> 
        <br></br>
        <span> <i class="fa-solid fa-earth-asia"></i> </span> <span> http://www.sitename.com</span>



</div>
</div>


<div className="footer">

<div className="cntr">
<h1>Bakery</h1>
<p>Copyright 2022. All rights reserved.</p>
<span><i class="fa-brands fa-facebook"></i></span>
<span> <i class="fa-brands fa-facebook-messenger" ></i> </span> 
<span>  <i class="fa-brands fa-twitter"></i> </span>
<span>  <i class="fa-brands fa-whatsapp"></i> </span>

</div>


</div>
     
     </>
    )
  }
}
