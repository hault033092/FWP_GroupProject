import React, { useState,useEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
//Logo
import beelancer_logo from '../assets/svg/logo.svg'
import Avatar from '../assets/images/Avatar.png'
export default function ProfileSetting() {
  //avatar profile 
    const [image,setImage] = useState(null)
    const [preview,setPreview] = useState(Avatar)
    const fileInputRef = useRef(null)
    useEffect(()=>{
      if(image){
        const render = new FileReader()
        render.onloadend = () =>{
          setPreview(render.result)
        };
        render.readAsDataURL(image)
      }
      else{
       setPreview(Avatar)
      }
    })
    //review
    const [reviewShown,setReviewShown] = useState(false);
    const handleReviewClick = event =>{
      //toggle show state
      setReviewShown(!reviewShown)
    }
    //skill
    const [skills, setSkills] = useState([])
    const [skillInput, setSkillInput] = useState('')
    //
    const [jobs, setJobs] = useState([])
    const [jobInput, setJobInput] = useState("")
    // add skill on button enter
  const addASkill = (event) => {
    if(skillInput == "")
    {
        return
    }
    setSkillInput("")
    event.preventDefault()
    setSkills((previous) => previous.concat(skillInput))
  }
  const addAJob = (event) =>{
    if(jobInput == "")
    {
        return
    }
    setJobInput("")
    event.preventDefault()
    setJobs((previous) => previous.concat(jobInput))
  }

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div style={
      {
        position: "relative",
        width: "100%",
      
      }
    }>
        <Body>
        <Logo>
            <img src={beelancer_logo} alt="logo" />
            <h1>Profile Setting</h1>
        </Logo>
        <Form>
            <form action='' onSubmit={handleSubmit}>
            <div className='avatar'>
                <img src={preview} alt="UserAvatar" />
                <button className='overlay'
                            onClick= {()=>{fileInputRef.current.click()}}
                ></button>
            <input type="file" name='images'accept='image/png,image/jpeg,image/webp' ref = {fileInputRef}
            onChange = {(event) =>{
              const file = event.target.files[0]
              if(file)
              {
                setImage(file)
              }
              else{
                setImage(Avatar)
              }
            }} />
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
            <button onClick={()=>{handleReviewClick()}}>✎</button>
            </div>
            <p className='note'>Select a review you like the most</p>
            <div className='review'>
                <p className='content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <p className='author'>Sansa Stark</p>
            </div>
            </TextBox>
            <TextBox>
            <h2>Your Skills</h2>
            <p className='note'>State skills you have, so we may find jobs suit you.</p>
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
            <p className='note'>What is your job title? VFX artist, Game developer...</p>
            <div className='jobTitleHolder'>
                {jobs.map((job) =>{
                    return(
                        <p>{job}</p>
                    )
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
            <input className='submitButton' type='submit' value='Confirm setting' />
          </form>
        </Form>
        </Body>
        {reviewShown &&(
        <ReviewSelector>
          <div className='Panel'>
                <button className='cancel' onClick={()=>handleReviewClick()}>
                ╳
                </button>
                <h1>Select a review</h1>
                <p>Your client will see the review, let people know how you have done your work.</p>
                <div className='reviewHolder'>
                  <div className='reviewBox'>
                    <h4>UserName</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Select</button>
                  </div>
                  <div className='reviewBox'>
                    <h4>UserName</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Select</button>
                  </div>
                  <div className='reviewBox'>
                    <h4>UserName</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Select</button>
                  </div>
                </div>

          </div>
        </ReviewSelector>
        )}
    </div>
  )
}
const Body = styled.section`
    background-color: rgba(232, 170, 12, 0.5);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center ;
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
    img{
        width: 100px;
    }
    h1{
        font-size: 50px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.4);
    }
    @media screen and (max-width:850px) {
      h1{
        font-size: 40px;

      }
    }
    @media screen and (max-width:700px) {
      h1{
        width: 100%;
        text-align: center;
        font-size: 30px;

      }
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
   
    .avatar{
        width: fit-content;
        height: fit-content;
        position: relative;
        margin-bottom: 30px;
        //background-color: red;
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .overlay{
            position: absolute;
            top: 0;
            width: 150px;
            height: 150px;
            background-color: rgba(0, 0, 0, 0.25);
            border-radius: 50%;
            display: none;
            cursor: pointer;
            outline: #e8aa0c;
            border: #e8aa0c solid 2px;
        }
        input{
          display: none;
        }
        cursor: pointer;
        &:hover{
            .overlay{
            display: block;
            }
        }
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .submitButton{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #e8aa0c;
        border: #e8aa0c solid 3px;
        color: white;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        &:hover{
            background-color: transparent;
            color: #e8aa0c;
        }
    
    }
    @media screen and (max-width:1300px) {
      width: 70%;
    }   
     @media screen and (max-width:1150px) {
      width: 80%;
      padding: 50px 50px;
    }
    @media screen and (max-width:600px) {
      width: 100%;
      padding: 50px 50px;
      box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
   
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
    h2{

    }
    p{
        font-size: 14px;
        margin-bottom: 5px;
        margin-left: 5px;
        font-style: italic;
        color: rgba(0, 0, 0, 0.5);
    }
    input{
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
    .reviewTitle{
        width: 100%;
            display: flex;
            justify-content: space-between;
            h2{

            }
            button{
                background-color: rgba(232, 170, 12, 0.4);
                color: white;
                border-radius: 50%;
                border: #e8aa0c;
                width: 30px;
                height: 30px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    background-color: #e8aa0c;
                }
            }
        }
    .review{
        p{
            margin-left: 0;
            font-style: normal;
            color: black;
            font-size: 18px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 100;
        }
        .author{
            margin-right:0;
            margin-left: auto;
            //background-color: aliceblue;
            text-align: right;
            font-size: 14px;
            color: #e8aa0c;
            &:before{
                content: "-";
            }
        }
    }
    .skillBox{
        display: flex;
        flex-direction: row;
        width: 100%;
        //background-color: antiquewhite;
        p{
            color: #e8aa0c;
            font-weight: 600;
            //background-color: darkblue;
        }
    }
    .skillHolder{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        input{
            width: 70%;
        }
        button{
            width: 25%;
            cursor: pointer;
            background-color: #e8aa0c;
            border: #e8aa0c solid 2px;
            color: white;
            font-weight: bold;
            font-size: 14px;
            &:hover{
                color:#e8aa0c;
                background-color: transparent;
            }
        }
    }
    .jobTitleHolder{
        p{
            color: rgba(0,0,0,0.1);
            line-height: 0.8;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px; 
            font-style :normal ;
        }
        p: nth-child(odd)
        {
            color: rgba(232, 170, 12, 0.4)
        }
    }
    h4{
        font-weight: 400;
        font-size: 14px;
        color: black;
    }
    //background-color: bisque;
    margin-bottom: 10px;
    @media screen and (max-width:1150px) {  
      padding: 0px 10%;
    }
    @media screen and (max-width:700px) {  
      padding: 0px 5%;
    }
    @media screen and (max-width:500px) {  
      padding: 0px 0%;
    }
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
const ReviewSelector = styled.section`
  position: fixed;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .Panel{
    background-color: white;
    position: relative;
    width: 70%;
    height: fit-content;
    padding: 50px 100px;
    border-radius: 30px;
  }
  .cancel{
    position: absolute;
    top: -10px;
    right:-20px;
    background-color: #e8aa0c;
    border: #e8aa0c solid 2px;
    color: white;
    padding: 6px 10px;
    border-radius: 10px;
    font-weight: 900;
    cursor:pointer;
    &:hover{
      background-color: transparent;
      color: #e8aa0c;
    }
  }
  h1{
    color: #e8aa0c;
  }
  p{
    font-style: italic;
    font-size: 14px;
    margin-left: 5px;
  }
  .reviewHolder{
    position: relative;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .reviewBox{
      position: relative;
      width: 30%;
      p{
        font-style: normal;
        font-size: 12px;
        font-weight: 100;
      }
      button{
        background-color: #e8aa0c;
        border: #e8aa0c solid 2px;
        color:white;
        padding: 5px 20px;
        font-size: 16px;
        margin-top: 10px;
        font-weight: 600;
        cursor: pointer;
        &:hover{
          color: #e8aa0c;
          background-color: transparent;
        }
      }
    }
    .reviewBox:nth-child(odd)
    {
      &::before
      {
        content: "";
        position: absolute;
        left:-10px;
        height: 100px;
        width: 3px;
        background-color: rgba(232, 170, 12, 0.6)
      }

    }
    .reviewBox:nth-child(even)
    {
      &::before
      {
        content: "";
        position: absolute;
        left:-10px;
        height: 100px;
        width: 3px;
        background-color: rgba(0, 0, 0, 0.6)
      }

    }
  }
  @media screen and (max-width: 1300px){
    .Panel{
      width: 80%;
    }
  }
  @media screen and (max-width: 1150px){
    .Panel{
      width: 90%;
    }
  }
  @media screen and (max-width: 1000px){
    .reviewHolder{
      flex-direction: column;
      .reviewBox{
      width: 100%;
      margin-bottom: 10px;
      p{
        font-size: 12px;
      }
      }
    }

  }
  @media screen and (max-width: 800px){
    .Panel{
      padding: 50px 50px;
    }

  }
  @media screen and (max-width: 600px){
    .Panel{
      padding: 50px 50px;
      width: 100%;
      border-radius: 0;
      .cancel{
        top: 10px;
        right: 10px;
      }
    }

  }
`