import React from "react";
import styled from "styled-components";
import ImageArray from "./Images.js";


const StyledGrid = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  background-color: black;
  width: 90vw;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat-content;
  gap: 20px;
`;

const Image = styled.img`
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const shuffledArray = shuffleArray(ImageArray);

const Grid = ({ handleMouseOver, handleMouseOut, handleClick }) => {
  const items = shuffledArray.map((item, index) => (
    <Image
      /* onMouseOver={(event)=>setShow(event.target.display="block")} onMouseOut={(event)=>setShow(event.target.display="none")} */
      onMouseOver={(e) => handleMouseOver(e)}
      onMouseOut={(e) => handleMouseOut(e)}
      onClick={(e) => handleClick(e)}
      key={index}
      src={item.source}
      alt={item.description}
      width="250px"
      data-text={item.description}
      data-credits={item.credit}
    />
  ));

  return <StyledGrid>{items}</StyledGrid>;
};

export default Grid;
