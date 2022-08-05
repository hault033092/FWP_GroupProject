import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'

import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'
//image
import beelancer_logo from '../assets/beelancer_logo.svg'
function PayByHour()
{
  return(
    <SubTextBox>
    <h3>Minium Payment</h3>
    <input type="text" id="miniumPayment" name ="miniumPayment"/>
    <h3>Maxium Payment</h3>
    <input type="text" id="miniumPayment" name ="miniumPayment"/>
    </SubTextBox>
  )
}
function PayFixedPrice()
{
  return(
    <SubTextBox>
    <h3>Name your Payment</h3>
    <input type="text" id="miniumPayment" name ="miniumPayment"/>
    </SubTextBox>
  )
}
function SkillBox()
{
  return(
      <SkillStyle>
        <p>some</p>
        <p>✖</p>
      </SkillStyle>
  )
}
const JobPost = () => {

  return <div style={{backgroundColor: '#ECECEC'}}>
    <Header />
    <PostForm>
      <img src={beelancer_logo} alt="beelancer logo" />
      <h1>Tell us what you need done.</h1>
      <p>Our dilligent and hardworking freelancers will get your work done. Sweet as honey!!</p>
      <form action="">
      <TextBox>
        <h2>Name Of Project</h2>
        <input type="text" id ="name" name="name" />
      </TextBox>
      <TextBox>
        <h2>Description</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p>4000 characters remaining</p>
      </TextBox>
      <TextBox>
        <h2>Visualise your project</h2>
        <div></div>
      </TextBox>
      <TextBox>
        <h2>Skill Requirement</h2>
       <SkillBox SkillName={"C#Programming"}/>
        <input type="text" id ="skill" name="skill" />
      </TextBox>
      <TextBox>
        <h2>Payment</h2>
          <Link to="/byHour"> 
          <input type="radio" id="paymentByHour" name ="payment"/>
          <label htmlFor="paymentByHour">Pay by the hour</label>
          </Link>
          <Link to="/fixedPrice">
          <input type="radio" id="payFixedPrice" name ="payment"/>
          <label htmlFor="payFixedPrice">Pay fixed price</label>
          </Link>
          <Routes>
            <Route path="/byHour" element ={<PayByHour/>} />
            <Route path="/fixedPrice" element ={<PayFixedPrice/>} />
          </Routes>
        <select name="currency" id="currency">
          <option value="USD">USD</option>
          <option value="VND">VND</option>
        </select>
      </TextBox>
      <input type="submit" value="Post Job"/>
      </form>
    </PostForm>
    <Footer />
  </div>
}

export default JobPost
const PostForm = styled.section`
`
const TextBox = styled.section`
`
const SubTextBox=styled.section``
const SkillStyle=styled.section``