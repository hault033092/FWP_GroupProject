import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      {/* hero section start */}
      <HeroSection>
        <Container bgColor='#ECECEC'>
          <div style={{ width: '100%' }}>
            <div className='wrap'>
              <div
                style={{
                  position: 'relative',
                  zIndex: '9',
                }}
              >
                <div className='leftLine' />
                <img
                  style={{
                    position: 'relative',
                  }}
                  src='./images/image2.png'
                />
              </div>
              <div className='leftCol'>
                <p>WANT TO BECOME A BEE IN CLICKS.</p>
                <p>OUR NEST?</p>
                <p>GET YOURSELF SEEN BY</p>
                <p>OUR CLIENTS WITH JUST A</p>
                <p>FEW CLICKS.</p>
                <Button txtColor='#fff' borderColor='#E9B141' bgColor='#E9B141'>
                  BECOME A FREELANCER
                </Button>
              </div>
            </div>
            {/* first col end */}
            {/* second col start */}
            <div className='wrap2'>
              <div
                style={{
                  position: 'relative',
                  zIndex: '9',
                }}
              >
                <div className='rightLine' />

                <img
                  style={{
                    position: 'relative',
                    maxWidth: '600px',
                  }}
                  src='/image62.png'
                />
              </div>
              <div className='rightCol'>
                <p>WANT TO BECOME A BEE IN CLICKS.</p>
                <p>OUR NEST?</p>
                <p>GET YOURSELF SEEN BY</p>
                <p>OUR CLIENTS WITH JUST A</p>
                <p>FEW CLICKS.</p>
                <Button
                  txtColor='#22222280'
                  borderColor='#E9B141'
                  bgColor='transparent'
                >
                  BECOME A FREELANCER
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </HeroSection>
      {/* hero section end */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          style={{
            width: '450px',
            height: '550px',
          }}
          src='./images/quote1.png'
        />
      </section>
      {/* qoute section end */}

      {/* client section start */}
      <ExpectedSection bgColor={'#f0e1ba'}>
        <h2 color='#000'>WHAT TO EXPECTED (AS A CLIENT)</h2>
        <Container>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/vector.png' />
            <h3>
              Financially
              <br /> benefit
            </h3>
            <p>
              Decent quality but still affordable. Keeping you one step away
              from emptying your wallet.
            </p>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/vector2.png' />
            <h3>Secured and easy payment</h3>
            <p>
              Payment methods are secured with top-notch security protocol and
              it is easy as pie.
            </p>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/vector3.png' />
            <h3>All day and all night availability</h3>
            <p>
              Never miss an oppotunity to find the best freelancer for the right
              job with our 24/7 service.
            </p>
          </div>
        </Container>
      </ExpectedSection>
      {/* client section end */}
      {/* freelancer section start */}
      <ExpectedSection bgColor={'#222222'}>
        <h2 style={{ color: '#E8AA0C' }}>
          {' '}
          WHAT TO EXPECTED (AS A FREELANCER)
        </h2>
        <Container>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/Vector4.png' />
            <h3
              style={{
                color: '#E8AA0C',
              }}
            >
              A well-paid job
            </h3>
            <p
              style={{
                color: '#E8AA0C',
              }}
            >
              We understand that you come to us to make a living. And we are
              happy to provide you the best earning.
            </p>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/Vector5.png' />
            <h3
              style={{
                color: '#E8AA0C',
              }}
            >
              You are safe being with us
            </h3>
            <p
              style={{
                color: '#E8AA0C',
              }}
            >
              Your personal information are in our safe. With your consent, only
              the client can see who you are.
            </p>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src='./images/Vector6.png' />
            <h3
              style={{
                color: '#E8AA0C',
              }}
            >
              Effortless advertising
            </h3>
            <p
              style={{
                color: '#E8AA0C',
              }}
            >
              With just a few clicks and types, you will be advertised. Just sit
              back and enjoy your coffe.
            </p>
          </div>
        </Container>
      </ExpectedSection>
      {/* freelancer section end */}
    </div>
  )
}

