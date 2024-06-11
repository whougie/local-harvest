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

        <div className='=allfooter'>
          
        <div className='connect'>
       
          <p>Connect With Us</p>
          <p> Email: contact@localharvest.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Harvest Lane, Townsville, State, 56789</p>
        </div>

        <div className='copyright'>
          <p> &copy; 2024 Local Harvest  </p>
        </div>


        </div>


      </footer>
    </>
  )
}