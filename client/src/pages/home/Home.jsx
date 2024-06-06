import React from 'react'
import './Home.css';
import { gsap } from "gsap";

export default function Home(){

return(
<>
  
 <div className="homepage">
    <div className='border'>
    <h1 className="harvest">Local Harvest</h1>
      <h3 className="farm">Bringing the Farm...to your Table in one quick stop!  </h3>
      </div>
 </div>

 <marquee behavior="scroll" direction="left">
    <img src="https://shop.seedsavers.org/site/img/seo-images/1024-seed-savers-mixture-lettuce.jpg" alt="corn" className="homeImg"/>
    <img src="https://images.squarespace-cdn.com/content/v1/53f2223ee4b0516cd60b393d/1408461079830-UCX14SSH8ORD2TWUT8GF/barnMorning.jpg" alt="chiles" className="homeImg"/>
    <img src="../../public/images/tomatoes.jpg" alt="tomatoes" className="homeImg"/>
    <img src="../../public/images/greenonionandcarrots.jpg" alt="green onions and" className='homeImg'/>
    <img src="../../public/images/corn.jpg" alt="corn" className="homeImg"/>
    <img src="https://plus.unsplash.com/premium_photo-1686156706311-347c7a913567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="corn" className="homeImg"/>
  </marquee>
</>
)
}