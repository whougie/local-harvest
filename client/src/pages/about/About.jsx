import React from 'react'
import './About.css';


export default function About(){

return(
<>
  <section className='story'>
  <h1 className='aboutTitle'>Our Team</h1>

  <p className='aboutBody'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam impedit molestias eveniet obcaecati aliquam animi sequi. Provident, animi reprehenderit, debitis accusantium laboriosam vel sit modi eligendi reiciendis non ullam fuga?</p>

  </section>

  <section className='about'>
  <div className="row">
  <div className="column">
    <div className="card">
      {/* <img src="img1.jpg" alt="Jane" style="width:100%"/> */}
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
      {/* <img src="img2.jpg" alt="Mike" style="width:100%"/> */}
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
      {/* <img src="img3.jpg" alt="John" style="width:100%"/> */}
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
      {/* <img src="img2.jpg" alt="Mike" style="width:100%"/> */}
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
      {/* <img src="img2.jpg" alt="Mike" style="width:100%"/> */}
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
