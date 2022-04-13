import React from 'react';
import styled from "styled-components";

const StyledHeadline = styled.h1`
  margin-top: 6rem;
  margin-left: 2rem;
  
  font-size: 3rem;
  font-weight: 300;
  color: black;
  filter: drop-shadow(2px 2px 0px yellow) drop-shadow(1px 1px 0px yellow);
  transform: skew(30deg, -20deg);
  z-index: 4;
`;


const Headline = () => {
  const city="Berlin"
  return (
    <StyledHeadline>{city}</StyledHeadline>
  )
}

export default Headline