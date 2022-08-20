import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
//photo
import Overlay from '../assets/Overlay.svg'
import beelancer_logo from '../assets/beelancer_logo.svg'
import NatureBackground from '../assets/NatureBackground.jpg'
//social media
import discord from '../assets/discord.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import google from '../assets/google.svg'
import twitter from '../assets/twitter.svg'
const ContactUs = () => {
  return (
    <div>
      <Header />
      <BackgroundLayer>
        <div className='backgroundHolder'>
        <img src={NatureBackground} alt="" />
        <img id ="overlay" src={Overlay} alt="" />
        </div>
      </BackgroundLayer>
      <ForegroundLayer>
        <form action="">
          <div className='titleHolder'>
            <h1>Contact Form</h1>
          </div>
          <p className='des'>Fill this out so we can understand more about you and your need!</p>
          <div className='inputHolder'>
          <input className='nameInput' type="text" id="name" name="name" placeholder='Full name' />
          <input className='emailInput' type="text" id="email" name="email" placeholder='example@email.com' />
          </div>
          <textarea name="description" id="description" placeholder='Type your message here'></textarea>
          <input className='submitButton' type="submit" value="Post Project" />
        </form>
        <div className='leftPanel'>
        <img className='logo' src={beelancer_logo} alt="beelancer logo" />
        <div className='infoHolder'>
          <h2>🗺️Find Us</h2>
           <p> Ho Chi Minh City, Vietnam</p>
           <h2>✉ Email Us</h2>
          <p> Email: Beelancer@gmail.com</p>
          <h2> ☏ Call Us</h2>
          <p>Call: +84 1900 6006</p>
          <p className='note'>Monday - Friday: 9:00 AM to 6:00 PM </p>
          <SocialList>
        <img src={discord} alt="discord logo" className='socialConnect' />
        <img src={facebook} alt="facebook logo" className='socialConnect' />
        <img src={github} alt="github logo" className='socialConnect' />
        <img src={google} alt="google logo" className='socialConnect' />
        <img src={twitter} alt="twitter logo" className='socialConnect' />
        </SocialList>
        </div>
        </div>
      </ForegroundLayer>
      <Footer />
    </div>
  )
}
const BackgroundLayer = styled.section`
  position: relative;
  height: 0;
  width: 100%;
  //overflow-x: hidden;
  .backgroundHolder{
    position: relative;
  }
  img{
    top: 0px;
    left: 0;
    max-width: 100%;
    height: auto;
  }
  #overlay{
    position: absolute;
  }
  z-index: -1;
  @media screen and (max-width:1300px) {
    .backgroundHolder{
      width: 100%;
      overflow-x: hidden;
    }
    img{
      position: relative;
      overflow: hidden;
      max-width: none;
      height:900px;
      width: auto;
    }
    #overlay{
      display: none;
    }
  }
  @media screen and (max-width: 1100px)
  {
    img{
      height:1300px;
    }
  }
`
const ForegroundLayer = styled.section`
  position: relative;
  height: fit-content;
  background-color: rgba(107, 107, 107, 0.5);
  display: flex;
  padding: 0 5%;
  form{
    background-color: white;
    width: 45%;
    margin: 12% 50px 50px 50px;
    padding: 100px 50px 50px 50px;
    //border-radius: 20px;
    box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    .titleHolder{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
      img{
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      }
      h1{
        text-align: left;
        font-family:'Courier New', Courier, monospace;
        font-size: 50px;
        font-weight: bolder;
      }
    }
    .des{
      margin-top: 20px;
      color: rgba(0,0,0,0.5);
      font-weight: 100;
      font-style: italic;
      font-size: 16px;
      width: 60%;
    }
    .inputHolder{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 20px;
      input{
        width: 48%;
        height: 35px;
        border-radius: 5px;
        padding-left: 10px;
        &:focus
        {
          color: rgba(0,0,0,0.5);
          outline: none;
          background-color: none;
          border-bottom:#E8AA0C solid 3px ;
        }
      }
      .nameInput{
        border: #E8AA0C solid 1px;
        color: #E8AA0C;
        ::placeholder{
        font-family: 'Courier New', Courier, monospace;
        color: #E8AA0C;
        font-weight: lighter;
        }
      }
      .emailInput{
        border: black solid 1px;
      }
    }
    textarea{
      background-color: rgba(232, 170, 12,0.1);
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    padding: 10px 2%;
    font-size: 16px;
    font-weight: lighter;
    resize: none;
    ::placeholder{
      font-family: 'Courier New', Courier, monospace;
      color: #E8AA0C;
      font-weight: lighter;
    }
    &:focus
    {
      color: rgba(0,0,0,0.5);
      outline: none;
      background-color: none;
      border-bottom:#E8AA0C solid 1px ;
    }
    }
    .submitButton{
      font-family: 'Courier New', Courier, monospace;
      margin-top: 40px;
      background-color: rgba(0,0,0,0);
      color: black;
      border: black solid 3px;
      display:flex;
      margin-left: auto ;
      margin-right: 0;
      padding: 5px 15px;
      font-size: 18px;
      font-weight: 700;

  cursor: pointer;
  &:hover{
    background-color: black;
    color:white;
  }
    }
  }
  .leftPanel{
    position: relative;
    height: 100%;
    margin-left: 5%;
    .logo{
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-top: 40%;
    }
  }
  .infoHolder{
    background-color: #E8AA0C;
    color: white;
    padding: 30px 50px 30px 50px;
    height: fit-content;
    margin-top: 10px;
    line-height: 1.5;
    h2{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    p{
      font-weight: 100;
      font-family:'Courier New', Courier, monospace;
      color: rgba(255,255,255,0.7)
    }
  }
  @media screen and (max-width:1300px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    //background-color: aqua;
    form{
      width: 65%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .leftPanel
    {
      width: 65%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
      display: block;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      //  background-color: aliceblue;
    .logo{
      display: none;
    }
    .infoHolder{
      width: 100%;
    }
    }
  }
  @media screen and (max-width: 900px){
    form{
      width: 75%;
    }
    .leftPanel{
      width: 75%;
    }
  } 
  @media screen and (max-width: 750px){
    form{
      width: 85%;
    }
    .leftPanel{
      width: 85%;
    }
  } 
  @media screen and (max-width: 650px){
    form{
      width: 95%;
    }
    .leftPanel{
      width: 95%;
      .infoHolder{
        h2{
          display: none;
        }
      }
    }
  } 
  @media screen and (max-width: 600px){
    padding: 0;
    align-items: center;
    form{
      margin: 0;
      width: 100%;
      .des{
        width: 90%;
      }
      .inputHolder{
        display: flex;
        flex-direction:column;
        
        width: 100%;
        input{
          width: 100%;
          margin-top: 10px;
        }
      }
    }
    .leftPanel{
      height: fit-content;
      padding: 0;
      margin: 0;
      width: 100%;
      .infoHolder{
        background-color: white;
        margin: 0;
        padding: 10px 0;
        h2{
          display: none;
        }
        p{
          display: none;
        }
      }
    }
  } 
  @media screen and (max-width: 600px){
    form{
    padding: 100px 30px 20px 30px;
    }
  }
`
const SocialList = styled.section`
margin-top:20px;
display: flex;
img{
  width: 40px;
  cursor: pointer;
  margin-right: 10px;
}
@media screen and (max-width: 600px){
  margin-top: 0;
  justify-content: center;
}
`

export default ContactUs
