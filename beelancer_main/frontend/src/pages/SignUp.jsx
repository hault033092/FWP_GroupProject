import { React, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/svg/logo.svg'

const SignUp = () => {
  const [activeButton, setActiveButton] = useState('false')
  //api content
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  //
  const [confirmPassword,setconfirm] = useState("")
  const [passCheck,setPassCheck] = useState(true)
  const [dob,setDob] = useState("")
  const [country,setCountry] = useState("")
  const [address, setAddress] = useState("")
  //
  const [postCode,setPostCode] = useState("")

  const toggleActiveButton = () => {
    setActiveButton(!activeButton)
  }
  const checkPassword = (e)=>
  {
    e.preventDefault()
    //set confirm
    setconfirm(e.target.value)
    //compare
    if(password == e.target.value)
    {
      setPassCheck(true)
    }
    else{
      setPassCheck(false)
    }
  }
  function PassWarning(){
    if(!passCheck)
    {
      return<p className='warning'>not correct to your password</p>
    }
  }
  //saving
  const userURL= "http://localhost:8080/api/user/signup"
  const freelancerURL = "localhost:8080/api/freelancer/createFreelancer"
  const clientURL = ""
  const HandleSubmit=(event)=>
  {
    event.preventDefault()
    //save usser
  }
  return (
    <SignUpContainer>
      <SignUpContent>
        <LogoImage src={Logo} alt='beelancer logo'></LogoImage>
        <Heading>Become a Bee!</Heading>
        <ToggleSection>
          <FreelancerButton
            onClick={toggleActiveButton}
            className={activeButton ? 'active' : ''}
          >
            Freelancer
          </FreelancerButton>
          <EmployerButton
            onClick={toggleActiveButton}
            className={!activeButton ? 'active' : ''}
          >
            Employer
          </EmployerButton>
        </ToggleSection>
        <MainForm>
          <FormColumn>
            <InputGroup>
              <Label htmlFor='name'>Name</Label>
              <InputField
                id='name'
                type='text'
                placeholder='Enter full name'
                maxlength='50'
                isRequired
                onChange={(e)=>{setName(e.target.value)}}
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='email'>Email</Label>
              <InputField
                id='email'
                type='email'
                placeholder='Enter email address'
                maxlength='30'
                onChange={(e)=>{setEmail(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='phone'>Phone</Label>
              <InputField
                id='phone'
                type='tel'
                placeholder='Enter phone number'
                maxlength='50'
                onChange={(e)=>{setPhone(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='password'>Password</Label>
              <InputField
                id='password'
                type='password'
                placeholder='Enter password'
                maxlength='30'
                onChange={(e)=>{setPassword(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='re-password'>Confirm password</Label>
              <InputField
                id='re-password'
                type='password'
                placeholder='Re-type password'
                maxlength='30'
                onChange={(e)=>{checkPassword(e)}}
                isRequired
              ></InputField>
                            <PassWarning />
            </InputGroup>
          </FormColumn>
          <FormColumn>
            <InputGroup>
              <Label htmlFor='dob'>D.O.B</Label>
              <InputField
                id='dob'
                type='date'
                placeholder='Enter Date of Birth'
                min='1922-01-01'
                max='2004-12-31'
                onChange={(e)=>{setDob(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='country'>Country</Label>
              <InputField
                id='country'
                type='text'
                placeholder='Country'
                maxlength='100'
                onChange={(e)=>{setCountry(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <Label htmlFor='district'>Address</Label>
              <InputField
                id='district'
                type='text'
                placeholder='Address'
                maxlength='50'
                onChange={(e)=>{setAddress(e.target.value)}}
                isRequired
              ></InputField>
            </InputGroup>
            <InputGroup>
              <AreaLabel htmlFor='postcode'>Postcode</AreaLabel>
              <TextArea
                id='postcode'
                placeholder='Postcode/Street'
                rows='7'
                maxlength='100'
                onChange={(e)=>{setPostCode(e.target.value)}}
                isRequired
              ></TextArea>
            </InputGroup>
          </FormColumn>
        </MainForm>
        <SignUpField>
          <SignUpButton>Sign Up</SignUpButton>
          <SignInField>
            <Text>Already a Beelancer?</Text>
            <RedirectLink to='/SignIn'>Sign In</RedirectLink>
          </SignInField>
        </SignUpField>
      </SignUpContent>
    </SignUpContainer>
  )
}

const SignUpContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`

const SignUpContent = styled.div`
  height: 50rem;
  width: 50rem;
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
  height: 7rem;
  width: 7rem;
`

const Heading = styled.h1`
  font-size: 2rem;
  font-weigth: 700;
  text-align: center;
  text-transform: uppercase;
`

const ToggleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`

const Button = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 2rem;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  &.active {
    background-color: #e59f17;
  }
`

const FreelancerButton = styled(Button)`
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background-color: #f5f5f5;

  @media screen and (max-width: 1199px) {
    font-size: 0.8rem;
  }
`

const EmployerButton = styled(Button)`
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #f5f5f5;

  @media screen and (max-width: 1199px) {
    font-size: 0.8rem;
  }
`

const SignUpButton = styled(Button)`
  border-radius: 1rem;
  border: none;
  color: #ffffff;
  background-color: #e8aa0c;
`

const MainForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem 2rem 5rem;

  @media screen and (max-width: 1199px) {
    padding: 1rem 0 2rem 0;
  }
`

const FormColumn = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Label = styled.label`
  position: absolute;
  top: -25%;
  left: 5%;
  font-weight: 500;
  background-color: #ffffff;
  color: #e59f17;

  @media screen and (max-width: 1199px) {
    font-size: 0.8rem;
    top: -22.5%;
  }
`

const AreaLabel = styled(Label)`
  top: -10%;
`

const InputField = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 1rem;
  border: 1px solid #e59f17;
  transition: 0.25s ease-in-out;
  
  &:focus {
    background-color: rgba(229, 159, 23, 0.2);
    outline: none;
  }

  &[type='date'] {
    max-height: 3.0625rem;
  }
`

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .warning{
    color:red;
    margin-left: 20px;
    font-size: 14px;
   
  }
`

const TextArea = styled.textarea`
  padding: 0.9rem 0.9rem;
  border-radius: 10px 20px;
  border: 1px solid #e59f17;
  transition: 0.25s ease-in-out;
  height: 100px;
  resize:none;
  &:focus {
    background-color: rgba(229, 159, 23, 0.2);
    outline: none;
  }
`

const SignUpField = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1199px) {
    width: 75%;
  }
`

const SignInField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Text = styled.p`
  font-size: 1rem;
`

const RedirectLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
`

export default SignUp
