import React from "react";
import styled from "styled-components";

function Person({ person, openHandler }) {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const togglePopup = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <>
      <ImageContainer image={person.image} onClick={openHandler} />
    </>
  );
}

export default Person;

export const ImageContainer = styled.div`
  margin: 3rem 4rem;
  width: 20rem;
  height: 20rem;
  background-color: yellow;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10%;
`;
