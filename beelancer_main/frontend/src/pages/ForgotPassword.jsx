import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/beelancer_logo.svg'

const ForgotPassword = () => {
  return (
    <ForgotPassContainer>
        <ForgotPassContent>
            <LogoImage src={Logo} alt="beelancer logo"></LogoImage>
            <Heading>Reset password</Heading>
            <MainForm>
                <InputGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <InputField id="email" type="email" placeholder="Enter your email" isRequired></InputField>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="new-pass">New Password</Label>
                    <InputField id="new-pass" type="password" placeholder="Enter new password" isRequired></InputField>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="retype-pass">Retype Password</Label>
                    <InputField id="retype-pass" type="password" placeholder="Re-type new password" isRequired></InputField>
                </InputGroup>
            </MainForm>
            <SubmitField>
                <SubmitButton>Confirm</SubmitButton>
                <SignInField>
                  <Text>Remembered?</Text>
                  <RedirectLink to="/SignUp">Sign In</RedirectLink>
                </SignInField>
            </SubmitField>
        </ForgotPassContent>
    </ForgotPassContainer>
  )
}

const ForgotPassContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;
`

const ForgotPassContent = styled.div`
  height: 35rem;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #FFFFFF;
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
  padding: 2rem 3rem 2rem 3rem;

  @media screen and (max-width: 1199px) {
    padding: 1rem 0 2rem 0;
  }
`

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const InputField = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: 1px solid #E59F17;
  transition: 0.25s ease-in-out;

  &:focus {
    background-color: powderblue;
  }
`

const Label = styled.label`
  position: absolute;
  top: -25%;
  left: 5%;
  font-weight: 500;
  color: #E59F17;
  background-color: #FFFFFF;

  @media screen and (max-width: 1199px) {
    font-size: 0.8rem;
    top: -22.5%;
  }
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: #FFFFFF;
  background-color: #E59F17;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`

const SubmitField = styled.div`
  width: 40%;
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
  text-align: center;
  color: dodgerblue;
`

export default ForgotPassword;