const ExpectedSection = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 20px 20px;
  text-align: center;
  padding: 100px 20px 110px 20px;

  h2 {
    box-sizing: border-box;
    font-size: 54px;
    font-weight: 400;
    margin-bottom: 130px;
  }
  h3 {
    box-sizing: border-box;
    margin-top: 24px;
    font-size: 30px;
    font-weight: 700;
    padding: 0 21px;
  }
  p {
    box-sizing: border-box;
    margin-top: 24px;
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
    padding: 0 40px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    img {
      width: 80px;
      height: 80px;
    }
    h2 {
      font-size: 44px;
      margin-bottom: 90px;
    }
    h3 {
      margin-top: 20px;
      font-size: 24px;
      padding: 0 18px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
  @media (max-width: 924px) {
    img {
      width: 70px;
      height: 70px;
    }
    h2 {
      font-size: 38px;
      margin-bottom: 90px;
    }
    h3 {
      margin-top: 18px;
      font-size: 20px;
      padding: 0 18px;
    }
    p {
      margin-top: 18px;
      font-size: 18px;
      padding: 0 26px;
    }
  }
  @media (max-width: 767px) {
    section {
      flex-direction: column;
    }
    img {
      width: 70px;
      height: 70px;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 90px;
    }
    h3 {
      margin-top: 18px;
      font-size: 20px;
      padding: 0 18px;
    }
    p {
      margin-top: 18px;
      font-size: 18px;
      padding: 0 26px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1280px) {
    h2 {
      padding: 10px;
      font-size: 34px;
    }
    h3 {
      padding: 4px;
      font-size: 22px;
    }
    p {
      padding: 10px;
      font-size: 18px;
    }
  }
`

const HeroSection = styled.section`
  background: #ececec;
  padding: 100px 0;
  p {
    font-size: 26px;
    margin-top: 5px;
    color: #00000080;
    font-weight: 400;
    text-align: right;
  }
  & .leftLine {
    position: absolute;
    width: 77px;
    height: 100%;
    background: #e9b141;
    top: 60px;
    left: -35px;
    z-index: 1;
  }
  & .wrap {
    display: flex;
  }
  & .rightLine {
    position: absolute;
    width: 77px;
    height: 100%;
    background: #e9b141;
    top: -60px;
    right: -35px;
    z-index: 1;
  }
  & .leftCol {
    background: #ececec;
    align-self: flex-end;
    padding: 80px 80px 0;
    margin-left: -120px;
    margin-bottom: -60px;
    z-index: 999;
  }
  & .rightCol {
    background: #ececec;
    align-self: flex-end;
    padding: 50px 80px 80px;
    margin-right: -70px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  & .wrap2 {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 160px;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 18px;
      text-align: right;
    }
  }

  @media (max-width: 924px) {
    img {
      width: 100%;
      font-size: 20px;
      max-width: 100% !important;
    }
    p {
      text-align: center;
      margin-top: 10px;
      width: 100%;
    }
    & .wrap {
      flex-direction: column;
    }
    & .wrap2 {
      flex-direction: column;
    }
    & .leftCol {
      position: relative;
      text-align: center;
      margin: 0;
      padding: 10px;
      width: 100%;
    }
    & .rightCol {
      width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
      align-self: center;
      padding: 10px;
    }
  }
  @media (max-width: 767px) {
    & .leftLine {
      display: none;
    }
    & .rightLine {
      display: none;
    }
  }
`

const Button = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.txtColor};
  padding: 18px 26px;
  margin-top: 30px;
  background: ${(props) => props.bgColor};
  @media (max-width: 924px) {
    align-self: center;
  }
`

const Container = styled.section`
  display: flex;
  max-width: 1280px;
  width: 90%;
  margin: auto;
`
export default Home
