import React from 'react'
import styled from "styled-components";
import starStyle from "../assets/css/star.css";
import UserImage from "../assets/bill.jfif";
export const Grid = styled.div`
  display: block;
  width: 100%;
  padding: 0;
`;

export const GridWide1200 = styled.div`
  max-width: 1300px;
  margin: auto;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 700px;
`;
export const Left = styled.div`
  flex: 5;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoImage = styled.img.attrs((props) => ({
  src: props.src || UserImage,
  alt: props.alt || "logo",
}))`
  position: absolute;
  z-index: 10;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  overflow: hidden;

  background-position: center center;
  background-size: cover;
`;
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
`;

export const Info = styled.div`
  position: absolute;
  z-index: 11;
  margin-left: 5%;
  margin-top: 45%;
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
`;
export const SubTitle = styled.div`
  text-transform: capitalize;
`;

export const Circle = styled.div`
  position: absolute;
  z-index: 1;
  height: 710px;
  width: 700px;
  border-radius: 50%;
  border: #010101 solid 2px;
  margin-left: -65%;
  padding:100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const CircleRow1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 95%;
`;
export const CircleRow2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 520px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 94%;
`;
export const CircleRow3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 120%;
`;
export const CircleRow4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 113%;
`;
export const CircleRow5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 420px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 92%;
`;

export const Point = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #010101;
  margin: 0 4px;
`;

export const RoundText = styled.div`
  font-size: 0.9rem;
  line-height: 1.6rem;
`;

export const RoundStar = styled.div`
  display: flex;
`;

export const Icon = styled.i`

  font-size: 1.8rem;
`;
export const Right = styled.div`
  flex: 7;
