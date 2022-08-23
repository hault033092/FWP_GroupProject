import React from 'react'
import './Footer.css'
import beelancer_logo from '../assets/logo.svg'
import discord from '../assets/discord.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import google from '../assets/google.svg'
import twitter from '../assets/twitter.svg'
const Footer = () => {
  return (
    <div className='section'>
      <div className='list'>
        <div className='footerBox'>
          <h1 className='boxTitle'>Contact Us</h1>
          <p className='boxDescription'>
            {' '}
            If you have any concern or feedback, click below to send your
            message to our team. Our sweet honey team will reach you asap!{' '}
          </p>
          <div className='button'>Contact Us</div>
        </div>
        <div className='footerBox'>
          <h1 className='boxTitle'>About us</h1>
          <h1 className='boxSubTitle'>We are hardworking bees!</h1>
          <p className='boxDescription'>
            Beelancers provide a platform that connects freelancers and business
            owners. This project is developed by 6 IT student of RMIT University
            Vietnam.
          </p>
          <div className='button'> Read more</div>
        </div>
        <div className='footerBox'>
          <img src={beelancer_logo} alt='Beelancer logo' className='Logo' />
        </div>
      </div>
      <div className='separator'>
        <div className='socialList'>
          <img src={discord} alt='discord logo' className='socialConnect' />
          <img src={facebook} alt='facebook logo' className='socialConnect' />
          <img src={github} alt='github logo' className='socialConnect' />
          <img src={google} alt='google logo' className='socialConnect' />
          <img src={twitter} alt='twitter logo' className='socialConnect' />
        </div>
        <p className='copyRight'>
          Copyright ©2022 Beelancer LTD. All right reserved.
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
