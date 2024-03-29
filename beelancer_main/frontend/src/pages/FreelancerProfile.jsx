import React, { useState,useEffect } from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
//background
import Working from '../assets/Working.svg'
//avatar
import Avatar from '../assets/images/Avatar.png'
import axios from 'axios'

export default function FreelancerProfile() {
  const [avatar,setAvatar] = useState("")
  const [defaultUse,setDefaultUse] = useState(true)
  const [name,setName] = useState("")
  //skill
  const [skills, setSkills] = useState([])
  //
  const [jobs, setJobs] = useState([])
  //
  const [contactPhone, setPhone] = useState("")
  const [contactEmail, setEmail] = useState("")
  const rURL = "http://localhost:8080/api/user/getUser/632342b96953ce6b95a4e941"
  const load = () =>{
    axios.get(rURL,   {headers:{
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFmNGM4NDQxMmQyODg1ODYwMjZhYjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjMwNjA3NDR9.vUWXh262lz12tbp9E9ZIWr26sW6N3b62HXFwrECsUa0'
       
    }})
    .then(
      res => {
        console.log(res.token)
        const data = res.data
        if(data.avatar !== undefined)
        {
          setDefaultUse(false)
          //console.log("or this")
        setAvatar(btoa(String.fromCharCode(...new Uint8Array(data.avatar.data))))
        //console.log("or this: "+ avatar)
        }
        else{
          setDefaultUse(true)
        }
        setName(data.name)
        setPhone(data.phone)
        setEmail(data.email)
        if(data.personalSkills !== undefined)
        {
        const s = data.personalSkills.split(",")
        setSkills(s)
        }
        if(data.bio !== undefined)
        {
        const j = data.bio.split(",")
        setJobs(j)
        }
      }
    )
  }
  useEffect(()=>{
    load();
  },[])
  function AvatarDisplay()
  {
    if(defaultUse)
    {
      return <img src={Avatar} alt='UserAvatar' />
    }
    else{
      return <img src={`data:image/png;base64,${avatar}`} alt='UserAvatar' />
    }
  }
  return (
    <div>
      <Body>
        <img className='Background' src={Working} alt='background' />
        <ContentBox>
          <LeftPanel>
            <div className='Avatar'>
              <div className='Circle' id='Circle1'></div>
              <div className='Circle' id='Circle2'>
                <AvatarDisplay />
              </div>
            </div>
            <div className='Titles'>
              {
                jobs.map((job)=>
                <h2>{job}</h2>)
              }
            </div>
          </LeftPanel>
          <RightPanel>
            <h1>{name}</h1>
            <h3>What I am good at</h3>
            <div className='skills'>
            {
              skills.map((skill)=>
              <p>{skill}</p>
            )}
            </div>
            <h3>What client says about me</h3>
            <div className='review'>
              <p className='content'>
              Thank you so much for helping out with my customers while I've been away. It's such a good feeling to know that we can take time out when needed and the team are here to not just support our customers but support each other too. 
              </p>
              <p className='author'>Tywin Lanister</p>
            </div>
            <h3>Where to find me</h3>
            <div className='contact'>
              <div className='contactBox'>
                <h4>Phone Number: </h4>
                <p>{contactPhone}</p>
              </div>
              <div className='contactBox'>
                <h4>Contact Email: </h4>
                <p>{contactEmail}</p>
              </div>
            </div>
          </RightPanel>
          <Setting>
            <MenuItem to="/profileSetting">
              <div>
              <p>✎</p>
              </div>
              Edit
            </MenuItem>
          </Setting>
        </ContentBox>
      </Body>

    </div>
  )
}

export const MenuItem = styled(NavLink)`
display: flex;
flex-direction: row;
align-items: center;
font-style: normal;
text-decoration: none;
color: rgba(232, 170, 12, 1);
div {
    border: rgba(232, 170, 12, 0.7) solid 2px;
    background-color: rgba(232, 170, 12, 0.7);
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      p {
        color: rgba(232, 170, 12, 1);
      }
    }
  }
  p {
    color: white;
    font-size: 20px;
  }
  @media screen and (max-width: 850px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`
const Body = styled.section`
  //background-color: #e8aa0c;
  .Background {
    top: 0;
    min-width: 100%;
    position: absolute;
    z-index: -100;
  }
  @media screen and (max-width: 1350px) {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    .Background {
      height: 1000px;
      overflow-x: hidden;
    }
  }
  @media screen and (max-width: 1150px) {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    .Background {
      height: 900px;
      overflow-x: hidden;
    }

    @media screen and (max-width: 1000px) {
      .Background {
        height: 950px;
      }
    }
    @media screen and (max-width: 850px) {
      .Background {
        height: 950px;
      }
    }
    @media screen and (max-width: 1000px) {
      .Background {
        height: 750px;
      }
    }
    @media screen and (max-width: 850px) {
      .Background {
        height: 900px;
      }
    }
    @media screen and (max-width: 700px) {
      .Background {
      }
    }
    @media screen and (max-width: 450px) {
      .Background {
        height: 1000px;
      }
    }
  }
`

