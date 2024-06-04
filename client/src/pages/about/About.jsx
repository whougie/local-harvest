import React from 'react'
import './About.css';


export default function About(){

return(
<>
  <section className='about'>
    <img className = "profile" src="/adventure-hat.png" alt="profile picture" />
    <h1 className='aboutTitle'>About Me</h1>
      <p className='aboutBody'>Hello World!  My name is Joel Hansen and I build things for the web.  I am a recent graduate of the University of Minnesota's full stack web development bootcamp. Prior to this bootcamp I worked in the mental health profession as a therapist, consultant, trainer and program director.  I also have experience working in network engineering and sytems for companies such as Chiptole, Costco, and Hughesnet. I also hold a masters degree from the University of St. Thomas in St. Paul, MN. </p>

      <p className='aboutBody'>When I'm not plugging away coding, I like to spend my time outdoors with my family camping, hiking, fishing and boating. I grew up in a river town on the St.Croix and that river is in my soul.  The woods and the water are my happy place.  I enjoy adventures of all kinds.  Whether it's exploring in the forest with my son in our backyard or building a clean water system in Tanzania; I welcome the unknown. I also have a life-long love of soccer(proper footbal).  I have played, coached and follow Arsenal (COYG!!!) and Minnesota United religously.</p>

      <p className='aboutBody'>I am excited about a new career in the tech industry and am a believer that learning never ends. New challenges excite me and I enjoy a good problem needing solving.  I am a quick learner and welcome feedback. My years in mental health have provided me with extensive experience active listening, communicating effectively, and being able to think quickly on my feet.</p>

      <p className='aboutBody'>Thanks for taking the time to learn a little bit about me.</p>
  </section>
</>
)
}