`;
export const TitleRight = styled.div`
  
  &:before {
	content: "";
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
`;
export const TextBox = styled.div`
  margin-top: 34%;
  width: 614px;
  height: 310px;
  overflow: hidden;
`;
export const TextBoxAre = styled.textarea`
  border: dotted #cfcfcf 4px;
  border-radius: 4px;
`;
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
`;
const Rating = () => {
  return (
    <GridWide1200>
		<Grid>
	  <Main>
          <Left>
            <LogoImage></LogoImage>
            <Info>
              <Title>Bill gates</Title>
              <SubTitle>professor game</SubTitle>
            </Info>
            <Circle>
              <CircleRow1>
                  <RoundText>Completion</RoundText>
                  <Point></Point>
                  <RoundStar>
                    {/* <Icon className="fa-solid fa-star"></Icon>
                    <Icon className="fa-solid fa-star"></Icon>
                    <Icon className="fa-regular fa-star"></Icon>
                    <Icon className="fa-regular fa-star"></Icon>
                    <Icon className="fa-regular fa-star"></Icon> */}
                       <section id="rate__1" className="rating__1">
                                    <input
                                        type="radio"
                                        id="star_5__1"
                                        name="rate__1"
                                        value="5"
                                    />
                                    <label for="star_5__1"
                                        ><Icon className="fa-solid fa-star"></Icon>
                                    </label>
                                    <input
                                        type="radio"
                                        id="star_4__1"
                                        name="rate__1"
                                        value="4"
                                    />
                                    <label for="star_4__1"
                                        ><Icon className="fa-solid fa-star"></Icon>
                                    </label>
                                    <input
                                        type="radio"
                                        id="star_3__1"
                                        name="rate__1"
                                        value="3"
                                    />
                                    <label for="star_3__1"
                                        ><Icon className="fa-solid fa-star"></Icon>
                                    </label>
                                    <input
                                        type="radio"
                                        id="star_2__1"
                                        name="rate__1"
                                        value="2"
                                    />
                                    <label for="star_2__1"
                                        ><Icon className="fa-solid fa-star"></Icon>
                                    </label>
                                    <input
                                        type="radio"
                                        checked
                                        id="star_1__1"
                                        name="rate__1"
                                        value="1"
                                    />
                                    <label for="star_1__1"
                                        ><Icon className="fa-solid fa-star"></Icon>
                                    </label>
                                </section>
                  </RoundStar>
				</CircleRow1>
				<CircleRow2>
                  <RoundText>Pricing compared to quality</RoundText>
                  <Point></Point>
                  <RoundStar>
                  <section id="rate__2" class="rating__2">
                                    
                                    <input
                                        type="radio"
                                        id="star_5__2"
                                        name="rate__2"
                                        value="5"
                                    />
                                    <label for="star_5__2"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>

                                    
                                    <input
                                        type="radio"
                                        id="star_4__2"
                                        name="rate__2"
                                        value="4"
                                    />
                                    <label for="star_4__2"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_3__2"
                                        name="rate__2"
                                        value="3"
                                    />
                                    <label for="star_3__2"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_2__2"
                                        name="rate__2"
                                        value="2"
                                    />
                                    <label for="star_2__2"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        checked
                                        id="star_1__2"
                                        name="rate__2"
                                        value="1"
                                    />
                                    <label for="star_1__2"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                </section>
                  </RoundStar>
				</CircleRow2>
				<CircleRow3>
                  <RoundText>Skill</RoundText>
                  <Point></Point>
                  <RoundStar>
                  <section id="rate__3" class="rating__3">
                                    
                                    <input
                                        type="radio"
                                        id="star_5__3"
                                        name="rate__3"
                                        value="5"
                                    />
                                    <label for="star_5__3"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>

                                    
                                    <input
                                        type="radio"
                                        id="star_4__3"
                                        name="rate__3"
                                        value="4"
                                    />
                                    <label for="star_4__3"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_3__3"
                                        name="rate__3"
                                        value="3"
                                    />
                                    <label for="star_3__3"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_2__3"
                                        name="rate__3"
                                        value="2"
                                    />
                                    <label for="star_2__3"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        checked
                                        id="star_1__3"
                                        name="rate__3"
                                        value="1"
                                    />
                                    <label for="star_1__3"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                </section>
                  </RoundStar>
				</CircleRow3>
				<CircleRow4>
                  <RoundText>Atitude</RoundText>
                  <Point></Point>
                  <RoundStar>
                  <section id="rate__4" class="rating__4">
                                    
                                    <input
                                        type="radio"
                                        id="star_5__4"
                                        name="rate__4"
                                        value="5"
                                    />
                                    <label for="star_5__4"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>

                                    
                                    <input
                                        type="radio"
                                        id="star_4__4"
                                        name="rate__4"
                                        value="4"
                                    />
                                    <label for="star_4__4"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_3__4"
                                        name="rate__4"
                                        value="3"
                                    />
                                    <label for="star_3__4"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_2__4"
                                        name="rate__4"
                                        value="2"
                                    />
                                    <label for="star_2__4"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        checked
                                        id="star_1__4"
                                        name="rate__4"
                                        value="1"
                                    />
                                    <label for="star_1__4"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                </section>
                  </RoundStar>
				</CircleRow4>
				<CircleRow5>
                  <RoundText>Response Rate</RoundText>
                  <Point></Point>
                  <RoundStar>
                  <section id="rate__5" class="rating__5">
                                    
                                    <input
                                        type="radio"
                                        id="star_5__5"
                                        name="rate__5"
                                        value="5"
                                    />
                                    <label for="star_5__5"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>

                                    
                                    <input
                                        type="radio"
                                        id="star_4__5"
                                        name="rate__5"
                                        value="4"
                                    />
                                    <label for="star_4__5"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_3__5"
                                        name="rate__5"
                                        value="3"
                                    />
                                    <label for="star_3__5"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        id="star_2__5"
                                        name="rate__5"
                                        value="2"
                                    />
                                    <label for="star_2__5"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                    
                                    <input
                                        type="radio"
                                        checked
                                        id="star_1__5"
                                        name="rate__5"
                                        value="1"
                                    />
                                    <label for="star_1__5"
                                        ><i class="fa-solid fa-star"></i>
                                    </label>
                                </section>
                  </RoundStar>
				</CircleRow5>
            </Circle>
          </Left>
          <Right>
            <TitleRight>Rating</TitleRight>
            <TextBox>
              <TextBoxAre
                rows="19"
                cols="80"
                placeholder="TYPE YOUR THOUGHT ON THIS FREELANCERS"
                maxlength="980"
              ></TextBoxAre>
            </TextBox>
            <Submit>submit feedback</Submit>
          </Right>
        </Main>
	  </Grid>
		</GridWide1200>
  )
}

export default Rating
