import React, { Component } from 'react'


import "../cssfiles/home.css";

import imag1 from "../images/img3.jpg";
import imag2 from "../images/img4.jpg";
import imag3 from "../images/img5.jpg";
export default class Home extends Component {
  render() {
    return (
    <>
    
 <div className="containar" id='home'>
 <p className='popy'>Welcome to</p>
 <h1>Family Bakery</h1>
 <p className='pcont'>We're the biggest, best equipped and most advanced Bakery in the greater Los Angeles area.</p>
 <button class="btn btn1">Learn More</button>
     <button class="btn btn2">Contact us</button>



 </div>

 <div className="containar2">

   <div className='child one'>

   </div>
   <div className='child two'>
              <h1>Who we are?</h1>
              <p>We have been operating for over 30 years and are Members of The Federation of Master Builders.
                We work on projects big and small from small residential extensions to full house.
                We are so happy with this theme. Everyday it make our lives better</p>
                
                
              <ul className='two-list'>
              <span> <i class="fa-brands fa-envira"></i> </span> <span>A good environment.</span>
              <br></br>
             <span><i class="fa-solid fa-users"></i> </span> <span>Our clients trusted us.</span>
             <br></br>
             <span> <i class="fa-brands fa-gratipay"></i> </span> <span> Social media loves us! </span>
             <br></br>
             <span>  <i class="fa-solid fa-circle-check"></i> </span> <span> This list is super easy. </span> 
             
 



             
                </ul>
                </div>
 </div>






 <div className="containar2">

   <div className='child two round'>
   <h1>Our Location</h1>
              <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and 
                small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
                
                
             <p className='two-p'>Story on projects big and small from small residential extensions to full house.
                We are so happy with this theme. Everyday it make our lives better.</p>

   </div>
   <div className='child one bk'>
              
        </div>
 </div>




 <div className='container3'>
        
 <div className='baking'>
            <h1>
                Our Baking
            </h1>
        <p>Learn more about them. We have worked truly hard to make them perfect for every use.</p>
      </div>

 <div className="back-containar">
      <div className='item'>
            <div className='layer'>
            <img src={imag1}></img>
           <h3> Superior Breads </h3>
        <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, 
        at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere </p>
        
        </div>
    </div>
        
    <div className='item'>
            <div className='layer'>
            <img src={imag2}></img>
           <h3> Bagels </h3>
        <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, 
        at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere </p>
        
        </div>
    </div>


    <div className='item'>
            <div className='layer'>
            <img src={imag3}></img>
           <h3> Cookies </h3>
        <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, 
        at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere </p>
        
        </div>
    </div>
    </div>
        </div>



        <div className="containar2">


<div className='child two'>
           <h1>Contact Information</h1>
           <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
             
             
             
           <ul className='two-list'>
           <span> <i class="fa-solid fa-map"></i> </span> <span> Manchester St 123-78B, Random 713, UK </span>
           <br></br>
          <span><i class="fa-solid fa-phone"></i></span> <span>+46 123 456 789</span>
          <br></br>
          <span> <i class="fa-solid fa-headphones-simple"></i> </span> <span> +37 431 456 789</span>
          <br></br>
          <span>  <i class="fa-solid fa-envelope"></i> </span> <span> hello@sitename.com </span> 
          




          
             </ul>
             </div>
             <div className='child one last'>

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


<footer>

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
</footer>






 

    
    </>
  
    )
  }
}
