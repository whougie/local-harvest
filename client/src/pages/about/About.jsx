import React from 'react';
import './About.css';
import SplitType from 'split-type';

export default function About(){

return(
<>
  <section className='story'>
  <h1 className='aboutTitle'>Our Team</h1>

  <p className='aboutBody'>Welcome to Local Harvest, your online access to your local farmers market!  Local Harvest was founded in the spring 2024 (right at the start of the growing season) by a team of web developers at the University of Minnesota. A shared love of healthy, locally grown foods and the realization that getting to our local farmer's market as often as we'd like was not always possible; the idea for Local Harvest was born.</p>

  <p className='aboutBody'>By becoming a member, you now can have access to every vendor at your local market; order online, and quickly pick up your items on your time.  As much fun as it can be to spend a few hours browsing the stands; busy schedules, family time, mobility issues and event the weather can impact getting there.  Local Harvest aims to connect farmer's with consumers with a little more ease.  Thanks for checking us out and happy harvesting! </p>
  </section>

  {/* //Unable to implemnt stagger onto each person's card name -Kee
// // Split text into words and characters
// const text = new SplitType('#target', { types: 'words, chars' })

// // Animate characters into view with a stagger effect
// gsap.from(text.chars, {
//   opacity: 0,
//   y: 20,
//   duration: 0.5,
//   stagger: { amount: 0.9 },
// }) */}

  <section className='about'>
  <div className="row">
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Daisy Osebe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Joel Hansen</h2>
        <p className="title"> Personality Hire &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Kee Thao</h2>
        <p className="title">COO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
      
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Reynolds Addy</h2>
        <p className="title">Art Director &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Whougie Lo</h2>
        <p className="title">CTO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
  </section>
</>
)
}