const ContentBox = styled.section`
  height: fit-content;
  position: relative;
  width: 90%;
  margin: 7% 5%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 50px 100px;
  @media screen and (max-width: 1150px) {
    margin-bottom: 50px;
    position: relative;

    width: 90%;
    margin: 7% 5%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 50px 100px;
    @media screen and (max-width: 1150px) {
      margin-bottom: 50px;
      position: relative;
    }
    @media screen and (max-width: 1000px) {
      justify-content: flex-start;
    }
    @media screen and (max-width: 850px) {
      flex-direction: column;
      padding-bottom: 60px;
      flex-wrap: wrap-reverse;
    }
    @media screen and (max-width: 700px) {
      padding: 50px 50px;
    }
  }
  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 700px) {
    padding: 50px 50px;
  }
`

const LeftPanel = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: aliceblue;
  margin-right: 5%;
  .Avatar {
    position: relative;
    //background-color: red;
    height: 400px;
    width: 300px;
    #Circle1 {
      position: absolute;
      top: 10px;
      left: -130px;
      width: 200px;
      height: 200px;
      background-color: rgba(232, 170, 12, 0.7);

      border-radius: 50%;
    }
    #Circle2 {
      position: absolute;
      top: 50px;
      width: 350px;
      height: 350px;
      background-color: transparent;
      border: rgba(232, 170, 12, 0.7) solid 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: relative;
        //display:none
        border-radius: 50%;
        width: 250px;
        height: 250px;
      }
    }
  }
  .Titles {
    margin-top: 20px;
    margin-left: 20%;
    width: 80%;
    //background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    h2 {
      color: rgba(0, 0, 0, 0.1);
      line-height: 2;
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    h2: nth-child(odd) {
      color: rgba(232, 170, 12, 0.2);
    }
  }
  @media screen and (max-width: 1150px) {
    .Avatar {
      height: 300px;
      width: 200px;
      #Circle1 {
        top: 30px;
        left: -60px;
        width: 100px;
        height: 100px;
      }
      #Circle2 {
        width: 200px;
        height: 200px;
        border: #e8aa0c solid 20px;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 30%;
    //background-color: coral;
    .Titles {
      width: 100%;
      h2 {
        font-size: 15px;
        //background-color: aqua;
      }
    }
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    //background-color: chocolate;
    .Avatar {
      //background-color: darkcyan;
      height: 200px;
      width: 200px;
      #Circle1 {
        top: 10px;
        left: -30px;
        width: 70px;
        height: 70px;
      }
      #Circle2 {
        top: 25px;
        width: 150px;
        height: 150px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
    .Titles {
      margin-left: 10%;
      /* /background-color: chocolate; */
    }
  }
  @media screen and (max-width: 550px) {
    .Avatar {
      //background-color: darkcyan;
      height: 150px;
      width: 150px;

      #Circle1 {
        top: 10px;
        left: -30px;
        width: 40px;
        height: 40px;
      }
      #Circle2 {
        top: 25px;
        width: 100px;
        height: 100px;
        border: #e8aa0c solid 16px;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .Titles {
      width: 100%;
      h2 {
        font-size: 15px;
      }
    }
  }
`

const RightPanel = styled.section`
  width: 40%;
  margin-left: 5%;
  h1 {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 25px;
    color: #e8aa0c;
  }
  h3 {
    font-size: 12px;
    margin-top: 10px;
  }
  .skills {
    display: flex;
    justify-content: flex-start;
    p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      margin-right: 2px;
      //background-color: whitesmoke;
      &::after {
        content: ', ';
        color: black;
        //background-color: blue;
        letter-spacing: 3px;
      }
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    }
  }
  .review {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    .content {
      margin-top: 30px;
      margin-left: 30px;
      position: relative;
      &::before {
        position: absolute;
        font-size: 100px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        content: '❝';
        color: rgba(232, 170, 12, 0.5);
        top: -50px;
        left: -70px;
      }
      &::after {
        position: absolute;
        font-size: 100px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        content: '❞';
        color: rgba(232, 170, 12, 0.5);
        right: -80px;
        bottom: -80px;
      }
    }
    .author {
      margin-top: 30px;
      margin-right: -70px;
      text-align: right;
      color: black;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bolder;
      font-size: 25px;
    }
  }
  .contact {
    .contactBox {
      display: flex;
      justify-content: flex-start;
      margin-left: 20px;
      h4 {
        margin-right: 10px;
        color: #e8aa0c;
      }
      margin-top: 6px;
      p {
        font-weight: 100;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 60%;
    //background-color: coral;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    //background-color: burlywood;
    margin-left: 0;
  }
  @media screen and (max-width: 700px) {
    .review {
      .content {
        margin-top: 20px;
        margin-left: 20px;
        position: relative;
        &::before {
          font-size: 70px;
          top: -40px;
          left: -40px;
        }
        &::after {
          font-size: 70px;
          right: -20px;
          bottom: -50px;
        }
      }
      .author {
        font-size: 20px;
        margin-right: -30px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .contact {
      font-size: 14px;
      .contactBox {
      }
    }
  }
`

const Setting = styled.section`
  div {
    border: rgba(232, 170, 12, 0.7) solid 2px;
    background-color: rgba(232, 170, 12, 0.7);
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      p {
        color: rgba(232, 170, 12, 1);
      }
    }
  }
  p {
    color: white;
    font-size: 20px;
  }
  @media screen and (max-width: 850px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`
