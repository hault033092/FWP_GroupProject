import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/beelancer_logo.svg'

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInContent>
        <LogoImage src={Logo} alt="beelancer logo"></LogoImage>
        <Heading>Beelancer Login</Heading>
        <MainForm>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <InputField id="email" type="text" placeholder="Enter email address" isRequired></InputField>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <InputField id="password" type="text" placeholder="Enter password" isRequired></InputField>
          </InputGroup>
          <PasswordField>
            <RememberPassword>
              <CheckboxField id="forgot" type="checkbox"></CheckboxField>
              <CheckboxLabel htmlFor="forgot">Remember me</CheckboxLabel>
            </RememberPassword>
            <RedirectLink to="/forgot-password">Forgot your password?</RedirectLink>
          </PasswordField>
        </MainForm>
        <SignInField>
          <SignInButton>Sign In</SignInButton>
          <SignUpField>
            <Text>Join our Hive?</Text>
            <RedirectLink to="/SignUp">Sign Up</RedirectLink>
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
  background-color: #F5F5F5;
`

const SignInContent = styled.div`
  height: 35rem;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #E8AA0C66;
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

const Label = styled.label`
  position: absolute;
  top: -25%;
  left: 5%;
  font-weight: 500;
  color: #000000;
  background-color: #E8AA0C;
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
  border: 0.2rem solid #E59F17;
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
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
  color: #FFFFFF;
  background-color: #E59F17;
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

export default SignIn;