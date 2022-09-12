import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
//Logo
import beelancer_logo from '../assets/svg/logo.svg'
import Avatar from '../assets/images/Avatar.png'
export default function ClientProfile() {
  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')
  //
  const [jobs, setJobs] = useState([])
  const [jobInput, setJobInput] = useState('')
  // add skill on button enter
  const addASkill = (event) => {
    if (skillInput == '') {
      return
    }
    setSkillInput('')
    event.preventDefault()
    setSkills((previous) => previous.concat(skillInput))
  }
  const addAJob = (event) => {
    if (jobInput == '') {
      return
    }
    setJobInput('')
    event.preventDefault()
    setJobs((previous) => previous.concat(jobInput))
  }

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Body>
        <Logo>
          <img src={beelancer_logo} alt='logo' />
          <h1>Profile Setting</h1>
        </Logo>
        <Form>
          <form action='' onSubmit={handleSubmit}>
            <div className='avatar'>
              <img src={Avatar} alt='UserAvatar' />
              <div className='overlay'></div>
            </div>

            <TextBox>
              <h2>Full Name</h2>
              <p className='note'>State your full name</p>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Fullname.'
              />
            </TextBox>
            <TextBox>
              <div className='reviewTitle'>
                <h2>Client reviews</h2>
                <h3>✎</h3>
              </div>
              <p className='note'>Select a review you like the most</p>
              <div className='review'>
                <p className='content'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <p className='author'>Sansa Stark</p>
              </div>
            </TextBox>
            <TextBox>
              <h2>Your Skills</h2>
              <p className='note'>
                State skills you have, so we may find jobs suit you.
              </p>
              <div className='skillBox'>
                {skills.map((s) => {
                  return (
                    <SkillStyle>
                      <p>{s}</p>
                      <button
                        onClick={() => {
                          setSkills(skills.filter((e) => e != s))
                        }}
                      >
                        ✖
                      </button>
                    </SkillStyle>
                  )
                })}
              </div>
              <div className='skillHolder'>
                <input
                  className='skillInput'
                  type='text'
                  id='skill'
                  name='skill'
                  placeholder='C# programming, etc...'
                  onChange={(e) => {
                    setSkillInput(e.target.value)
                  }}
                />

                <button className='skillEnter' onClick={addASkill}>
                  Add A Skill
                </button>
              </div>
            </TextBox>
            <TextBox>
              <h2>Job Title</h2>
              <p className='note'>
                What is your job title? VFX artist, Game developer...
              </p>
              <div className='jobTitleHolder'>
                {jobs.map((job) => {
                  return <p>{job}</p>
                })}
              </div>
              <div className='skillHolder'>
                <input
                  className='skillInput'
                  type='text'
                  id='skill'
                  name='skill'
                  placeholder='Job Title'
                  onChange={(e) => {
                    setJobInput(e.target.value)
                  }}
                />

                <button className='skillEnter' onClick={addAJob}>
                  Add Job Title
                </button>
              </div>
            </TextBox>
            <TextBox>
              <h2>Contact</h2>
              <p className='note'>How clients may contact you.</p>
              <h4>Phonenumber:</h4>
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='1900 1234 56'
              />
              <h4>Contact email:</h4>
              <input
                type='text'
                id='contactEmail'
                name='contactEmail'
                placeholder='example@email.com'
              />
            </TextBox>
            <input
              className='submitButton'
              type='submit'
              value='Confirm setting'
            />
          </form>
        </Form>
      </Body>
    </div>
  )
}
const Body = styled.section`
  background-color: rgba(232, 170, 12, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Logo = styled.section`
  //background-color: aliceblue;
  margin-top: 100px;
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
  }
`
const Form = styled.section`
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: white;
  padding: 50px 100px;
  width: 60%;
  box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);

  .avatar {
    width: fit-content;
    height: fit-content;
    position: relative;
    margin-bottom: 30px;
    //background-color: red;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .overlay {
      position: absolute;
      top: 0;
      width: 150px;
      height: 150px;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      display: none;
    }
    cursor: pointer;
    &:hover {
      .overlay {
        display: block;
      }
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .submitButton {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #e8aa0c;
    border: #e8aa0c solid 3px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      color: #e8aa0c;
    }
  }
`
const TextBox = styled.section`
  position: relative;
  width: 100%;
  //background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20%;
  h2 {
  }
  p {
    font-size: 14px;
    margin-bottom: 5px;
    margin-left: 5px;
    font-style: italic;
    color: rgba(0, 0, 0, 0.5);
  }
  input {
    width: 100%;
    background-color: rgba(232, 170, 12, 0.3);
    border: none;
    border-radius: 10px;
    height: 40px;
    padding: 1px 2%;
    font-size: 16px;
    font-weight: lighter;
    ::placeholder {
      font-family: 'Courier New', Courier, monospace;
      color: #e8aa0c;
      font-weight: lighter;
    }
    &:focus {
      color: rgba(0, 0, 0, 0.5);
      outline: none;
      background-color: none;
      border-bottom: #e8aa0c solid 1px;
    }
  }
  .reviewTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2 {
    }
    h3 {
      background-color: rgba(232, 170, 12, 0.4);
      color: white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: #e8aa0c;
      }
    }
  }
  .review {
    p {
      margin-left: 0;
      font-style: normal;
      color: black;
      font-size: 18px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      font-weight: 100;
    }
    .author {
      margin-right: 0;
      margin-left: auto;
      //background-color: aliceblue;
      text-align: right;
      font-size: 14px;
      color: #e8aa0c;
      &:before {
        content: '-';
      }
    }
  }
  .skillBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    //background-color: antiquewhite;
    p {
      color: #e8aa0c;
      font-weight: 600;
      //background-color: darkblue;
    }
  }
  .skillHolder {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    input {
      width: 70%;
    }
    button {
      width: 25%;
      cursor: pointer;
      background-color: #e8aa0c;
      border: #e8aa0c solid 2px;
      color: white;
      font-weight: bold;
      font-size: 14px;
      &:hover {
        color: #e8aa0c;
        background-color: transparent;
      }
    }
  }
  .jobTitleHolder {
    p {
      color: rgba(0, 0, 0, 0.1);
      line-height: 0.8;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-style: normal;
    }
    p: nth-child(odd) {
      color: rgba(232, 170, 12, 0.4);
    }
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    color: black;
  }
  //background-color: bisque;
  margin-bottom: 10px;
`
const SkillStyle = styled.section`
  width: fit-content;
  border-radius: 10px;
  border: #e8aa0c solid 2px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #e8aa0c;
  margin-right: 10px;
  margin-bottom: 5px;
  p {
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    margin-left: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #e8aa0c;
    cursor: pointer;
  }
`
