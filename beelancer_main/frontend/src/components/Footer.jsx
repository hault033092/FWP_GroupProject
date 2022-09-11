import React from 'react'

import beelancer_logo from '../assets/svg/logo.svg'
import discord from '../assets/svg/discord.svg'
import facebook from '../assets/svg/facebook.svg'
import github from '../assets/svg/github.svg'
import google from '../assets/svg/google.svg'
import twitter from '../assets/svg/twitter.svg'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Section>
      <ContentHolder>
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
      </ContentHolder>
      <Separator>
        <SocialList>
          <img src={discord} alt='discord logo' className='socialConnect' />
          <img src={facebook} alt='facebook logo' className='socialConnect' />
          <img src={github} alt='github logo' className='socialConnect' />
          <img src={google} alt='google logo' className='socialConnect' />
          <img src={twitter} alt='twitter logo' className='socialConnect' />
        </SocialList>
        <p className='copyRight'>
          Copyright ©2022 Beelancer LTD. All right reserved.
        </p>
      </Separator>
      <div></div>
    </Section>
  )
}

export default Footer
const Section = styled.section`
  position: relative;
  background-color: #e8aa0c;
  height: 300px;
  @media only screen and (max-width: 1200px) {
    height: 400px;
  }
  @media only screen and (max-width: 800px) {
    height: 600px;
  }
  @media only screen and (max-width: 430px) {
    height: 650px;
  }
`
const ContentHolder = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  width: 100%;
  height: fit-content;
  .footerBox {
    height: 150px;
    width: 20%;
    margin-left: 1%;
    margin-right: 5%;
    .boxTitle {
      font-weight: 700;
      font-size: 25px;
      color: #222222;
      padding-bottom: 10px;
    }
    .boxDescription {
      font-weight: 500;
      font-size: 14px;
      color: rgba(34, 34, 34, 0.5);
      padding-bottom: 10px;
    }
    .boxSubTitle {
      font-weight: 800;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      padding-bottom: 10px;
    }
    .button {
      padding: 6px 14px;
      background-color: #222222;
      color: white;
      width: fit-content;
      border: 3px solid #222222;
      border-radius: 20px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: transparent;
        color: #222222;
      }
    }

    .Logo {
      width: 200px;
      height: auto;
      display: flex;
      justify-self: center;
      margin: auto;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap-reverse;
    .footerBox {
      width: 300px;
      margin-left: 5%;
      margin-right: 5%;
      height: fit-content;
    }
    .footerBox .Logo {
      width: 80px;
    }
  }
  @media only screen and (max-width: 800px) {
    .footerBox {
      width: 100%;
      padding: 0 20%;
      margin: 10px 0;
    }
  }
`
const Separator = styled.section`
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(34, 34, 34, 0.2);
  display: flex;
  justify-content: space-between;
  align-content: center;
  vertical-align: middle;

  padding: 4px 10%;
  .socialConnect {
    width: 30px;
    height: auto;
    margin: 0 5px;
    cursor: pointer;
  }
  .copyRight {
    margin: auto 0;
    font-weight: 200;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    height: fit-content;
  }
  @media only screen and (max-width: 800px) {
    padding: 4px 5%;
  }
  @media only screen and (max-width: 430px) {
    padding: 4px 1%;
    .socialConnect {
      width: 20px;
      margin: 0 2px;
    }
  }
`
const SocialList = styled.section`
  display: flex;
`
