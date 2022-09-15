import { React, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/svg/logo.svg'
import axios from 'axios'


const SignIn = () => {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  //submit
  const [submit,setSubmit] = useState(false)
  const navigate = useNavigate();
  //URL
  const URL = "http://localhost:8080/api/user/signin"
  const handleSubmit = (event) =>{
    event.preventDefault()
    //
    setSubmit(true)
    if(email === "" || pass ==="")
    {
      return
    }
    //sign in
    axios.post(URL,{
      email:email,
      password:pass
    }).then(res => {console.log(res)
    console.log(res.token)})
    .catch((error) => {
      // Error
      if (error.response) {
        //console.log("some thing here")
        return
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
        //console.log("or here")
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          //console.log(error.request);
      } else {

          // Something happened in setting up the request that triggered an Error
          //console.log('Error', error.message);
      }
      console.log(error.config);
  });

  //navigate to user profile
  navigate("/profileSetting")
  }
  function SubmitWarning(){
    if(submit)
    {
      //console.log("check submit")
      return <p className='warning'>Email or password not correct!</p>
    }
  }
  return (
    <SignInContainer>
      <SignInContent>
        <LogoImage src={Logo} alt='beelancer logo'></LogoImage>
        <Heading>Beelancer Login</Heading>
        <MainForm>
          <InputGroup>
            <Label htmlFor='email'>Email</Label>
            <InputField
              id='email'
              type='email'
              placeholder='Enter email address'
              onChange={(e)=>{setEmail(e.target.value)}}
              isRequired
            ></InputField>
          </InputGroup>
          <InputGroup>
            <Label htmlFor='password'>Password</Label>
            <InputField
              id='password'
              type='password'
              placeholder='Enter password'
              onChange={(e)=>{setPass(e.target.value)}}
              isRequired
            ></InputField>
          </InputGroup>
          <PasswordField>
            <RememberPassword>
              <CheckboxField id='forgot' type='checkbox'></CheckboxField>
              <CheckboxLabel htmlFor='forgot'>Remember me</CheckboxLabel>
            </RememberPassword>
            <RedirectLink to='/ForgotPassword'>
              Forgot your password?
            </RedirectLink>
          </PasswordField>
        </MainForm>
        <SignInField>
          <SubmitWarning />
          <SignInButton onClick={(event)=>{handleSubmit(event)}}>Sign In</SignInButton>
          <SignUpField>
            <Text>New to our Hive?</Text>
            <RedirectLink to='/SignUp'>Sign Up</RedirectLink>
          </SignUpField>
        </SignInField>
      </SignInContent>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`

const SignInContent = styled.div`
  height: 35rem;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
  margin: 2rem 0;
  padding: 2rem 2rem;
  border-radius: 50%;

  @media screen and (max-width: 1199px) {
    width: 22rem;
    border-radius: 2rem;
    padding: 2rem 1rem;
  }
`

const LogoImage = styled.img`
  height: 5rem;
  width: 5rem;
`

const Heading = styled.h1`
  font-size: 2rem;
  font-weigth: 700;
  text-align: center;
  text-transform: uppercase;
`

const MainForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem;

  @media screen and (max-width: 1199px) {
    padding: 1rem 0 2rem 0;
  }
`

const Label = styled.label`
  position: absolute;
  top: -25%;
  left: 5%;
  font-weight: 500;
  color: #e8aa0c;
  background-color: #ffffff;

  @media screen and (max-width: 1199px) {
    font-size: 0.8rem;
    top: -22.5%;
  }
`

const CheckboxLabel = styled.label`
  width: auto;
  position: static;
  background-color: transparent;

  @media screen and (max-width: 1199px) {
    white-space: nowrap;
  }
`

const InputField = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: 1px solid #e59f17;
  transition: 0.25s ease-in-out;

  &:focus {
    background-color: powderblue;
  }
`

const CheckboxField = styled(InputField)`
  width: auto;
  margin-right: 0.4rem;
`

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const PasswordField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RememberPassword = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`

const SignInField = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .warning{
    color:red;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (max-width: 1199px) {
    width: 75%;
  }
`

const SignUpField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`

const SignInButton = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: #ffffff;
  background-color: #e59f17;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`

const Text = styled.p`
  font-size: 1rem;
`

const RedirectLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
`

export default SignIn
