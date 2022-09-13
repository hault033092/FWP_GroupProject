import React, { useState } from 'react'

import styled from 'styled-components'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
//image
import beelancer_logo from '../assets/svg/logo.svg'

const JobPost = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [count, setCount] = useState(400)
  //info
  const [title, setTitle] = useState("")
  const [cate, setCate] = useState("")
  const [description, setDescription] = useState("")

  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')

  const [budget, setBudget] = useState(0)
  //submite check
  const [submit,setSubmit] = useState(false)
  //path
  const url = "http://localhost:8080/api/jobPost/createPost"
  
  const save = () => {
    //event.preventDefault()

    axios.post(url,
      {
        title: title,
        description: description,
        jobCategory: cate,
        skills: skills.toString(),
        budget: budget
      },{
        headers:{
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFmNGM4NDQxMmQyODg1ODYwMjZhYjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjMwNjA3NDR9.vUWXh262lz12tbp9E9ZIWr26sW6N3b62HXFwrECsUa0'
        }
      }
    ).then(res => {
      console.log(res)
      //do something after job post is posted
    })
  }

  //descripition word count
  function WordCount() {
    if (count < 0) {
      return (<p className='outOfCount'>Too Long!!</p>)
    }
    else {
      //console.log("count is:" + count)
      return (
        <p className='wordCount'>{count} characters remaining</p>
      )
    }
  }
  //display error on submit if content is empty
  function SubmitErrorWarning()
  {
    if(submit === true)
    {
      return(<p className='submitWarning'>Please check your post, an input field may be missing!</p>)
    }
    return
  }
  //
  const onSelectedFile = (event) => {
    const selectedFiles = event.target.files
    const selectedFilesArray = Array.from(selectedFiles)
    //console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file)
    })
    setSelectedImages((previous) => previous.concat(imagesArray))
  }
  // add skill on button enter
  const addASkill = (event) => {
    if (skillInput == '') {
      return
    }
    setSkillInput('')
    event.preventDefault()
    setSkills((previous) => previous.concat(skillInput))
  }

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true)
    if(title ==="")
    {
      console.log("missing content")
      return
    }
    if(count<0 || count >=400)
    {
      console.log("failed submite due to description")
      return
    }
    if(cate ==="")
    {
      console.log("missing catergory")
      return
    }
    if(budget === 0)
    {
      console.log("empty budget")
    }
    //
    console.log("submite check")
    save()
  }
  return (
    <div style={{
      backgroundColor: ' rgba(232, 170, 12, 0.5)',
      paddingTop: '50px', paddingBottom: '50px'
    }}>
      <BackgroundLayer />
      <PostForm>
        <img className='logo' src={beelancer_logo} alt='beelancer logo' />
        <h1>Tell us what you need done.</h1>
        <p className='introQuote'>
          Our dilligent and hardworking freelancers will get your work done.
          Sweet as honey!!
        </p>
        <form action='' onSubmit={handleSubmit}>
          <TextBox>
            <h2>Name Of Project</h2>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Game of throne audio book, etc..'
              onChange={(event) =>
                setTitle(event.target.value)}
            />
          </TextBox>
          <TextBox>
            <h2>Category Of Project</h2>
            <input
              type='category'
              id='category'
              name='category'
              placeholder='Video games, Music app'
              onChange={(event) =>
                setCate(event.target.value)}
            />
          </TextBox>
          <TextBox>
            <h2>Description</h2>
            <p></p>
            <textarea
              name='description'
              id='description'
              placeholder='We need emotional voices...'
              onChange={(e) => {
                setCount(400 - e.target.value.length)
                setDescription(e.target.value)
              }}
            ></textarea>
            <WordCount />
          </TextBox>
          {
            /*
          <TextBox>
            <h2>Visualise your project</h2>
            <div className='imageBox'>
              {selectedImages.map((image, index) => {
                return (
                  <div key={image} className='previewHolder'>
                    <button
                      onClick={() =>
                        setSelectedImages(
                          selectedImages.filter((e) => e != image)
                        )
                      }
                      className='quitButton'
                    >
                      ✖
                    </button>
                    <img src={image} />
                  </div>
                )
              })}

              <label>
                <input
                  className='imageInput'
                  type='file'
                  name='images'
                  onChange={onSelectedFile}
                  multiple
                  accept='image/png,image/jpeg,image/webp'
                ></input>
                <div className='addBox'>
                  <p className='addIcon'>+</p>
                  <p className='addDes'>Add Image</p>
                </div>
              </label>
            </div>
          </TextBox>
            */}
          <TextBox>
            <h2>Skill Requirement</h2>
            <p className='note'>Note: only one skill at a time</p>
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
          <PaymentBox>
            <h2>Payment</h2>
            <div className='extendBox'>
              <SubTextBox>
                <h3>Name your payment</h3>
                <div className='paymentGroup'>
                  <input type='text' id='miniumPayment' name='miniumPayment'
                   onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(event) =>{
                    setBudget(event.target.value)
                  }} />
                  <p>USD</p>
                </div>
              </SubTextBox>
            </div>
          </PaymentBox>
          <SubmitErrorWarning />
          <input className='submitButton' type='submit' value='Post Project' />
        </form>
      </PostForm>
    </div>
  )
}

