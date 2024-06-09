import React from 'react'
import './Footer.css';


export default function Footer() {

  return (

    <>
      <footer className='footer'>
        <div className='footerImages'>
          <img src="/images/chs.png" alt="chs logo" className='logos' />
          <img src="/images/cargill.png" alt="cargill logo" className='logos' />
          <img src="https://upload.wikimedia.org/wikipedia/en/6/69/Pioneer_Hi-Bred_International_Logo.png" alt="chs logo" className='logos' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8d_FPc-eDYSx9-Sv5yIsAId5VFcoE7X-XNQ&s" alt="stPaulFarmersMarketLogo" className='logos' />
        </div>

        <div className='copyright'>
          <h2> &copy; 2024 Local Harvest  </h2>
        </div>

        <div className='connect'>
          <h2>Connect With Us</h2>

        </div>

      </footer>
    </>
  )
}