{/*import * as React from 'react'
import styled from 'styled-components'
import UserImage from '../assets/bill.jfif'
import Rating from '@mui/material/Rating'
import '../assets/css/grid.css'
import '../assets/css/rating.css'

export const Grid = styled.div`
  display: block;
  width: 100%;
  padding: 0;
`

export const GridWide1200 = styled.div`
  max-width: 1300px;
  margin: auto;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 700px;
`
export const Left = styled.div`
  flex: 5;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`

export const LogoImage = styled.img.attrs((props) => ({
  src: props.src || UserImage,
  alt: props.alt || 'logo',
}))`
  position: absolute;
  z-index: 10;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  overflow: hidden;

  background-position: center center;
  background-size: cover;
`
// background-image: url("./../img/bill.jfif");
export const Image = styled.div`
  position: absolute;
  z-index: 10;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-left: 4%;
  overflow: hidden;

  background-position: center center;
  background-size: cover;
`

export const Info = styled.div`
  position: absolute;
  z-index: 11;
  margin-left: 5%;
  margin-top: 45%;
`
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
`
export const SubTitle = styled.div`
  text-transform: capitalize;
`

export const Circle = styled.div`
  position: absolute;
  z-index: 1;
  height: 710px;
  width: 700px;
  border-radius: 50%;
  border: #010101 solid 2px;
  margin-left: -65%;
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

export const CircleRow1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 95%;
`
export const CircleRow2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 520px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 92%;
`
export const CircleRow3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 118%;
`
export const CircleRow4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 111%;
`
export const CircleRow5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 420px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 91%;
`

export const Point = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #010101;
  margin: 0 4px;
`

export const RoundText = styled.div`
  font-size: 0.9rem;
  line-height: 1.6rem;
`

export const RoundStar = styled.div`
  display: flex;
`

export const Icon = styled.i`
  font-size: 1.8rem;
`
export const Right = styled.div`
  flex: 7;
`
export const TitleRight = styled.div`
  &:before {
    content: '';
    position: absolute;
    top: 130%;
    left: 24%;
    right: 24%;
    border-top: #e8a910 solid 4px;
  }
  margin: 10px auto;
  display: inline-block;
  margin-left: -2%;
  position: relative;
  text-transform: capitalize;
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 2.6rem;
  letter-spacing: 1px;
`
export const TextBox = styled.div`
  margin-top: 34%;
  width: 614px;
  height: 310px;
  overflow: hidden;
`
export const TextBoxAre = styled.textarea`
  border: dotted #cfcfcf 4px;
  border-radius: 4px;
`
export const Submit = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  background-color: #e8a910;
  width: 200px;
  height: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Rate = () => {
  const [value, setValue] = React.useState(2)
  const [value2, setValue2] = React.useState(2)
  const [value3, setValue3] = React.useState(2)
  const [value4, setValue4] = React.useState(2)
  const [value5, setValue5] = React.useState(2)
  return (
    <div id='main' className='grid__1200 wide'>
      <div className='main grid__row'>
        <div className='rating__logo'>rating</div>

        <div className='main__left grid__col l__5 m__12 s__12 '>
          <div className='main__left--img'></div>
          <div className='main__left--info'>
            <div className='info__name'>bill gates</div>
            <div className='info__position'>professor game</div>
          </div>
          <div className='main__left--circle'>
            <div className='left__circle--row'>
              <div className='row__text'>Completion</div>
              <div className='row__point'></div>
              <div className='row__star'>
                <section id='rate__1' className='rating__1'>
                  <input type='radio' id='star_5__1' name='rate__1' value='5' />
                  <label htmlFor='star_5__1'>
                    <i className='fa-solid fa-star'></i>
                  </label>

                  <input type='radio' id='star_4__1' name='rate__1' value='4' />
                  <label htmlFor='star_4__1'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_3__1' name='rate__1' value='3' />
                  <label htmlFor='star_3__1'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_2__1' name='rate__1' value='2' />
                  <label htmlFor='star_2__1'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input
                    type='radio'
                    defaultChecked
                    id='star_1__1'
                    name='rate__1'
                    value='1'
                  />
                  <label htmlFor='star_1__1'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                </section>
              </div>
            </div>
            <div className='left__circle--row'>
              <div className='row__text'>Pricing compared to quality</div>
              <div className='row__point'></div>
              <div className='row__star'>
                <section id='rate__2' className='rating__2'>
                  <input type='radio' id='star_5__2' name='rate__2' value='5' />
                  <label htmlFor='star_5__2'>
                    <i className='fa-solid fa-star'></i>
                  </label>

                  <input type='radio' id='star_4__2' name='rate__2' value='4' />
                  <label htmlFor='star_4__2'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_3__2' name='rate__2' value='3' />
                  <label htmlFor='star_3__2'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_2__2' name='rate__2' value='2' />
                  <label htmlFor='star_2__2'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input
                    type='radio'
                    defaultChecked
                    id='star_1__2'
                    name='rate__2'
                    value='1'
                  />
                  <label htmlFor='star_1__2'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                </section>
              </div>
            </div>
            <div className='left__circle--row'>
              <div className='row__text'>Skill</div>
              <div className='row__point'></div>
              <div className='row__star'>
                <section id='rate__3' className='rating__3'>
                  <input type='radio' id='star_5__3' name='rate__3' value='5' />
                  <label htmlFor='star_5__3'>
                    <i className='fa-solid fa-star'></i>
                  </label>

                  <input type='radio' id='star_4__3' name='rate__3' value='4' />
                  <label htmlFor='star_4__3'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_3__3' name='rate__3' value='3' />
                  <label htmlFor='star_3__3'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_2__3' name='rate__3' value='2' />
                  <label htmlFor='star_2__3'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input
                    type='radio'
                    defaultChecked
                    id='star_1__3'
                    name='rate__3'
                    value='1'
                  />
                  <label htmlFor='star_1__3'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                </section>
              </div>
            </div>
            <div className='left__circle--row'>
              <div className='row__text'>Atitude</div>
              <div className='row__point'></div>
              <div className='row__star'>
                <section id='rate__4' className='rating__4'>
                  <input type='radio' id='star_5__4' name='rate__4' value='5' />
                  <label htmlFor='star_5__4'>
                    <i className='fa-solid fa-star'></i>
                  </label>

                  <input type='radio' id='star_4__4' name='rate__4' value='4' />
                  <label htmlFor='star_4__4'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_3__4' name='rate__4' value='3' />
                  <label htmlFor='star_3__4'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_2__4' name='rate__4' value='2' />
                  <label htmlFor='star_2__4'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input
                    type='radio'
                    defaultChecked
                    id='star_1__4'
                    name='rate__4'
                    value='1'
                  />
                  <label htmlFor='star_1__4'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                </section>
              </div>
            </div>
            <div className='left__circle--row'>
              <div className='row__text'>Response Rate</div>
              <div className='row__point'></div>
              <div className='row__star'>
                <section id='rate__5' className='rating__5'>
                  <input type='radio' id='star_5__5' name='rate__5' value='5' />
                  <label htmlFor='star_5__5'>
                    <i className='fa-solid fa-star'></i>
                  </label>

                  <input type='radio' id='star_4__5' name='rate__5' value='4' />
                  <label htmlFor='star_4__5'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_3__5' name='rate__5' value='3' />
                  <label htmlFor='star_3__5'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input type='radio' id='star_2__5' name='rate__5' value='2' />
                  <label htmlFor='star_2__5'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                  <input
                    type='radio'
                    defaultChecked
                    id='star_1__5'
                    name='rate__5'
                    value='1'
                  />
                  <label htmlFor='star_1__5'>
                    <i className='fa-solid fa-star'></i>
                  </label>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className='grid__col l__7 m__12 s__12'>
          <div className='main__right     '>
            <div className='main__right--textbox'>
              <textarea
                className='textbox'
                rows='12'
                cols='78'
                placeholder='TYPE YOUR THOUGHT ON THIS FREELANCERS'
                maxLength='980'
              ></textarea>
            </div>
            <div className='main__right--submit'>submit feedback</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rate
*/}