const PostForm = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  background-color: white;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
  padding: 50px 100px;
  .logo {
    width: 200px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin-top: 10px;
    text-align: center;
    font-size: 35px;
  }
  .introQuote {
    color: #e8aa0c;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    margin-bottom: 50px;
  }
  .submitButton {
    margin-top: 40px;
    background-color: #e8aa0c;
    border: #e8aa0c solid 3px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
      color: #e8aa0c;
    }
  }
  .submitWarning{
    text-align: center;
    font-size: 14px;
    font-weight: lighter;
    color:red;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 50px 50px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0;
    margin: 0;
    padding: 70px 50px;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    margin: 0;
    padding: 80px 30px;
  }
`
const BackgroundLayer = styled.section`
  width: 100%;
  background-color: rgba(232, 170, 12, 0.5);
  position: absolute;
  top:0;
  height:700px;
  z-index: 1;
`
const TextBox = styled.section`
  margin-bottom: 10px;
  h2 {
    margin-bottom: 5px;
  }
  input {
    background-color: rgba(232, 170, 12, 0.1);
    border: none;
    border-radius: 10px;
    width: 96%;
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
  textarea {
    background-color: rgba(232, 170, 12, 0.1);
    border: none;
    border-radius: 10px;
    width: 96%;
    height: 200px;
    padding: 10px 2%;
    font-size: 16px;
    font-weight: lighter;
    resize: none;
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
  .wordCount {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    text-align: right;
    margin-right: 4%;
    font-style: italic;
  }
  .outOfCount{
    color: #eb4f34;
    font-size: 14px;
    text-align: right;
    margin-right: 4%;
    font-style: italic;
    font-weight:  bold;
  }
  .imageBox {
    width: 96%;
    height: fit-content;
    padding: 2%;
    border-radius: 10px;
    border: rgba(0, 0, 0, 0.5) dashed 2px;
    display: flex;
    flex-wrap: wrap;
    .previewHolder {
      position: relative;
      width: 100px;
      height: 100px;
      .quitButton {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: white;
        width: 20px;
        height: 20px;
        padding: 10px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: rgba(232, 170, 12, 0.5) solid 2px;
        color: rgba(232, 170, 12, 0.5);
        font-size: 10px;
        cursor: pointer;
      }
      img {
        width: 100px;
        height: 100px;
      }
      margin: 5px;
    }
  }
  .addBox {
    position: relative;
    color: #e8aa0c;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: #e8aa0c dashed 2px;
    cursor: pointer;
    margin: 5px;
    .addIcon {
      display: block;
      font-size: 40px;
      line-height: 45px;
      font-weight: 900;
    }
    .addDes {
      font-size: 16px;
      font-weight: 100;
    }
  }
  .imageInput {
    display: none;
  }
  .note {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    text-align: left;
    margin-right: 4%;
    font-style: italic;
  }
  .skillBox {
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .skillHolder {
    display: flex;
    justify-content: space-between;
    padding-right: 5%;
  }
  .skillInput {
    width: 75%;
  }
  .skillEnter {
    width: 20%;
    background-color: #e8aa0c;
    border: #e8aa0c solid 2px;
    border-radius: 30px;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: white;
      color: #e8aa0c;
    }
  }
`
const SubTextBox = styled.section`
  position: relative;
  width: 60%;
  margin-left: 5%;
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;
  }
  .paymentGroup{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    p{
      margin-left: 50px;
      color:#e8aa0c;
      font-weight: bold;
    }
  }
  input {
    margin-left: 10px;
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgba(232, 170, 12, 0.1);
    font-size: 14px;
    padding-left: 2%;
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
`
const SkillStyle = styled.section`
  width: fit-content;
  border-radius: 10px;
  border: #e8aa0c solid 2px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
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
const PaymentBox = styled.section`
  margin-bottom: 10px;
  h2 {
    margin-bottom: 5px;
  }

  .extendBox {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    select {
      margin-left: 50px;
      width: fit-content;
      height: fit-content;
      padding: 10px 10px;
      border-radius: 15px;
      border: #e8aa0c solid 2px;
      color: #e8aa0c;
      font-weight: 600;
      &focus {
        outline: none;
      }
    }
  }
`
const PaymentSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  input {
    display: inline;
    width: 17px;
    height: 17px;
    border: #e8aa0c solid 2px;

    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }

  label {
    width: 200px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    float: inline-start;
    height: 20px;
    font-weight: 500;
    text-decoration: none;
    color: black;
    margin-right: 10px;
    p {
      width: fit-content;
      font-size: 20px;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 450px) {
    label {
      width: fit-content;
      p {
        font-size: 14px;
      }
    }
  }
`

export default JobPost
