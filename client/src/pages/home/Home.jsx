import { useState } from 'react';
import React from 'react'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { gsap } from "gsap";


export default function Home(){

  const redirectToBlog = () => {
    // Redirect to the specified website URL
    window.location.href = 'https://www.hartwoodfarm.com/farm-blog?month=05-2022';
  };

return(
<>
  <div className='blog'>
  
  <p className='text2'> <p className='farmTitle'> Local Farm Delights</p>In recent years, there has been a noticeable shift in the way people approach their food choices. The rise of the locavore movement has sparked a renewed interest in consuming locally sourced produce, meat, and dairy. This trend isn't just about following the latest food fad; it's a conscious decision rooted in environmental sustainability, community support, and a desire for fresher, more flavorful ingredients.
  <p>One of the primary attractions of eating from local farms is the emphasis on freshness. Unlike mass-produced food that travels hundreds or even thousands of miles before reaching your plate, locally sourced food is often harvested at the peak of ripeness and delivered to consumers within hours. This not only preserves the nutritional value of the food but also enhances its taste and texture. Whether it's a crisp apple straight from the orchard or a bunch of vibrant greens picked that morning, the difference in quality is undeniable.</p>

  <p>Beyond the environmental impact, eating from local farms fosters a sense of community and connection. When you buy directly from farmers at farmers' markets or through community-supported agriculture (CSA) programs, you're not just purchasing food; you're investing in relationships. Farmers markets serve as gathering places where neighbors can meet, exchange ideas, and form bonds over a shared appreciation for fresh, wholesome food. </p>


Incorporating locally sourced food into your diet doesn't have to be daunting. Start by exploring farmers markets in your area or joining a CSA program to receive a regular supply of fresh produce. Get to know the farmers and producers who grow your food, ask questions about their growing practices, and learn more about the seasonal rhythms of agriculture in your region. Experiment with new recipes that highlight the flavors of local ingredients, and don't be afraid to get creative in the kitchen.<button onClick={redirectToBlog} className='farmBtn'>READ MORE</button></p>
  <img src ="../../public/images/farmer1.jpg" alt="blogimage" className='farmTruck'/>

  </div>

 <div className="homepage">
    <div className='border'>
    <h1 className="harvest"></h1>
      <h3 className="farm"> Bringing the Farm to your Table in one quick stop! </h3>
      <button className='homebtn'> GET INVOLVED </button>
      </div>
 </div>
   <p className='secondArticle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatum voluptatem culpa? Iusto sunt animi doloremque. Molestiae repudiandae, eaque, inventore nam voluptate perferendis hic eius consectetur suscipit odio, laboriosam rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati quam quibusdam doloribus, ab in ratione quasi quaerat laboriosam voluptate optio, quidem enim reprehenderit vel assumenda officia aperiam, nihil cupiditate!</p>
   <p className='secondArticle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatum voluptatem culpa? Iusto sunt animi doloremque. Molestiae repudiandae, eaque, inventore nam voluptate perferendis hic eius consectetur suscipit odio, laboriosam rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati quam quibusdam doloribus, ab in ratione quasi quaerat laboriosam voluptate optio, quidem enim reprehenderit vel assumenda officia aperiam, nihil cupiditate!</p>


 <marquee behavior="scroll" direction="left">
    <img src="../../public/images/mixture-lettuce.jpg" alt="lettuce mix" className="homeImg"/>
    <img src="https://images.squarespace-cdn.com/content/v1/53f2223ee4b0516cd60b393d/1408461079830-UCX14SSH8ORD2TWUT8GF/barnMorning.jpg" alt="chiles" className="homeImg"/>
    <img src="../../public/images/tomatoes.jpg" alt="tomatoes" className="homeImg"/>
    <img src="../../public/images/greenonionandcarrots.jpg" alt="green onions and" className='homeImg'/>
    <img src="../../public/images/corn.jpg" alt="corn" className="homeImg"/>
    <img src="https://plus.unsplash.com/premium_photo-1686156706311-347c7a913567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="corn" className="homeImg"/>
  </marquee>
  
</>
)
}